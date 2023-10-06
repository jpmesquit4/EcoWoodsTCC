import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:6969'
})

export async function cadastrarProduto(nome, descricao, preco, estoque, categoria, tamanhos, adm) {
    const resposta = await api.post('/produto', {
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        categoria: categoria,
        tamanhos: tamanhos,
        adm: adm
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