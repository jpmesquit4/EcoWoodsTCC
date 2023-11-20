import './index.scss';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function CabecalhoCarrinho() {

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/logincliente');
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

                    <img src="/assets/images/icon-perfil-cabecalho.png" alt="" />
                </div>
            </div>
        </div>
    )


}