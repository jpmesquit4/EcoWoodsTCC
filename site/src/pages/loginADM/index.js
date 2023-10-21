import { login } from '../../api/usuarioApi.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import {useState, useRef} from 'react'
import './index.scss'




export default function LoginADM() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false)

    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
      if(storage('usuario-logado')) {
          navigate('/admin')
      } else {
        const usuarioLogado = storage('usuario-logado');
        setUsuario(usuarioLogado);
      }
  }, [])

    const ref = useRef();

    async function entrarClick() {

      ref.current.continuousStart()
      setCarregando(true)

      try {
        const r = await login(email, senha)
        storage('usuario-logado', r)

        setTimeout(() => {
          navigate('/admin');
        }, 3000)

        
      } catch (err) {
        ref.current.complete()
        setCarregando(false)

        if(err.response.status === 401) {
          setErro('Credenciais Invalidas')
        }
      }
    }


    return (
        <div className="pagina-loginADM">
          <LoadingBar color='3ef' ref={ref} />
      
      <div className="logins">

        <div className="part-left">

            <span className="top">
                <img src="/assets/images/nuvem-login.png" alt="" />
            </span>

            <span className="mid">
                <h1>Login ADM</h1>
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

                  <h4>Faça login como administrador</h4>

                  <input placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                  <input placeholder='Senha' type="password" value={senha} onChange={e => setSenha(e.target.value)}/>

                  <button onClick={entrarClick} disabled={carregando}>CONTINUE</button>

                  <p>{erro}</p>
              </div>

            </div>

        </div>

      </div>

    </div>
    )

}