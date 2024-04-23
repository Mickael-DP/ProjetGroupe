const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connexion à MongoDB
mongoose
	.connect('mongodb://localhost:27017/myapp', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Connection to MongoDB failed:', error);
	});

// Routes utilisateur
app.use('/api/users', userRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
