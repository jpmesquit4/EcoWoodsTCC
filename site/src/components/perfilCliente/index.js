import './index.scss';
import { alterarInfo, inserirCliente, listarInfoClientes } from '../../api/clienteApi';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { buscarPorId } from '../../api/produtoApi';
import { toast } from 'react-toastify';
import storage from 'local-storage'
import { useState } from 'react';

export default function Perfil(props) {

    const [infoCliente, setInfoCliente] = useState({});

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState();
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState();
    const [idUsuario, setIdUsuario] = useState(0);

    const [cliente, setCliente] = useState('')

    async function carregarInfos() {
        const resposta = await listarInfoClientes(idParam);
        setNome(resposta.nome || '');
        setEmail(resposta.email || '');
        setNascimento(resposta.nascimento ? resposta.nascimento.substring(0, 10) : '');
        setGenero(resposta.genero || '');
        setIdUsuario(resposta.id || 0);
    }


    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
        carregarinfoCliente(idParam);
        carregarInfos(idParam);
        }
    }, []);

    useEffect(() => {
        if(storage('cliente-logado')) {
            const clienteLogado = storage('cliente-logado');
            setCliente(clienteLogado.nome);
        }
    }, [])

    async function carregarinfoCliente() {
        const resposta = await listarInfoClientes(idParam);
        setInfoCliente(resposta);
    }


    function novoClick() {
        setNome('');
        setEmail('');
        setNascimento('');
        setGenero('');
        setIdUsuario(0);
    }

    async function salvarClickCliente() {
        try {
            const cliente = storage('cliente-logado').id;
            await alterarInfo(idUsuario, nome, email, nascimento, genero);
            toast.dark('🚀 Informações alteradas com sucesso!');

        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    console.log(infoCliente)

    return (
        <div className='conteudo'>
            <div className='conteudo-cabecalho'>
                <span>
                    <span className="icon-perfil"> {cliente[0]} </span>
                    <h1>{props.infoCliente.nome}</h1>
                </span>
                <p>ID: #{props.infoCliente.id}</p>
            </div>

            <div className='conteudo-menu'>
                <div className='cadastro'>
                    <h1>Finalizar cadastro</h1>

                    <div>
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label>Data de nascimento</label>
                        <input type="text" value={nascimento} onChange={e => setNascimento(e.target.value)} />
                    </div>

                    <div>
                        <label>Gênero</label>
                        <input type="text" value={genero} onChange={e => setGenero(e.target.value)} />
                    </div>

                    <button onClick={salvarClickCliente} > {idUsuario === 0 ? 'Cadastrar' : 'Alterar'} </button>
                </div>

            </div>

            <div className='conteudo-pedidos-servicos'>

                <div className='pedidos'>
                    <h1>Meus pedidos</h1>

                    <div>   
                        <div>
                            <img src="/assets/images/entregues.png" alt="" />
                            <p>Entregues</p>
                        </div>
                        <div>
                            <img src="/assets/images/historico.png" alt="" />
                            <p>Historico de Pedidos</p>
                        </div>
                        <Link className='linknav' to='/favoritos'>
                            <img src="/assets/images/favoritos.png" alt="" />
                            <p>Favoritos</p>
                            {/* <Link className='linknav' to='/favoritos'>Favoritos</Link> */}
                        </Link>
                    </div>
                </div>

                <div className='pedidos-menor'>
                    <h1>Mais serviços</h1>

                    <div>
                        <div>
                            <img src="/assets/images/insta.png" alt="" />
                            <p>Nosso Contato</p>
                        </div>

                        <div>
                            <img src="/assets/images/carteira.png" alt="" />
                            <p>Pagamento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}