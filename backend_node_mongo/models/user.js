const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	birthday: { type: Date, required: true },
	city: { type: String, required: true },
	addressCode: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
