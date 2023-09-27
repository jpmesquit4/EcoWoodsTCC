import './index.scss';

export default function AdmPainel() {



  return (
    <div className="pagina-admPainel">

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
                    <button>Gestão de Produtos</button>

                    <button>Pedidos e Gestão de Vendas</button>

                    <button>Gestão de Clientes</button>

                    <button>Visão Geral do Painel</button>
                </div>
            </div>

            <div className="linha"></div>
        </div>
  );
}