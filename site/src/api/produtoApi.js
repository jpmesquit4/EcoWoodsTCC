import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:6969'
})

export async function cadastrarProduto(nome, descricao, preco, qntEstoque, categoria, tamanhos, favorito, usuario) {
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

export async function enviarImagemProduto(id, imagem) {
    const formData = new FormData();
    formData.append('image', imagem);

    
    const resposta = await api.put(`/produto/${id}/image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })

    return resposta.data;
}