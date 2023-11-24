import { criarTabelaPedidoItem, deletarPedidoItem, inserirQuantidadeItem, listarNoCarrinho, listarPedidoItem, removerTabelaPedidoItem } from '../repository/produtoClienteRepository.js';
import { Router } from "express";

const server = Router();

server.post('/quantidade', async (req, resp) => {
    try {
        const quantidade = req.body;

        if(!quantidade.quantidade)
        throw new Error('Informe o quantidade do item desejado.')

        const quantidadeInserida = await inserirQuantidadeItem(quantidade);
        resp.send(quantidadeInserida);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/quantidade', async (req, resp) => {
    try {
        const resposta = await listarPedidoItem();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/quantidade', async (req, resp) => {
    try {
        const resposta = await deletarPedidoItem();
        if (resposta != 1)
            throw new Error('Quantidade não pode ser removida.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/tabela', async (req, resp) => {
    try {
        const resposta = await removerTabelaPedidoItem();
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/tabela', async (req, resp) => {
    try {
        const resposta = await criarTabelaPedidoItem();
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/carrinho/:id', async (req, resp) => {
    try {
        const carrinho = req.params;

        const resposta = await listarNoCarrinho(carrinho);
        
        if (!resposta)
            resp.status(404).send([]);
        else
            resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;