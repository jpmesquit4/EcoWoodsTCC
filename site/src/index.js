import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import LoginCliente from './pages/loginCliente';
import CadastroCliente from './pages/cadastroCliente';
import LoginADM from './pages/loginADM';
import Home from './pages/home';
import CadastroProdutos from './pages/cadastroProdutos';
import AdmPainel from './pages/admin';
import ConsultarProdutos from './pages/consultarProdutos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resultado from './pages/resultadoBusca';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logincliente' element={<LoginCliente />}/>
          <Route path='/cadastrocliente' element={<CadastroCliente />}/>
          <Route path='/loginadm' element={<LoginADM />}/>
          <Route path='/resultadoBuscar' element={<Resultado/>} />

          <Route path='/cadastroprodutos' element={<CadastroProdutos/>} />
          <Route path='/alterar/:idParam' element={<CadastroProdutos/>} />

          <Route path='/consultarprodutos' element={<ConsultarProdutos/>} />
          <Route path='/admin' element={<AdmPainel/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

