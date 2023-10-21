import './index.scss';
import axios from 'axios';

import storage from 'local-storage';
import { cadastrarCliente } from '../../api/clienteApi';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import {useState, useRef, useEffect} from 'react';

export default function LoginCliente()  {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const [carregando, setCarregando] = useState(false);
  const ref = useRef();


  useEffect(() => {
    if(storage('cliente-logado')) {
        navigate('/')
    } else {
      const clientelogado = storage('cliente-logado');
      setUsuario(clientelogado);
    }
  }, [])

  const navigate = useNavigate();

  async function entrarClick() {
    ref.current.continuousStart()
    setCarregando(true) 
    
    try {
      const r = await cadastrarCliente(usuario, email, senha )
      storage('cliente-logado', r)
      navigate('/');

      setTimeout(() => {
        navigate('/');
      }, 3000)

    } catch (err) {
      ref.current.complete();
      setCarregando(false);

      if (err.response.status === 401) {
        setErro(err.response.data.erro)
      }
    }
}




  return (
    <div className="pagina-loginCliente">
      <LoadingBar color='#3ef' ref={ref} />
      
      <div className="logins">

        <div className="part-left">

            <span className="top">
                <img src="/assets/images/nuvem-login.png" alt="" />
            </span>

            <span className="mid">
                <h1>Bem-vindo</h1>
                <p>Faça o login para continuar</p>
            </span>

            <span className="bot">
              <img src="/assets/images/nuvem2-login.png" alt="" />
            </span>

        </div>

        <div className="part-right">

            <div className="part-login">
              
              <div className="card-login">
                  <h1>Log in</h1>

                  <h4>Faça login para continuar acessando as páginas</h4>

                  <input placeholder='Nome' type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />

                  <input placeholder='E-mail' type="text" value={email} onChange={e => setEmail(e.target.value)} />

                  <input placeholder='Senha' type="text" value={senha} onChange={e => setSenha(e.target.value)}/>

                  <h5>{erro}</h5>

                  <button onClick={entrarClick} disabled={carregando}>CONTINUE</button>
              </div>

            </div>

        </div>

      </div>

    </div>
  );
}

