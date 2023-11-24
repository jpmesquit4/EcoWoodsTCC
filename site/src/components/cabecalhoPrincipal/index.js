import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';
import { carregarProduto } from '../../api/produtoApi';

export default function Cabecalho(props) {

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/logincliente');
    }

    function abrirCarrinhovazio() {
        navigate('/carrinho')
    }

    function voltarHome() {
        navigate('/')
    }

    const cliente = storage('cliente-logado').id;

    function pagPerfilcliente(cliente) {
        navigate(`/perfilCliente/${cliente}`)
    }




    return (
        <div className='pagina-cabecalho'>
            <div className="cabecalho-top">

                <div className="header-left">
                    <img src="/assets/images/barra.png" alt="" />
                    <p>Menu</p>

                    <span onClick={voltarHome}>
                    
                    <img src="/assets/images/botao-home.png" alt="" />
                    <p>Início</p>

                    </span>

                    <button onClick={sairClick}>Sair</button>
                </div>

                <div className="header-mid">
                    <h1>EcoWoods</h1>
                </div>

                <div className="header-bot">
                    <img onClick={() => pagPerfilcliente(cliente)} src="/assets/images/icon-perfil-cabecalho.png" alt="" />
                </div>
            </div>

            <div className="cabecalho-mid">
                <img src="/assets/images/logo.png" alt="" />
            </div>
        </div>
    )


}