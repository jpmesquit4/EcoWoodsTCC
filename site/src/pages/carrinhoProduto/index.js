import './index.scss'

import Cabecalho from '../../components/cabecalhoPrincipal'
import Rodape from '../../components/rodapePrincipal'

export default function CarrinhoProduto() {
    


    return(
        <div className='pagina-CarrinhoProduto'>
            <Cabecalho />

            <div className='carrinho-cheio'>
                <div className="menu-part1">

                    <div className="ew-paravoce">
                        <span className='ew'>
                            <h2>EW</h2>
                        </span>

                        <span className='paravoce'>
                            <p>Para você</p>
                        </span>
                    </div>

                    <p>Meu carrinho (1)</p>

                    <div className="produto">
                        <div className="part-imagem">
                            <img src="/assets/images/florestasPlantadas.png" alt="" />
                        </div>

                        <div className="part-info">
                            
                            <h1>CADEIRA PIET - ACABAMENTO RÚSTICO</h1>
                              

                            <div className="info-produto">
                                <div className='info'>
                                    <p>cor</p>
                                    <p className="cinza">Variação de tons naturais, de carvalho claro a nogueira escura.</p>
                                </div>

                                <div className='valor'>
                                    <input type="number" />
                                    <p>R$139,99</p>
                                </div>
                            </div>

                            <div className='remover-and-detalhes'>
                                <div className="remover">
                                    <img src="/assets/images/olhoDetalhes.png" alt="" />
                                    <p>Remover</p>
                                </div>

                                <div className="detalhes">
                                    <img src="/assets/images/removerCarrinho.png" alt="" />
                                    <p>Ver detalhes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className='botao-finalizar'>
                    <button>Finalizar compra</button>
                </div>


                </div>
            </div>

            <div>
                <Rodape />
            </div>
        </div>
    )
}