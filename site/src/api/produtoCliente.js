import axios from 'axios';

const api = axios.create({
    baseURL: 'http://129.148.42.252:5020'
})

export async function inserirQuantidadeItem(quantidade) {
    const resposta = await api.post('/quantidade', {
        quantidade: quantidade
    })

    return resposta.data;
}

export async function listarPedidoItem() {
    const resposta = await api.get('/quantidade');
    return resposta.data;
}

export async function listarNoCarrinho(id) {
    const resposta = await api.get(`/produto/${id}`);
    return resposta.status;
}

export async function removerQuantidade() {
    const resposta = await api.delete(`/quantidade`);
    return resposta.status;
}

export async function removerTabela() {
    const resposta = await api.delete(`/tabela`);
    return resposta.status;
}

export async function criarTabela() {
    const resposta = await api.post(`/tabela`);
    return resposta.status;
}