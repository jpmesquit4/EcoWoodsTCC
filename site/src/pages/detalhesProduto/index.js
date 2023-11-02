import './index.scss';
import Cabecalho from '../../components/cabecalhoPrincipal';
import Rodape from '../../components/rodapePrincipal';

import { Link } from 'react-router-dom';

export default function DetalhesProduto() {


    return(
        <div className='pagina-detalhesProduto'>
            <Cabecalho />

            <div className='photo-and-info'>
                <div className='photo'>
                    <img src="/assets/images/florestasPlantadas.png" alt="" />
                </div>

                <div className='info'>
                    <div className='nomeProduto'>
                        <h1>CADEIRA PIET - ACABAMENTO RÚSTICO</h1>
                        <img src="/assets/images/favoritar-result.png" alt="" />
                    </div>

                    <p>R$2430,00</p>

                    <div className='tamanhoProduto'>
                        <p>Tamanhos</p>

                        <div>
                            <p>(C)0.42 x (L)0.48 x (A)0.86</p>

                            <p>(C)0.38 x (L)0.44 x (A)0.82</p>
                        </div>
                    </div>

                    <img src="/assets/images/messageballoon.png" alt="" />

                    <div className='descProduto'>
                        <p>Descrição</p>

                        <p className='desc-cinza'>

                            CADEIRA PIET - ACABAMENTO RÚSTICO <br/> <br/>
                            Feita principalmente de madeira maciça. <br/>
                            Material durável que confere robustez à cadeira. <br/>
                            Variação de tons naturais, de carvalho claro a nogueira escura. <br/>
                            Estilo rústico. <br/>
                            Encosto reto com ripas horizontais. <br/>
                            Assento plano com ligeira inclinação para suporte lombar. <br/>
                            Pernas sólidas e ligeiramente cônicas para estabilidade. <br/>
                            Juntas reforçadas para garantir a solidez. <br/>
                            Adequada para diversos espaços, como sala de jantar, escritório ou varandas. <br/>
                        </p>
                    </div>

                    <div className='entregaProduto'>
                        <p>Entrega</p>

                        <div className='entrega'>
                            <img src="/assets/images/entrega.png" alt="" />

                            <div>
                                <p>ENTREGA</p>

                                <p>Entrega padrão feita em 4 a 6 dias úteis (US$ 12)</p>
                                <p>Entrega expressa feita em 2 a 3 dias úteis (US$ 20)</p>
                            </div>
                        </div>

                        <span className='line'></span>

                        <div className='pagamento'>
                            <img src="/assets/images/creditcard.png" alt="" />

                            <div>

                                <p>PAGAMENTO</p>

                                <p>Cartão de crédito, cartão de débito</p>

                            </div>
                        </div>
                    </div>

                <div className='botao-e-input'>

                    <Link to='/carrinho'><button>ADICIONAR AO CARRINHO</button> </Link>
                    <input type="number" min='1' max='10' />
                </div>

                </div>
            </div>

            <Rodape />
        </div>
    )
}