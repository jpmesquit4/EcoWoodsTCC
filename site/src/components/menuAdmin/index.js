import './index.scss'

import { useNavigate, Link } from 'react-router-dom';
import storage from 'local-storage'

export default function MenuAdm(props) {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/cadastroprodutos'); 
    };

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/loginadm')
    }

    function verificarMenuSelecionado(menu) {
        if(menu === props.selecionado) 
            return 'selecionado'
        else
            return '';
    }



     

    return(
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
                    <Link to='/cadastroprodutos' className={verificarMenuSelecionado('cadastroprodutos')}>Gestão de Produtos</Link>

                    <button>Pedidos e Gestão de Vendas</button>

                    <button>Gestão de Clientes</button>

                    <button>Visão Geral do Painel</button>

                    <span className='vazio'></span>

                    <button onClick={sairClick}>Sair</button>
                </div>
            </div>
    )
}