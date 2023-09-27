import { alterarProdutoPorID, buscarTodosProdutos, inserirProduto, removerProduto} from '../repository/produtoRepository.js'
import { Router } from "express";

const server = Router();

server.post('/produto', async (req, resp) => {
    try {
        const { categoria, produto, descricao, preco, estoque, favorito } = req.body;

        const resposta = await inserirProduto(categoria, produto, descricao, preco, estoque, favorito);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/produto', async (req, resp) => {
    try {
        const resposta = await buscarTodosProdutos();
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerProduto(id);
        if (resposta != 1)
            throw new Error('Produto não pode ser removido.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const produto = req.body;

        if (!produto.categoria)
            throw new Error('Categoria do Produto é obrigatório!')

        if (!produto.produto)
            throw new Error('Nome do Produto é obrigatório!')

        if (!produto.preco)
            throw new Error('Preço é obrigatório!')

        if(!produto.estoque)
            throw new Error('Quantidade no Estoque é obrigatório!')

        const resposta = await alterarProdutoPorID(id, produto)
        if (resposta != 1)
            throw new Error('Veiculo não pode ser alterado.');

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;