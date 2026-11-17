const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: [0, "l'âge ne peut pas être négatif"],
        max: [120, "l'âge maximum est 120 ans"]
    },
}, {
    timestamps: true // Ajoute createdAt et updatedAt automatiquement
});


module.exports = mongoose.model('User', userSchema);