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

                    <Link>Pedidos e Gestão de Vendas</Link>

                    <Link>Gestão de Clientes</Link>

                    <Link>Visão Geral do Painel</Link>

                    <span className='vazio'></span>

                    <a onClick={sairClick} href='#'>Sair</a>
                </div>
            </div>
    )
}