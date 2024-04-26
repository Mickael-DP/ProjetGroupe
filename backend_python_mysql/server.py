import mysql.connector
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime


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

    # Convertir la date au format 'YYYY-MM-DD'
    formatted_date = datetime.strptime(user_data['birthday'], '%d/%m/%Y').strftime('%Y-%m-%d')

    # Mettre à jour la valeur de la clé 'birthday' dans user_data
    user_data['birthday'] = formatted_date

    # Insérer les données dans la base de données
    sql_insert_query = """INSERT INTO utilisateur (firstname, lastname, email, birthday, city, address_code)
    VALUES (%(firstName)s, %(lastName)s, %(email)s, %(birthday)s, %(city)s, %(addressCode)s)"""
    cursor.execute(sql_insert_query, user_data)
    conn.commit()
    print("Record inserted successfully")

    # Renvoyer les données insérées et un code 200 OK
    return {'user': user_data}

@app.get("/users")
async def get_users():
    cursor = conn.cursor()
    sql_select_Query = "select * from utilisateur"
    cursor.execute(sql_select_Query)
    # get all records
    records = cursor.fetchall()
    print("Total number of rows in table: ", cursor.rowcount)
    # renvoyer nos données et 200 code OK
    return {'utilisateurs': records}

