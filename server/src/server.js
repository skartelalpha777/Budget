require('dotenv').config();
const User = require('./models/userSchema');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 2500;
const MONGO_URI = process.env.MONGODB_URL;


app.use(cors());
app.use(express.json());


const connexion = async () => {
  try {
    await
      mongoose.connect(MONGO_URI)
    console.log('Connecté à la base de données Budget sur MongoDB');
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  }
  catch (erreur) {
    console.error('❌ Impossible de se connecter à MongoDB :', erreur.message);
  };
}

connexion();

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
app.get("/api/user/:email", find);
app.get("/api/users/", findAll);

/*
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connecté à la base de données Budget sur MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((erreur) => {
    console.error('❌ Impossible de se connecter à MongoDB :', erreur.message);
  });
  */
/*
const create = async (req, res) => {

  try {
    const newUSer = new User(req.body);
    let email = newUSer.email;
    if (await (User.findOne({ email }))) {
      console.log("l'utilisateur existe deja");
      return res.status(400)

    }

  } catch (error) {

    console.error(error);

  }
}*/


