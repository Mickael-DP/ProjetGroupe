import './App.css';
import { AppBar, Card, CardContent, Grid, Typography } from '@mui/material';
import Forms from './components/Forms/Forms';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [userCount, setUserCount] = useState(0);

	useEffect(() => {
		// Fonction pour récupérer le nombre d'utilisateurs inscrits
		const fetchUserCount = async () => {
			try {
				// Requête vers le backend Node.js avec MongoDB pour récupérer le nombre d'utilisateurs
				const nodeResponse = await axios.get(
					'http://localhost:8000/api/users/count'
				);
				const nodeUserCount = nodeResponse.data.count;

				// Requête vers le backend Python avec MySQL pour récupérer le nombre d'utilisateurs
				// const pythonResponse = await axios.get('http://localhost:5000/api/users/count');
				// const pythonUserCount = pythonResponse.data.count;
				setUserCount(nodeUserCount);
			} catch (error) {
				console.error('Error fetching user count:', error);
			}
		};

		// Appel de la fonction pour récupérer le nombre d'utilisateurs inscrits
		fetchUserCount();
	}, []);

	return (
		<div className='App'>
			<AppBar position='static'>
				<h1>TP FINAL</h1>
			</AppBar>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={12}
					sm={6}>
					<Card>
						<CardContent>
							<Forms />
						</CardContent>
					</Card>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}>
					<Card>
						<CardContent>
							<Typography variant='h6'>Users manager:</Typography>
							<Typography>{userCount} user(s) already registered</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
