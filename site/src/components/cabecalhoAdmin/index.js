import { useEffect, useState } from 'react';
import './index.scss'
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function CabecalhoAdm() {
    
    const [usuario, setUsuario] = useState('-')
    const navigate = useNavigate();

    const handleButton1Click = () => {
        navigate('/admin'); 
    }

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/loginadm')
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
        }
    }, [])

    return(
        <div className="cabecalho-right">

            <div className='bem-vindo'>
                <p>Seja bem-vindo, {usuario} </p>
            </div>

            <div className='botao-perfil'>
                <span> <button onClick={handleButton1Click}>Home</button> </span>
                <span className="icon-perfil"> {usuario[0].toUpperCase()} </span>    
            </div>
            
        </div>
    )
}