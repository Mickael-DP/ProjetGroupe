const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';  // Fallback to 'localhost' if not set
const MONGO_PORT = process.env.MONGO_PORT || 27017;  // Fallback to 27017 if not set

app.use(express.json());
// Autoriser toutes les origines
app.use(cors());

// Connexion à MongoDB
const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/myapp`;
mongoose
	.connect(mongoURI, {
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
