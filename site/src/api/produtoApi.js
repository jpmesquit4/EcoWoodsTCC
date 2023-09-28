import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export async function cadastroProduto(nome, descricao, preco, qntEstoque, categoria, tamanhos, favorito, usuario) {
    const resposta = await api.post('/produto', {
        nome: nome,
        descricao: descricao,
        preco: preco,
        qntEstoque: qntEstoque,
        categoria: categoria,
        tamanhos: tamanhos,
        favorito: favorito,
        usuario: usuario 
    })

    return resposta.data;
}