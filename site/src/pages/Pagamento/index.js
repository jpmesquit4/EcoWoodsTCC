import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { buscarPorId, buscarImagem } from "../../api/produtoApi";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Pagamento() {

    const [produto, setProduto] = useState({});
    const navigate = useNavigate();

    console.log(produto)

    const {idParam} = useParams();

    useEffect(() => {
        carregarProduto();
    }, []);

    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);   
    }

    return (
        <main className="PagamentosCartao">
            <section className="container">
                <div className="Produtos">
                    <div className="map">
                        <h2>{produto.produto}</h2>

                        <div>
                            <img src={buscarImagem(produto.imagem)} alt="" />
                        </div>
                    </div>
                </div>

                <div className="nav-right">
                    <h2>Finalizando Pedido</h2>
                    <p>Opção de Envio</p>

                    <div className="inputs">
                        <select className="sel-entrega">
                            <option className="opt" value="" disabled selected>Selecione o Modo de Entrega</option>
                            <option className="opt" value='Expresso Padrão' key="">Expresso Padrão</option>
                            <option className="opt" value='Expresso Rápido' key="">Expresso Rápido</option>
                            <option className="opt" value='Retirar na Loja' key="">Retirar na Loja</option>
                        </select>

                        <div className="nav-input">
                            <div className="part-2">
                                <select className="Estado">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="São Paulo" key="">São Paulo</option>
                                    <option value="Rio de Janeiro" key="">Rio de Janeiro</option>
                                </select>

                                <select className="Cidade">
                                    <option value="" disabled selected>Cidade</option>
                                    <option value="São Paulo" key="">São Paulo</option>
                                    <option value="Rio de Janeiro" key="">Rio de Janeiro</option>
                                </select>

                                <InputMask mask='99999-999' type="text" placeholder="CEP" id="" />
                            </div>

                            <div className="part-1">
                                <input type="text" placeholder="Bairro" id="" />
                                <input type="text" placeholder="Rua" id="" />
                                <input type='text' placeholder='Complemento (Opcional)' id='' />
                            </div>
                        </div>
                    </div>

                    <div className="Detalhes">
                        <div className="p-1">
                            <span className="line-1">
                                <p>Detalhes Preço Original</p>
                                <input type='text' placeholder='Selecione ou Insira o Código' id='' />
                            </span>

                            <span className="line-2">
                                <p>Subtotal dos Produto</p>
                                <span> R${produto.preco}</span>
                                {''} {/*Usar para puxar o subtotal dos produtos */}
                            </span>
                            <span className="line-3">
                                <p>Subtotal do Frete</p>
                                <span>R$12</span>
                                {''} {/*Usar para puxar o frete */}
                            </span>
                        </div>

                        <div className="p-2">
                            <p>Total do Pedido (1 item): {''} {/*Colocar a quantidade de pedidos*/}</p>
                            <span className="change">
                                {''} R${Number(produto.preco) + 12}
                            </span>
                        </div>
                    </div>

                    <div className="nav-parcelamento">
                        <div className="nav-button">
                            <label className="switch">
                                <span className="switch-text">Parcelamento</span>
                                <div className="switch-wrapper">
                                    <input type="checkbox" />
                                    <span className="switch-button"></span>
                                </div>
                            </label>
                        </div>

                        <div className="selecionar-parcelas">
                            <select className="selecionar-parc">
                                <option value="" disabled selected >Selecione a quantidade</option>
                                <option value="2x" key="">2x</option>
                                <option value="3x" key="">3x</option>
                                <option value="4x" key="">4x</option>
                                <option value="5x" key="">5x</option>
                                <option value="6x" key="">6x</option>
                                <option value="7x" key="">7x</option>
                                <option value="8x" key="">8x</option>
                                <option value="9x" key="">9x</option>
                            </select>
                        </div>
                    </div>

                    <div className="Detalhes">
                        <div className="p-1">
                            <span className="line-1">
                                <p>Detalhes Preço Parcelado</p>
                            </span>

                            <span className="line-2">
                                <p>Taxa de Juros:</p>
                                <span>
                                    12
                                    {''} {/*Usar para puxar o subtotal dos produtos */}
                                    %
                                </span>
                            </span>
                            <span className="line-3">
                                <p>Valor das Parcelas</p>
                                <span>
                                    12
                                    {''} {/*Usar para puxar o frete */}
                                </span>
                                
                            </span>
                        </div>

                        <div className="p-2">
                            <p>Total do Pedido</p>
                            <span className="change">
                                {''} {/*Usar para puxar o total do pedido */}12
                            </span>
                        </div>
                    </div>

                    <div className="nav-pagamento">
                        <InputMask type="text" mask="9999.9999.9999.9999" placeholder="Número do Cartão" id="" />
                        <div>
                            <InputMask type="text" mask="99/9999" placeholder="Vencimento" id="" />
                            <InputMask type="text" maxLength="4" placeholder="CVV" id="" />
                        </div>
                        <input type="text" placeholder="Nome do Títular" />
                    </div>
                    <div className="nav-confirmar">
                        <button> Finalizar Compra </button>
                    </div>
                </div>
            </section>
        </main>
    );
}