import { useState } from 'react';
import Cabecalho from '../../components/cabecalhoPrincipal';
import RodapeBranco from '../../components/rodapeBranco'
import './index.scss';
import { listarInfoClientes } from '../../api/clienteApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { buscarPorId } from '../../api/produtoApi';

export default function PerfilCliente() {
    
    const [infoCliente, setInfoCliente] = useState({});

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState();

    async function carregarInfos() {
        const resposta = await listarInfoClientes(idParam);
        setNome(resposta.nome);
        setEmail(resposta.email);
        setCelular(resposta.telefone);
        setNascimento(resposta.nascimento.substring(0, 10)) ;
        setGenero(resposta.genero);
    }


    const {idParam} = useParams();

    useEffect(() => {
        carregarinfoCliente(idParam);
        carregarInfos();
    }, []);

    async function carregarinfoCliente() {
        const resposta = await listarInfoClientes(idParam);
        setInfoCliente(resposta);   
    }

    return (
        <div className='pagina-perfilCliente'>
            <div className='cabecalho'>
                <Cabecalho />
            </div>

            <div className='conteudo'>
                <div className='conteudo-cabecalho'>
                    <span>
                    <img src="/assets/images/casa.png" alt="" />
                    <h1>{infoCliente.nome}</h1>
                    </span>
                    <p>ID: #{infoCliente.id}</p>
                </div>

                <div className='conteudo-menu'>
                    

                    <div className='cadastro'>
                        <h1>Finalizar cadastro</h1>

                        <div>
                            <label>Nome</label>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div>
                            <label>Gênero</label>
                            <input type="text" value={genero} />
                        </div>

                        <div>
                            <label>Data de nascimento</label>
                            <input type="text" value={nascimento} />
                        </div>

                        <div>
                            <label>Celular</label>
                            <input type="text" value={celular} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" value={email} />
                        </div>

                        <button>SALVAR</button>
                    </div>

                    
                </div>

                <div className='conteudo-pedidos-servicos'>

                    <div className='pedidos'>
                        <h1>Meus pedidos</h1>

                        <div>
                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Histórico</p>
                            </div>

                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Entregues</p>
                            </div>

                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Favoritos</p>
                            </div>                           
                        </div>
                    </div>

                    <div className='pedidos'>
                        <h1>Mais serviços</h1>

                        <div>
                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Histórico</p>
                            </div>

                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Entregues</p>
                            </div>

                            <div>
                                <img src="/assets/images/creditcard.png" alt="" />    
                                <p>Favoritos</p>
                            </div>                           
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <RodapeBranco />
            </div>
        </div>
    )
}