const express = require('express');
const User = require("../models/userSchema")

const findAll = async (req,res) => {

    try {

        const users = await User.find();
        if (users) {
            return res.status(200).json(users);
        }
        else {
            return res.status(404).json({ message: 'Utilisateur introuvable' })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erreur du serveur" })
    }
}

const find = async (req, res) => {

    try {
        const { email } = req.params;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(404).json({ message: 'Utilisateur introuvable' })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erreur du serveur" })
    }
}
const route = express.Router();
route.get("/users", findAll);
route.get("/user/:email", find);
module.exports = route;