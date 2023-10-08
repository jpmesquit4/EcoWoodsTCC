import { alterarProdutoPorID, buscarTodosProdutos, inserirProduto, removerProduto, alterarImagem, buscarPorId, buscarPorNome} from '../repository/produtoRepository.js'
import multer from 'multer';
import { Router } from "express";

const server = Router();
const upload = multer({ dest: 'storage/imageProdutos'})

server.post('/produto', async (req, resp) => {
    try {
        const novoProduto = req.body;

        if(!novoProduto.nome)
        throw new Error('Nome do produto é obrigatório!')

        if(!novoProduto.descricao)
        throw new Error('Descrição do produto é obrigatória!')

        if(novoProduto.preco <= 0 || novoProduto.preco === undefined)
        throw new Error('Preço do produto é obrigatório!')

        if(!novoProduto.estoque)
        throw new Error('Quantidade no estoque é obrigatório!')
    
        if(!novoProduto.categoria)
        throw new Error('Categoria do produto é obrigatório!')

        if(!novoProduto.tamanhos)
        throw new Error('Tamanho do produto é obrigatório!')

        if(!novoProduto.adm)
        throw new Error('Adm não logado!')

        const produtoInserido = await inserirProduto(novoProduto);
        resp.send(produtoInserido);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarPorNome(nome);
        if (resposta.length == 0)
            resp.status(404).send([]);
        else
            resp.send(resposta);

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

server.get('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await buscarPorId(id);
        
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



server.put('/produto/:id/image', upload.single('image'), async (req, resp) => {
    try {

        if (!req.file)
            throw new Error('Escolha uma Imagem.')

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.')

        resp.status(204).send();

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