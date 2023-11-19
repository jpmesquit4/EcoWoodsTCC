import "./index.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
import InputMask from "react-input-mask"
import Cabecalho from "../../components/cabecalhoPrincipal";
import RodapeBranco from "../../components/rodapeBranco";
import { buscarImagem, buscarPorId } from "../../api/produtoApi";
import { useParams } from "react-router-dom";
import { listarEnderecos, listarInfoClientes } from "../../api/clienteApi";
import storage from 'local-storage';

export default function Situacao() {

    const [greenBall, setGreenBall] = useState('bolinha');
    const [greenBall1, setGreenBall1] = useState('bolinha');
    const [greenBall2, setGreenBall2] = useState('bolinha');
    const [greenBall3, setGreenBall3] = useState('bolinha');
    const [greenBall4, setGreenBall4] = useState('bolinha');

    function minhaFuncao() {
        setGreenBall('bolinha-verde');
    }

    function minhaFuncao1() {
        setGreenBall1('bolinha-verde');
    }

    function minhaFuncao2() {
        setGreenBall2('bolinha-verde');
    }

    function minhaFuncao3() {
        setGreenBall3('bolinha-verde');
    }

    function minhaFuncao4() {
        setGreenBall4('bolinha-verde');
    }

    setTimeout(minhaFuncao, 5000);
    setTimeout(minhaFuncao1, 10000);
    setTimeout(minhaFuncao2, 15000);
    setTimeout(minhaFuncao3, 20000);
    setTimeout(minhaFuncao4, 25000);

    // // Estado para armazenar o horário
    // const [horarioFixo, setHorarioFixo] = useState(obterHorarioAtual());
    // const [horarioFixo1, setHorarioFixo1] = useState(obterHorarioAtual1());
    // const [horarioFixo2, setHorarioFixo2] = useState(obterHorarioAtual2());
    // const [horarioFixo3, setHorarioFixo3] = useState(obterHorarioAtual3());
    // const [horarioFixo4, setHorarioFixo4] = useState(obterHorarioAtual4());
    // const [horarioFixo5, setHorarioFixo5] = useState(obterHorarioAtual5());

    // // Função para obter o horário atual
    // function obterHorarioAtual() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos)}`;
    // }

    // function obterHorarioAtual1() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos + 5)}`;
    // }

    // function obterHorarioAtual2() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos + 10)}`;
    // }

    // function obterHorarioAtual3() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos + 15)}`;
    // }

    // function obterHorarioAtual4() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos + 20)}`;
    // }

    // function obterHorarioAtual5() {
    //     const dataAtual = new Date();
    //     const horas = dataAtual.getHours();
    //     const minutos = dataAtual.getMinutes();
    //     const segundos = dataAtual.getSeconds();

    //     return `${formatarParteDoHorario(horas)}:${formatarParteDoHorario(minutos)}:${formatarParteDoHorario(segundos + 25)}`;
    // }

    // // Função para formatar partes do horário
    // function formatarParteDoHorario(parte) {
    //     return parte < 10 ? `0${parte}` : parte;
    // }

    // // Este useEffect é executado apenas uma vez após a montagem do componente
    // useEffect(() => {
    //     // Não precisa fazer nada aqui, pois já obtivemos o horário inicial
    //     // Se precisar realizar alguma ação, você pode adicionar código aqui
    // }, []);



    // Agora, mesmo que o tempo passe, o horárioFixo permanecerá o mesmo

    function obterDataAtual() {
        // Cria um objeto Date representando o momento atual
        var dataAtual = new Date();

        // Extrai o dia, mês e ano da data atual
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1; // Meses são indexados de 0 a 11, então adicionamos 1
        var ano = dataAtual.getFullYear();

        // Formata as partes da data para garantir que tenham dois dígitos
        dia = (dia < 10 ? '0' : '') + dia;
        mes = (mes < 10 ? '0' : '') + mes;

        // Retorna a data formatada como uma string no formato "DD/MM/AAAA"
        return dia + '/' + mes + '/' + ano;
    }

    // Exemplo de uso da função
    var dataAtual = obterDataAtual();

    const [produto, setProduto] = useState({});
    const [endereco, setEndereco] = useState({})
    const [infoCliente, setInfoCliente] = useState({})

    const { idParam } = useParams();

    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);
    }

    const cliente = storage('cliente-logado').id;

    async function carregarEndereco() {
        const resposta = await listarEnderecos(cliente);
        setEndereco(resposta);
    
    }
    async function carregarInfoCliente() {
        const resposta = await listarInfoClientes(cliente);
        setInfoCliente(resposta);
    }

    useEffect(() => {
        carregarProduto();
    }, [])

    useEffect(() => {
        carregarEndereco();
    }, [])

    useEffect(() => {
        carregarInfoCliente();
    }, [])




    return (
        <main className="SituacaoPedido">
            <section className="container">
                <Cabecalho />
                <div className="sub-container">
                    <h1>
                        DETALHES DO PEDIDO #213127R3ASB
                    </h1>

                    <div className="sub">
                        <div className="nav-esquerda">
                            <div className="cabecalho">
                                <img src="/assets/images/verificar.png" alt="" />
                                <div>
                                    <p className="status">
                                        PEDIDO SENDO PREPARADO <br />
                                    </p>

                                    <p className="aguarde">
                                        AQUARDE NOVA MENSAGEM
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <div className="Destino">
                                <img src="/assets/images/entrega-rapida.png" alt="" />
                                <div>
                                    <p className="dest">Destino:</p>
                                    <p className="endereco">{endereco.rua}, {endereco.numero} <br /> {endereco.cidade} - {endereco.estado} {endereco.cep}</p>
                                </div>
                            </div>

                            <div className="caminho-pedido">
                                <div className="balls">
                                    <div>
                                        <div className='bolinha-verde'></div>
                                        <div className={greenBall}></div>
                                        <div className={greenBall1}></div>
                                        <div className={greenBall2}></div>
                                        <div className={greenBall3}></div>
                                        <div className={greenBall4}></div>
                                    </div>
                                </div>

                                <div className="info-caminho">
                                    <div className="situacao">
                                        <h1>pedido concluído</h1>
                                        <p>{dataAtual + ', dia estimado'} {''}</p>
                                    </div>

                                    <div className="situacao">
                                        <h1>pagamento aceito</h1>
                                        <p>{dataAtual + ', dia estimado'} {''}</p>
                                    </div>

                                    <div className="situacao">
                                        <h1>pedido separado</h1>
                                        <p>{dataAtual + ', dia estimado'} {''}</p>
                                    </div>

                                    <div className="situacao">
                                        <h1>enviado para a transportadora</h1>
                                        <p>{dataAtual + ', dia estimado'} {''}</p>
                                    </div>

                                    <div className="situacao">
                                        <h1>saiu para a entrega</h1>
                                        <p>{dataAtual + ', dia estimado'} {''}</p>
                                    </div>

                                    <div className="situacao">
                                        <h1>pedido entregue</h1>
                                        <p>{dataAtual + ', dia estimado' } {''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-direita">
                            <div className="container-giga">
                                <div className="pedido-info">
                                    <div className="fundo-img">
                                        <img src={buscarImagem(produto.imagem)} alt="" />
                                    </div>
                                    <div className="info-produtos">
                                        <span>
                                            {produto.produto} <br />
                                            {/* Aqui vai ficar o nome do produto*/}
                                            <span className="unidade">1x Unidade {/* Aqui vai ficar a Quantidade */}</span>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="total-pedido">
                                    <span className="valores-info">
                                        <p>Subtotal</p>
                                        <span>R${produto.preco}</span>
                                    </span>
                                </div>

                                <hr />

                                <div className="informacoes-pedido">
                                    <h2>Informações do pedido</h2>

                                    <span className="span-info">
                                        <p>Endereço de entrega</p>
                                        <span>{endereco.rua}, {endereco.numero} <br /> {endereco.cidade} - {endereco.estado} {endereco.cep} {/*Endereço de Entrega do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Contato</p>
                                        <span>E-mail: {infoCliente.email}{/*Email do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Telefone</p>
                                        <span>(11) 98760-4376{/*Numero do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Transportadora</p>
                                        <span>SEDEX{/*Transportadora Escolhida*/}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="agradecimento">
                                <div className="img-pica">
                                    <img src="/assets/images/group-name.png" alt="" />
                                </div>
                                <div className="agradecimentos-frase">
                                    <p>Obrigado por comprar conosco, cuidaremos <br /> de sua compra até a chegada de sua casa!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RodapeBranco />
            </section>
        </main>
    );
}