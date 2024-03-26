const mongoose = require('../../config/mongo')
const { Schema } = mongoose;

const estoqueSchema = new Schema(
    {
        produtoEstoque: String, 
        quantidadeEstoque: Number,
        
    },
    {
        timestamps: true,
    }
);

const estoqueModel = mongoose.model('estoque', estoqueSchema);

module.exports = estoqueModel;