import './index.scss';

import axios from 'axios';

import storage from 'local-storage';
import { inserirCliente } from '../../api/clienteApi';
import LoadingBar from 'react-top-loading-bar'
import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function CadastroCliente() {

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');
    const [genero, setGenero] = useState();
    const [erro, setErro] = useState('');

    const [carregando, setCarregando] = useState(false);
    const ref = useRef();

  const navigate = useNavigate();

  async function entrarClick() {
    ref.current.continuousStart()
    setCarregando(true)   
    
    try {
      const r = await axios.post('http://localhost:6969/cliente/cadastro', {
          usuario: usuario,
          email: email,
          senha: senha,
          nascimento: data,
          genero: genero
      });

      setTimeout(() => {
        navigate('/');
      }, 3000)

    } catch (err) {
        ref.current.complete();
        setCarregando(false);

        if (err.response)
            toast.error(err.response.data.erro);
        else
            toast.error(err.message);
    }
}

    return(
        <div className="logins">
        <LoadingBar color='#3ef' ref={ref} />

        <div className="part-left">

            <span className="top">
                <img src="/assets/images/nuvem-login.png" alt="" />
            </span>

            <span className="mid">
                <h1>Bem-vindo</h1>
                <p>Crie uma conta para continuar</p>
            </span>

            <span className="bot">
              <img src="/assets/images/nuvem2-login.png" alt="" />
            </span>

        </div>

        <div className="part-right">

            <div className="part-login">

              <div className="card-login">
                  <h1>Crie sua conta</h1>


                  <input className="inputs-padrao" placeholder='Nome de usuário' type="text" value={usuario} onChange={e => setUsuario(e.target.value)}  />

                  <input className="inputs-padrao" placeholder='E-mail' type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                  <input className="inputs-padrao" placeholder='Senha' type="text" value={senha} onChange={e => setSenha(e.target.value)}/>

                  <p>Data de Nascimento / Genero</p>

                  <div className="part-selects">

                    <div className="ano">
                        <input type="date" min="1950-01-01" max="2023-01-01" value={data} onChange={e => setData(e.target.value)} />
                    </div>

                  <div className="genero">
                    <select value={genero} onChange={e => setGenero(e.target.value)}>
                        <option value="" disabled selected>Selecione um genero</option>
                        <option value="Masculino" key="">Masculino</option>
                        <option value="Feminino" key="">Feminino</option>
                        <option value="Outro" key="">Outro</option>
                    </select>
                  </div>
                  </div>

                  <button onClick={entrarClick} disabled={carregando}>CADASTRE-SE</button>
              </div>

            </div>

        </div>

      </div>

    )
}