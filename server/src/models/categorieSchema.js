import mongoose from "mongoose";

const categorieSchema = mongoose.Schema.create({

    userId: {
        type: Number,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    couleur: {
        type: String
    },

});

export default mongoose.model('Categorie', categorieSchema);