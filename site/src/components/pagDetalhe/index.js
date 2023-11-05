import './index.scss';
import { Link} from 'react-router-dom';
import { buscarImagem } from '../../api/produtoApi';


export default function PagDetalhes(props) {


    return(
        <div className='photo-and-info'>
                <div className='photo'>
                    <img src={buscarImagem(props.produto.imagem )} alt="" />
                </div>

                <div className='info'>
                    <div className='nomeProduto'>
                        <h1> { props.produto.produto } </h1>
                        <img src="/assets/images/favoritar-result.png" alt="" />
                    </div>

                    <p>{ props.produto.preco }</p>

                    <div className='tamanhoProduto'>
                        <p>Tamanho</p>

                        <div>
                            <p>{ props.produto.tamanho }</p>
                        </div>
                    </div>

                    <img src="/assets/images/messageballoon.png" alt="" />

                    <div className='descProduto'>
                        <p>Descrição</p>

                        <p className='desc-cinza'>
                            { props.produto.descricao }
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
    )
}