import "./App.css";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Switch } from "@mui/material";
import Forms from "./components/Forms/Forms";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8001/users");
      setUsers(response.data.utilisateurs || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

	// try {
	// 	const response = await axios.get('http://localhost:8000/users');
	// 	setUsers(response.data.utilisateurs || []);
	// } catch (error) {
	// 	console.error('Error fetching users:', error);
	// }
  };

  const deleteUser = async (userId) => {
    if (!isAdmin) {
      console.error("Action interdite : Vous n'êtes pas admin.");
      return;
    }
    try {
      await axios.delete(`http://localhost:8001/users/${userId}`);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}
        >
          <Typography variant="h6" color="inherit" sx={{ marginRight: 'auto' }}>
            TP FINAL
          </Typography>
          
          <Typography variant="subtitle1" color="inherit" sx={{ marginLeft: 2 }}>
            {isAdmin ? "Admin" : "User"}
          </Typography>
          
          <Switch
            checked={isAdmin}
            onChange={(event) => setIsAdmin(event.target.checked)}
            color="default"
            sx={{ marginLeft: 1 }}
          />
        </Box>
      </AppBar>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Forms onUserCreated={fetchUsers}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Users Manager
              </Typography>
              <List dense>
                {users.map((user) => (
                  <ListItem key={user.id}>
                    <ListItemText
                      primary={`ID: ${user.id}, Email: ${user.email}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => deleteUser(user.id)}
                      >
                        X
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
