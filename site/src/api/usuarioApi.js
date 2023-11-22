import axios from 'axios';

const api = axios.create({
  baseURL: 'http://129.148.42.252:5020'
});

export async function login(email, senha) {
    const r = await api.post('/login', {
          email: email,
          senha: senha
        });

    return r.data;  
}