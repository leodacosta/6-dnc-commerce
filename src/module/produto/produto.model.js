const mongoose = require('../../config/mongo')
const { Schema } = mongoose;


const produtoSchema = new Schema(
    {
        titulo: String, 
        descrição: String,
        preco: String,
    },
    {
        timestamps: true,
    }
);

const produtoModel = mongoose.model('produtos', produtoSchema);

module.exports = produtoModel;