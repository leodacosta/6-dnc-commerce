const express = require('express');
const app = express();
const produtoModel = require('./src/module/produto/produto.model');
const clienteModel = require('./src/module/cliente/cliente.model');
const pedidoModel = require('./src/module/pedido/pedido.model');
const vendaModel = require('./src/module/venda/venda.model');
const estoqueModel = require('./src/module/estoque/estoque.model')



app.use(express.json());

app.get('/cliente', async (req, res) => {

    const cliente = await clienteModel.find({});
    return res.status(200).json(cliente);
    
});

app.post('/cliente', async (req, res) => {

    if (!req.body.nome) {
        return res.status(400).json({ message: 'O campo nome é obrigatorio'});
    }

    if (!req.body.email) {
        return res.status(400).json({ message: 'O campo email é obrigatorio'});
    }

    if (!req.body.telefone) {
        return res.status(400).json({ message: 'O campo telefone é obrigatorio'});
    }

    if (!req.body.endereco) {
        return res.status(400).json({ message: 'O campo endereço é obrigatorio'});
    }

    const cliente = await clienteModel.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
    })
    return res.status(201).json(cliente);
});

app.get('/produto', async (req, res) => {
    
    const produto = await produtoModel.find({});
    return res.status(200).json(produto);
});

app.post('/produto', async (req, res) => {

    if (!req.body.titulo) {
        return res.status(400).json({ message: 'O campo titulo é obrigatorio'});
    }

    if (!req.body.descricao) {
        return res.status(400).json({ message: 'O campo descrição é obrigatorio'});
    }

    if (!req.body.preco) {
        return res.status(400).json({ message: 'O campo preco é obrigatorio'});
    }

    const produto = await produtoModel.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        preco: req.body.preco,
    })


    return res.status(201).json(produto);
});

app.get('/venda', async (req, res) => {

    const venda = await vendaModel.find({});
    return res.status(200).json(venda);
});

app.post('/venda', async (req, res) => {

    if (!req.body.produtoVenda) {
        return res.status(400).json({ message: 'O campo produto é obrigatorio'});
    }

    if (!req.body.quantidadeVenda) {
        return res.status(400).json({ message: 'O campo quantidade é obrigatorio'});
    }

    if (!req.body.clienteVenda) {
        return res.status(400).json({ message: 'O campo preco é cliente'});
    }

    const venda = await vendaModel.create({
        nomeProduto: req.body.nomeProduto,
        quantidade: req.body.quantidade,
        clientevenda: req.body.clientevenda,
    })

    return res.status(201).json(venda);
});

app.get('/pedido', async (req, res) => {

    const pedido = await pedidoModel.find({});
    return res.status(200).json(pedido);
    
});

app.post('/pedido', async (req, res) => {

    if (!req.body.dataEntrega) {
        return res.status(400).json({ message: 'O campo Data de entrega é obrigatorio'});
    }

    if (!req.body.status) {
        return res.status(400).json({ message: 'O campo status é obrigatorio'});
    }

    
    const pedido = await pedidoModel.create({
        dataEntrega: req.body.dataEntrega,
        status: req.body.status,
    })

    return res.status(201).json(pedido);
});

app.get('/estoque', async (req, res) => {

    const estoque = await estoqueModel.find({});
    return res.status(200).json(estoque);
});

app.post('/estoque', async (req, res) => {

    if (!req.body.produtoEstoque) {
        return res.status(400).json({ message: 'O campo produto é obrigatorio'});
    }

    if (!req.body.quantidadeEstoque) {
        return res.status(400).json({ message: 'O campo quantidade é obrigatorio'});
    }

    const estoque = await estoqueModel.create({
        produtoEstoque: req.body.produtoEstoque,
        quantidadeEstoque: req.body.quantidadeEstoque,
        
    })

    return res.status(201).json(estoque);
});


app.listen(8080, () => {
    console.log('Servidor funcionando na porta do seu 8080');
});