import './index.scss'
import Cabecalho from '../../components/cabecalhoPrincipal';

export default function HistoricoPedidos() {


    return(
        <div className="pagina-HistoricoPedidos">
            <div className="cabecalho">
                <Cabecalho />
            </div>

            <div className='menu'>
                <div className="cabecalho-meio">
                    <h1>Histórico Pedidos</h1>
                </div>

                <div className='historico'>

                    <div className='pedido-1'>
                        <div className='pedido-1-top'>
                            <span>
                                <p>Pedido feito em</p>
                                <p>total</p>
                            </span>
                                <p>pedido #12321</p>
                            
                        </div>

                        <div className="pedido-1-middle">
                            <p>24/10/2004</p>
                            <p>R$100,99</p>
                        </div>

                        <div className='pedido-1-bot'>
                            <div className='part-image'>
                                <img src="/assets/images/img-result.png" alt="" />
                            </div>

                            <div className='part-info'>
                                <h1>Mesa de meio de sala de estar</h1>
                                <p>$100,99</p>
                                <button>COMPRAR NOVAMENTE</button>
                                <button>DETALHES DO PEDIDO</button>
                            </div>
                        </div>
                    </div>

                    <div className='pedido-1'>
                        <div className='pedido-1-top'>
                            <span>
                                <p>Pedido feito em</p>
                                <p>total</p>
                            </span>
                                <p>pedido #12321</p>
                            
                        </div>

                        <div className="pedido-1-middle">
                            <p>24/10/2004</p>
                            <p>R$100,99</p>
                        </div>

                        <div className='pedido-1-bot'>
                            <div className='part-image'>
                                <img src="/assets/images/img-result.png" alt="" />
                            </div>

                            <div className='part-info'>
                                <h1>Mesa de meio de sala de estar</h1>
                                <p>$100,99</p>
                                <button>COMPRAR NOVAMENTE</button>
                                <button>DETALHES DO PEDIDO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}