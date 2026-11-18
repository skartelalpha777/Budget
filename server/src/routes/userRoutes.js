const express = require('express');
const User = require("../models/userSchema")
const bcrypt = require('bcrypt');

const findAll = async (req, res) => {

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

const create = async (req, res) => {
    const { email, password } = req.body || {};;
    try {
        let exist = await User.findOne({ email });
        if (exist) {
            return res.status(409).json({ message: "Cet uilisateur existe déja" })
        }
        else {
            const passwordHash = await bcrypt.hash(password, 10);
            const user = new User({ email, passwordHash });
            await user.save();
            return res.status(201).json({ message: "Inscription reussi" })
        }
    } catch (error) {
        return res.status(500).json({ message: "erreur du serveur" })
    }
}

const route = express.Router();
route.get("/users", findAll);
route.get("/user/:email", find);
route.post("/user/new", create);
module.exports = route;
