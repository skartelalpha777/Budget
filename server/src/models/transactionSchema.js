import mongoose from "mongoose";

const transactionsSchemas = mongoose.Schema.create({

    userId: {
        type: String,
        required: true
    },
    categorieId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    tag: {
        type: Array,
        maxLength: 5,
        required: false
    },

},
    { timestamps: true });

export default mongoose.model('Transaction', transactionsSchemas);