const mongoose = require('../../config/mongo')
const { Schema } = mongoose;

const clienteSchema = new Schema(
    {
        nome: String, 
        email: String,
        telefone: String,
        endereco: String,
    },
    {
        timestamps: true,
    }
);

const clienteModel = mongoose.model('cliente', clienteSchema);

module.exports = clienteModel;