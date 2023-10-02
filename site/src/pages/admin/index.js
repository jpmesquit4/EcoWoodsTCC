import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function AdmPainel() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Use navigate para mudar a URL quando o botão for clicado
      navigate('/cadastroprodutos'); // Substitua '/nova-url' pela URL desejada
    };

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/loginadm')
        }
    }, [])


  return (
    <div className="pagina-cadastroProdutos">

            <div className="part-left">
                <div className="cabecalho-left">
                    <div>
                        <img src="/assets/images/logo.png" alt="" />
                    </div>

                        <div className="divisor"></div>

                    <div>
                        <h1>Ecowoods</h1>

                        <p>ADMIN PAINEL</p>
                    </div>
                </div>

                <div className="menu-left">
                    <button onClick={handleButtonClick}>Gestão de Produtos</button>

                    <button>Gestão de Produtos</button>

                    <button>Pedidos e Gestão de Vendas</button>

                    <button>Gestão de Clientes</button>

                    <button>Visão Geral do Painel</button>

                    <span className='vazio'></span>

                    <button>Sair</button>
                </div>
            </div>

            <div className="part-right">
                <div className="cabecalho-right">
                    <span> <button>Home</button> </span>
                    <span> <img className="carta-sino" src="/assets/images/sino.png" alt="" /></span>
                    <span> <img className="carta-sino" src="/assets/images/carta.png" alt="" /></span>
                    <span> <img className="icon-perfil" src="/assets/images/icon-perfil.png" alt="" /></span>
                </div>

                <div className='menu-right'>

                </div>
            </div>
        </div>
  );
}