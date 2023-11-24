import axios from 'axios';

const api = axios.create({
    baseURL: 'http://129.148.42.252:5020'
})

export async function cadastrarCliente(usuario, email, senha) {
    const resposta = await api.post('/cliente/login', {
        usuario: usuario,
        email: email,
        senha: senha,
    })

    return resposta.data;
}

export async function inserirInfoEndereco(id, cep, rua, numero, bairro, estado, cidade) {
    const resposta = await api.post('/cliente/endereco', {
        id: id,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        estado: estado,
        cidade: cidade
    })

    return resposta.data;
}

export async function inserirInfoCartao(id, titular, cartao, cvv, vencimento) {
    const resposta = await api.post('/cliente/cartao', {
        id: id,
        titular: titular,
        cartao: cartao,
        cvv: cvv,
        vencimento: vencimento
    })

    return resposta.data;
}

export async function inserirCliente(usuario, email, senha, nascimento, genero) {
    const resposta = await api.post('/cliente/cadastro', {
        usuario: usuario,
        email: email,
        senha: senha,
        nascimento: nascimento,
        genero: genero
    })

    return resposta.data;
}

export async function listarInfoClientes(id) {
    const resposta = await api.get(`/cliente/${id}`);
    return resposta.data;
}

export async function listarEnderecos(id) {
    const resposta = await api.get(`/endereco/${id}`);
    return resposta.data;
}

export async function alterarInfo(id, nome, email, nascimento, genero) {
    const resposta = await api.put(`/usuario/${id}`, {
        nome: nome,
        email: email,
        nascimento: nascimento,
        genero: genero,
    })

    return resposta.data;
}