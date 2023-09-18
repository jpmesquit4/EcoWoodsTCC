import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import LoginCliente from './pages/loginCliente';
import CadastroCliente from './pages/cadastroCliente';
import LoginADM from './pages/loginADM';
import Home from './pages/home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logincliente' element={<LoginCliente />}/>
        <Route path='/cadastrocliente' element={<CadastroCliente />}/>
        <Route path='/loginadm' element={<LoginADM />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

