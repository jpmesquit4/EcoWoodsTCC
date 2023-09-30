import { login } from '../repository/usuarioRepository.js'

import { Router } from 'express';
const server = Router()


server.post('/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        const x = await login(email, senha)

        if (!x) {
            throw new Error('Credenciais Invalidas')
        }

        resp.send(x)

    } catch (err) {
        resp.status(401).send({
            erro: 'Ocorreu um erro'
        });
    }
})





export default server;