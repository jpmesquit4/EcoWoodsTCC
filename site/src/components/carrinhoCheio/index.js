import { useEffect, useState } from 'react';
import { buscarImagem, buscarPorId } from '../../api/produtoApi';
import './index.scss';
import { useParams, useNavigate } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import { inserirQuantidadeItem } from '../../api/produtoCliente';
import { toast } from 'react-toastify';

export default function CarrinhoCheio(props) {

    const [produto, setProduto] = useState({});
    const [quantidade, setQuantidade] = useState(1);

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

    function pagFinalizar(id) {
        navigate(`/finalizarPedidos/${id}`)
    }

    async function salvarClickQuantidade() {
        try {
            await inserirQuantidadeItem(quantidade);
                toast.dark('🚀 Quantidade inserida com sucesso!');
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    async function alertClickPrazo() {

        confirmAlert({
            title: 'Prazo de Estorno',
            message: `Cerca de 10 dias após sua validação pela EcoWoods, dependendo exclusivamente dos prazos de cada banco.
            Todos os pedidos possuem envio gratuito aos clientes e apenas serão aceitas eventuais devoluções/trocas de itens adquiridos via Client Services ou pela loja virtual www.ecowoods.com.br
            `
        })   
    }

    async function alertClickPagamento() {

        confirmAlert({
            title: 'Forma de pagamento',
            message: `O pagamento pode ser realizado por cartão de crédito ou transferência bancária. As bandeiras aceitas são: Visa, Mastercard, American Express e Diners. Apenas cartões de crédito emitidos no Brasil são aceitos.
            Ao realizar um pedido online, o endereço de cobrança deve estar alinhado com o endereço do seu cartão de crédito.
            `
        })   
    }

    async function alertClickEntrega() {

        confirmAlert({
            title: 'Prazo de Entrega',
            message: `Ao realizar um pedido online ou por telefone, são necessárias de 24 a 36 horas para preparar seu pedido. É durante este período que ocorre a confirmação do pagamento (aprovação do depósito bancário ou autorização da compra pela administradora do cartão de crédito).
            
            O prazo de entrega varia de acordo com a localidade do destino do pedido. O prazo começa a ser contado a partir do momento que entregamos o seu pedido para a transportadora. Os pedidos realizados no site oficial da Louis Vuitton são entregues pelos Correios e transportadoras parceiras, dependendo da localização e valor do seu pedido.
            
            ENTREGA REGULAR:
            
            Confira o prazo médio de entrega por localidade*:
            
            - Região Nordeste: até 6 dias úteis (capitais) e 7 dias úteis (demais cidades)
            - Região Norte: até 6 dias úteis (capitais) e 7 dias úteis (demais cidades)
            - Região Centro-Oeste: até 3 dias úteis (capitais) e 5 dias úteis (demais cidades)
            - Região Sudeste: até 3 dias úteis (capitais) e 5 dias úteis (demais cidades)
            - Região Sul: até 3 dias úteis (capitais) e 5 dias úteis (demais cidades)
            
            ENTREGA EXPRESSA
            
            Sedex 12 e Sedex 10
            Sujeito a disponibilidade conforme região e valor do seu pedido.
            `
        })   
    }

    async function alertClickDevolucoes() {

        confirmAlert({
            title: 'Trocas e Devoluções',
            message: `Prazo de Trocas: até 30 dias a partir da data de recebimento do seu pedido.

            Prazo de Devoluções: até 7 dias a partir da data de recebimento do seu pedido.
            `
        })   
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
                                <input type="number" min='1' max='10' value={quantidade} onChange={e => setQuantidade(e.target.value)} quantidadeItem={quantidade}/>
                                <p>R${Number(props.produto.preco) * quantidade}</p>
                            </div>
                        </div>

                        <div className='remover-and-detalhes'>
                            <div onClick={abrirCarrinhoVazio} className="remover">
                                <img src="/assets/images/olhoDetalhes.png" alt="" />
                                <p>Remover</p>
                            </div>

                            <div onClick={() => abrirDetalhes(produto.id)} className="detalhes">
                                <img src="/assets/images/removerCarrinho.png" alt="" />
                                <p>Ver detalhes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='botao-finalizar'>
                    {/* <button onClick={() => pagFinalizar(produto.id)}>Finalizar compra</button> */}
                    <button onClick={() => {
                        salvarClickQuantidade();
                        pagFinalizar(produto.id);                    
                    }}>Finalizar    </button>
                </div>


            </div>

            <div className="part-info2">

                <div onClick={alertClickPrazo} className='informacoes'>
                    <img src="/assets/images/card.png" alt="" />
                    <h1>Prazo de Estorno</h1>
                </div>

                <span className='line'></span>

                <div onClick={alertClickPagamento} className='informacoes'>
                    <img src="/assets/images/card.png" alt="" />

                    <div>
                        <h1>Forma de Pagamento</h1>
                        <p>cartão de credito e cartão de débito</p>
                    </div>

                </div>

                <span className='line'></span>

                <div onClick={alertClickEntrega} className='informacoes'>
                    <img src="/assets/images/caminhao.png" alt="" />

                    <div>
                        <h1>Prazo de Entrega</h1>
                        <p>Frete gratuito para todo território nacional</p>
                    </div>

                </div>

                <span className='line'></span>

                <div onClick={alertClickDevolucoes} className='informacoes'>
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