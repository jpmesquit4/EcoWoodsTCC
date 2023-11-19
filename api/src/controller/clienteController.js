import { inserirCliente, listarInfoClientes, loginCliente, alterarInfo, inserirInfoEndereco, inserirInfoCartao, listarEnderecos} from '../repository/clienteRepository.js'
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

server.post('/cliente/endereco', async (req, resp) => {
    
    try {
        const endereco = req.body;
        const usuario = req.body;

        if(!endereco.cep)
        throw new Error('CEP é obrigatório!')

        if(!endereco.rua)
        throw new Error('Nome da rua é obrigatório!')

        if(!endereco.numero)
        throw new Error('Número da residencia é obrigatório!')

        if(!endereco.bairro)
        throw new Error('Nome do bairro é obrigatório!')

        if(!endereco.estado)
        throw new Error('Estado é obrigatório!')

        if(!endereco.cidade)
        throw new Error('Cidade é obrigatória!')

        if(!usuario.id)
        throw new Error('ID é obrigatório!')

        const resposta = await inserirInfoEndereco(endereco, usuario);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/cliente/cartao', async (req, resp) => {
    
    try {
        const cartao = req.body;
        const usuario = req.body;

        if(!cartao.titular)
        throw new Error('Nome do titular é obrigatório!')

        if(!cartao.cartao)
        throw new Error('Número do Cartão é obrigatório!')

        if(cartao.cartao.length < 16)
        throw new Error('Preencha todo o campo do Número do cartão!')

        if(!cartao.cvv)
        throw new Error('CVV é obrigatório!')

        if(cartao.cvv.length < 4)
        throw new Error('Preencha todo o campo do CVV!')

        if(!cartao.vencimento)
        throw new Error('Data de vencimento é obrigatório!')

        if(cartao.vencimento.length < 6)
        throw new Error('Preencha todo o campo de Vencimento!')

        if(!usuario.id)
        throw new Error('ID é obrigatório!')

        const resposta = await inserirInfoCartao(cartao, usuario);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
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

server.get('/endereco/:id', async (req, resp) => {
    try {
        const id = req.params;

        const resposta = await listarEnderecos(id);
        
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