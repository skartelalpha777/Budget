require('dotenv').config();
const User = require('./models/userSchema');
const route = require('./routes/userRoutes');
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
app.use("/api", route);
connexion();



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


