import './App.css';
import { AppBar, Card, CardContent, Grid, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import Forms from './components/Forms/Forms';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	// Fonction pour récupérer le nombre d'utilisateurs inscrits
	// 	const fetchUserCount = async () => {
	// 		try {
	// 			// Requête vers le backend Node.js avec MongoDB pour récupérer le nombre d'utilisateurs
	// 			// const nodeResponse = await axios.get(
	// 			//	'http://localhost:8000/api/users'
	// 			// );
	// 			// const nodeUserCount = nodeResponse.data.length;
	// 			// setUserCount(nodeUserCount);

	// 			// Requête vers le backend Python avec MySQL pour récupérer le nombre d'utilisateurs
	// 			const pythonResponse = await axios.get('http://localhost:8001/users/');
	// 			const pythonUserCount = pythonResponse.data.count;
	// 			setUserCount(pythonUserCount);
	// 			setUsers(pythonResponse.data.results);
	// 		} catch (error) {
	// 			console.error('Error fetching user count:', error);
	// 		}
	// 	};

	// 	// Appel de la fonction pour récupérer le nombre d'utilisateurs inscrits
	// 	fetchUserCount();
	// }, []);

	useEffect(() => {
        fetchUsers();
    }, []);

	const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8001/users');
            setUsers(response.data.utilisateurs || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

	const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:8001/users/${userId}`);
            fetchUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

	

	return (
		<div className='App'>
		<AppBar position='static' style={{ padding: '10px', textAlign: 'center' }}>
			<Typography variant="h6" color="inherit">
				TP FINAL
			</Typography>
		</AppBar>
		<Grid container spacing={2} style={{ padding: '20px' }}>
			<Grid item xs={12} sm={6}>
				<Card>
					<CardContent>
						<Forms />
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Card>
					<CardContent>
						<Typography variant='h6' gutterBottom>
							Users Manager
						</Typography>
						<List dense>
							{users.map((user) => (
								<ListItem key={user.id}>
									<ListItemText
										primary={`ID: ${user.id}, Email: ${user.email}`}
									/>
									<ListItemSecondaryAction>
										<IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user.id)}>
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
