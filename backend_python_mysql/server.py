from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import os

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a connection to the database
conn = mysql.connector.connect(
    database=os.getenv("MYSQL_DATABASE"),
    user=os.getenv("MYSQL_USER"),
    password=os.getenv("MYSQL_ROOT_PASSWORD"),
    port=3306, 
    host=os.getenv("MYSQL_HOST"))

@app.post("/users")
async def create_user(user_data: dict):
    cursor = conn.cursor()
    try:
        # Convertir la date au format 'YYYY-MM-DD' si la date est fournie
        # if 'birthday' in user_data and user_data['birthday']:
        #     user_data['birthday'] = datetime.strptime(user_data['birthday'], '%d/%m/%Y').strftime('%Y-%m-%d')
        
        sql_insert_query = """INSERT INTO utilisateur (firstname, lastname, email, birthday, city, address_code)
        VALUES (%(firstName)s, %(lastName)s, %(email)s, %(birthday)s, %(city)s, %(addressCode)s)"""
        cursor.execute(sql_insert_query, user_data)
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        cursor.close()
    return {'user': user_data}

@app.get("/users")
async def get_users():
    cursor = conn.cursor(dictionary=True)
    try:
        sql_select_Query = "SELECT * FROM utilisateur"
        cursor.execute(sql_select_Query)
        records = cursor.fetchall()
        print("Total number of rows in table: ", cursor.rowcount)
        return {'utilisateurs': records}
    finally:
        cursor.close()

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    cursor = conn.cursor()
    try:
        sql_delete_query = "DELETE FROM utilisateur WHERE id = %s"
        cursor.execute(sql_delete_query, (user_id,))
        conn.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": "User deleted successfully"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        cursor.close()

