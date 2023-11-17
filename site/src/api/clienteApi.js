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

export async function inserirInfoEndereco(usuario, cep, rua, numero, bairro, estado, cidade) {
    const resposta = await api.post('/cliente/endereco', {
        usuario: usuario.id,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        estado: estado,
        cidade: cidade
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

export async function alterarInfo(id, nome, email, nascimento, genero) {
    const resposta = await api.put(`/usuario/${id}`, {
        nome: nome,
        email: email,
        nascimento: nascimento,
        genero: genero,
    })

    return resposta.data;
}