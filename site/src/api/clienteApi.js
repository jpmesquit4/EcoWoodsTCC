import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6969'
})

export async function cadastrarCliente(usuario, email, senha) {
    const resposta = await api.post('/cliente/login', {
        usuario: usuario,
        email: email,
        senha: senha,
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