import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { buscarPorId, buscarImagem } from "../../api/produtoApi";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Pagamento() {

    const [produto, setProduto] = useState({});
    const [parcelas, setParcelas] = useState();
    const [entrega, setEntrega] = useState();

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
                        <select className="sel-entrega" value={entrega} onChange={e => setEntrega(e.target.value)}>
                            <option className="opt" value="" disabled selected>Selecione o Modo de Entrega</option>
                            <option className="opt" value='12' key="">Expresso Padrão</option>
                            <option className="opt" value='20' key="">Expresso Rápido</option>
                            <option className="opt" value='0' key="">Retirar na Loja</option>
                        </select>

                        <div className="nav-input">
                            <div className="part-2">
                                <select className="Estado">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
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
                                <span>R${entrega}</span>
                                {''} {/*Usar para puxar o frete */}
                            </span>
                        </div>

                        <div className="p-2">
                            <p>Total do Pedido (1 item): {''} {/*Colocar a quantidade de pedidos*/}</p>
                            <span className="change">
                                {''} R${Number(produto.preco) + Number(entrega)}
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
                            <select className="selecionar-parc" value={parcelas} onChange={e => setParcelas(e.target.value)}>
                                <option value="" disabled selected >Selecione a quantidade</option>
                                <option value="2" key="">2x</option>
                                <option value="3" key="">3x</option>
                                <option value="4" key="">4x</option>
                                <option value="5" key="">5x</option>
                                <option value="6" key="">6x</option>
                                <option value="7" key="">7x</option>
                                <option value="8" key="">8x</option>
                                <option value="9" key="">9x</option>
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
                                    2
                                    {''} {/*Usar para puxar o subtotal dos produtos */}
                                    %
                                </span>
                            </span>
                            <span className="line-3">
                                <p>Valor das Parcelas</p>
                                <span>
                                    R${((Number(produto.preco) + Number(entrega)) * (parcelas * 0.02))}
                                    {''} {/*Usar para puxar o frete */}
                                </span>
                                
                            </span>
                        </div>

                        <div className="p-2">
                            <p>Total do Pedido</p>
                            <span className="change">
                                {''} R${((Number(produto.preco) + Number(entrega)) * (parcelas * 0.02)) + (Number(produto.preco) + Number(entrega))}
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