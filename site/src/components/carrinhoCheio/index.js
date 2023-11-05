import { useEffect, useState } from 'react';
import { buscarImagem, buscarPorId } from '../../api/produtoApi';
import './index.scss';
import { useParams, useNavigate } from 'react-router-dom';

export default function CarrinhoCheio(props) {

    const [produto, setProduto] = useState({});

    const navigate = useNavigate();

    const { idParam } = useParams();

    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);
    }

    useEffect(() => {
        carregarProduto();
    }, [])

    function abrirDetalhes(id) {
        navigate(`/detalhesproduto/${id}`)
    }

    function abrirCarrinhoVazio() {
        navigate('/carrinho')
    }


    return (
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
                        <img src={buscarImagem(props.produto.imagem)} alt="" />
                    </div>

                    <div className="part-info">

                        <h1>{props.produto.produto}</h1>


                        <div className="info-produto">
                            <div className='info'>
                                <p>Descrição</p>
                                <p className="cinza">{props.produto.descricao}</p>
                            </div>

                            <div className='valor'>
                                <input type="number" min='1' max='10' />
                                <p>{props.produto.preco}</p>
                            </div>
                        </div>

                        <div className='remover-and-detalhes'>
                            <div className="remover">
                                <img src="/assets/images/olhoDetalhes.png" alt="" />
                                <p onClick={abrirCarrinhoVazio}>Remover</p>
                            </div>

                            <div onClick={() => abrirDetalhes(produto.id)} className="detalhes">
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

            <div className="part-info2">

                <div className='informacoes'>
                    <img src="/assets/images/card.png" alt="" />
                    <h1>Prazo de Estorno</h1>
                </div>

                <span className='line'></span>

                <div className='informacoes'>
                    <img src="/assets/images/card.png" alt="" />

                    <div>
                        <h1>Forma de Pagamento</h1>
                        <p>cartão de credito e cartão de débito</p>
                    </div>

                </div>

                <span className='line'></span>

                <div className='informacoes'>
                    <img src="/assets/images/caminhao.png" alt="" />

                    <div>
                        <h1>Prazo de Entrega</h1>
                        <p>Frete gratuito para todo território nacional</p>
                    </div>

                </div>

                <span className='line'></span>

                <div className='informacoes'>
                    <img src="/assets/images/cartaseta.png" alt="" />

                    <div>
                        <h1>Troca e Devoluções</h1>
                        <p>com coleta reversa gratuita</p>
                    </div>
                </div>

            </div>
        </div>
    )
}