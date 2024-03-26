const mongoose = require('../../config/mongo')
const { Schema } = mongoose;

const pedidoSchema = new Schema(
    {
        dataEntrega: String, 
        status: String,
    },
    {
        timestamps: true,
    }
);

const pedidoModel = mongoose.model('pedido', pedidoSchema);

module.exports = pedidoModel;