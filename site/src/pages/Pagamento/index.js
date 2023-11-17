import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { buscarPorId, buscarImagem, consultarPreco } from "../../api/produtoApi";
import { inserirInfoEndereco, listarInfoClientes } from "../../api/clienteApi";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';
import storage from 'local-storage';


export default function Pagamento() {

    const [produto, setProduto] = useState({});
    const [parcelas, setParcelas] = useState();
    const [entrega, setEntrega] = useState();
    const [preco, setPreco] = useState({});

    const[estado, setEstado] = useState('');
    const[cidade, setCidade] = useState('');
    const[cep, setCep] = useState('');
    const[bairro, setBairro] = useState('');
    const[rua, setRua] = useState('');
    const[numero, setNumero] = useState('');
    const[id, setId] = useState();

    async function carregarInfos() {
        const resposta = await listarInfoClientes(idParam);
        setId(resposta.id || 0);
    }

    const[nomeTitularCartao, setNomeTitularCartao] = useState();
    const[numeroCartao, setNumeroCartao] = useState();
    const[cvv, setCvv] = useState();
    const[vencimento, setVencimento] = useState();

    async function salvarClickEndereco() {
        try {
            const cliente = storage('cliente-logado').id;
            await inserirInfoEndereco(id, cep, rua, numero, bairro, estado, cidade);
                toast.dark('🚀 Produto alterado com sucesso!');
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    

    const navigate = useNavigate();

    const {idParam} = useParams();

    useEffect(() => {
        carregarProduto();
    }, []);

    useEffect(() => {
        carregarInfos();
    }, []);

    useEffect(() => {
        carregarPrecos();
    }, []);

     async function carregarPrecos() {
         const resposta = await consultarPreco(idParam);
         setPreco(resposta);   
     }

    // async function carregarPrecos() {
    //     const resposta = await consultarPreco(idParam);
    //     setPreco(resposta.preco);
    // }

    console.log(preco)

    // const [produtoFretado, setProdutoFretado] = useState();

    // console.log(produtoFretado)

    // function produtoFrete() {
    //     setProdutoFretado(preco.preco + entrega)
    // }


    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);   
    }

    function pagSituacaoPedido(){
        navigate('/situacaoPedidos');
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
                                <select className="Estado" value={estado} onChange={e => setEstado(e.target.value)}>
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

                                <input type="text" className="Cidade" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} ></input>

                                <InputMask mask='99999-999' type="text" placeholder="CEP" id="" value={cep} onChange={e => setCep(e.target.value)} />
                            </div>

                            <div className="part-1">
                                <input type="text" placeholder="Bairro" id="" value={bairro} onChange={e => setBairro(e.target.value)} />
                                <input type="text" placeholder="Rua" id="" value={rua} onChange={e => setRua(e.target.value)}/>
                                <input type='text' placeholder='Número' id='' value={numero} onChange={e => setNumero(e.target.value)} />
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
                        

                        <div className="selecionar-parcelas">
                            <select className="selecionar-parc" value={parcelas} onChange={e => setParcelas(e.target.value)}>
                                <option value="" disabled selected >Opções de pagamento</option>
                                <option value="1" key="">A vista</option>
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
                            <InputMask type="text" mask="9999.9999.9999.9999" placeholder="Número do Cartão" value={numeroCartao} onChange={(e) => setNumeroCartao(e.target.value)} />
                        <div>
                            <InputMask type="text" mask="99/9999" placeholder="Vencimento" value={vencimento} onChange={(e) => setVencimento(e.target.value)} />
                            <InputMask type="text" maxLength="4" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        </div>
                        <input type="text" placeholder="Nome do Títular" value={nomeTitularCartao} onChange={(e) => setNomeTitularCartao(e.target.value)} />
                    </div>
                    <div className="nav-confirmar">
                        <button onClick={pagSituacaoPedido}> Finalizar Pedido </button>
                        <button onClick={salvarClickEndereco}> Salvar Endereco </button>
                    </div>
                </div>
            </section>
        </main>
    );
}