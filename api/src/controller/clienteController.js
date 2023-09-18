import { inserirCliente, buscarTodosCliente, removerCliente, alterarClienteporID} from '../repository/clienteRepository.js'
import { Router } from "express";

const server = Router();

server.post('/cliente', async (req, resp) => {
    try {
        const { nome, email, telefone, cpf, cnh } = req.body;

        const resposta = await inserirCliente(nome, email, telefone, cpf, cnh);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.get('/cliente', async (req, resp) => {
    try {
        const resposta = await buscarTodosCliente();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/cliente/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerCliente(id);
        if (resposta != 1)
            throw new Error('Cliente não pode ser removido.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/cliente/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const cliente = req.body;

        if (!cliente.nome)
            throw new Error('Nome do contato é obrigatório!')

        if (!cliente.email)
            throw new Error('Email é obrigatório!')

        if (!cliente.telefone)
            throw new Error('Telefone é obrigatório!')

        const resposta = await alterarClienteporID(id, cliente)
        if (resposta != 1)
            throw new Error('Contato não pode ser alterado.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})