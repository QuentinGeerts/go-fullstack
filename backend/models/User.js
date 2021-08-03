const mongoose = require('mongoose');

// Permet de sécuriser le unique
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);