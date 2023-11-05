import './index.scss';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function Cabecalho(props) {

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/logincliente');
    }

    function abrirCarrinhovazio() {
        navigate('/carrinho')
    }

    return (
        <div className='pagina-cabecalho'>
            <div className="cabecalho-top">

                <div className="header-left">
                    <img src="/assets/images/barra.png" alt="" />
                    <p>Menu</p>

                    <img src="/assets/images/botao-home.png" alt="" />
                    <p>Buscar</p>

                    <button onClick={sairClick}>Sair</button>
                </div>

                <div className="header-mid">
                    <h1>EcoWoods</h1>
                </div>

                <div className="header-bot">
                    <p>Fale Conosco</p>

                    <p>Favoritos</p>

                    <img onClick={abrirCarrinhovazio} src="/assets/images/sacola.png" alt="" />
                    <p className="notification">{props.cartCount}</p>
                </div>
            </div>

            <div className="cabecalho-mid">
                <img src="/assets/images/logo.png" alt="" />
            </div>
        </div>
    )


}