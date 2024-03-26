const mongoose = require('../../config/mongo')
const { Schema } = mongoose;

const vendaSchema = new Schema(
    {
        produtoVenda: String, 
        quantidadeVenda: String,
        clienteVenda: String,
        
    },
    {
        timestamps: true,
    }
);

const vendaModel = mongoose.model('venda', vendaSchema);

module.exports = vendaModel;