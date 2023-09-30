import 'dotenv/config';

import express from 'express'
import cors from 'cors';

import produtoController from './controller/produtoController.js';
import clienteController from './controller/clienteController.js';
import usuarioController from './controller/usuarioController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(produtoController);
server.use(clienteController);
server.use(usuarioController);




server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))