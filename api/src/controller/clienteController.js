import { inserirCliente, listarInfoClientes, loginCliente, alterarInfo} from '../repository/clienteRepository.js'
import { Router } from "express";

const server = Router();

server.post('/cliente/login', async (req, resp) => {
    
    try {
        const {usuario, email, senha} = req.body;
        const x = await loginCliente(usuario, email, senha)

        if (!x) {
            throw new Error('Credenciais Invalidas')
        }

        resp.send(x)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/cliente/cadastro', async (req, resp) => {
    try {
        const novoUsuario = req.body;

        if(!novoUsuario.usuario)
        throw new Error('Nome do usuario é obrigatório!')

        if(!novoUsuario.email)
        throw new Error('Email é obrigatório!')

        if(!novoUsuario.senha)
        throw new Error('Senha é obrigatória!')

        if(!novoUsuario.nascimento)
        throw new Error('Data de nascimento é obrigatório!')

        if(!novoUsuario.genero)
        throw new Error('Gênero é obrigatório!')

        const resposta = await inserirCliente(novoUsuario);

        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/cliente/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await listarInfoClientes(id);
        
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

server.put('/usuario/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const usuario = req.body;

        if (!usuario.nome)
        throw new Error('Nome do usuario é obrigatório!')

        if (!usuario.email)
            throw new Error('Email do usuario é obrigatório!')

        if (!usuario.nascimento)
            throw new Error('Nascimento é obrigatório!')

        if(!usuario.genero)
            throw new Error('Gênero é obrigatório!')

        const resposta = await alterarInfo(id, usuario)
        if (resposta != 1)
            throw new Error('Usuario não pode ser alterado.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

// server.get('/cliente', async (req, resp) => {
//     try {
//         const resposta = await buscarTodosCliente();
//         resp.send(resposta);

//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })

// server.delete('/cliente/:id', async (req, resp) => {
//     try {
//         const { id } = req.params;

//         const resposta = await removerCliente(id);
//         if (resposta != 1)
//             throw new Error('Cliente não pode ser removido.');

//         resp.status(204).send()
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })

// server.put('/cliente/:id', async (req, resp) => {
//     try {
//         const { id } = req.params;
//         const cliente = req.body;

//         if (!cliente.nome)
//             throw new Error('Nome do contato é obrigatório!')

//         if (!cliente.email)
//             throw new Error('Email é obrigatório!')

//         if (!cliente.telefone)
//             throw new Error('Telefone é obrigatório!')

//         const resposta = await alterarClienteporID(id, cliente)
//         if (resposta != 1)
//             throw new Error('Contato não pode ser alterado.');

//         resp.status(204).send()
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         });
//     }
// })

export default server;