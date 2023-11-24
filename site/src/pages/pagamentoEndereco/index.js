import { useEffect, useState } from 'react';
import Cabecalho from '../../components/cabecalhoPrincipal';
import Rodape from '../../components/rodapePrincipal';
import './index.scss';
import { listarCartaoPorID } from '../../api/produtoApi';
import storage from 'local-storage';
import { useParams } from 'react-router-dom';
import { listarEnderecos } from '../../api/clienteApi';

export default function PagamentoEndereco() {

    const cliente = storage('cliente-logado').id;

    const [ cartao, setCartao ] = useState({});
    const [endereco, setEndereco] = useState({});

    async function carregarCartao() {
        const resposta = await listarCartaoPorID(cliente);
        setCartao(resposta);
    }

    console.log(endereco)

    useEffect( () => {
        carregarCartao();
    }, [])

    

    async function carregarEndereco() {
        const resposta = await listarEnderecos(cliente);
        setEndereco(resposta);
    }
   

    useEffect(() => {
        carregarEndereco();
    }, [])

    return (
        <div className='pagina-pagamentoEndereco'>
            <div className='cabecalho'>
                <Cabecalho />
            </div>

            <div className='conteudo'>
                <div className='historico'>

                    <div className='pedido-1'>
                        <div className='pedido-1-top'>
                        
                            <p> <strong>CVV:</strong> {cartao.cvv}</p>
                            <p><strong>Numero:</strong> {cartao.numero}</p>
                            <p><strong>Titular:</strong> {cartao.titular}</p>
                            <p><strong>Vencimento:</strong> {cartao.vencimento}</p>

                        </div>

                        <div className='pedido-1-bot'>
                            <div className='part-image'>
                                <img src="/assets/images/cartao-pagina-cartao.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='pedido-1'>
                    <div className='pedido-1-top'>
                        
                            <p> <strong>CEP:</strong> {endereco.cep}</p>
                            <p> <strong>Rua:</strong> {endereco.rua}</p>
                            <p><strong>Bairro:</strong> {endereco.bairro}</p>
                            <p><strong>Cidade:</strong> {endereco.cidade}</p>
                            <p><strong>Estado:</strong> {endereco.estado}</p>
                            <p><strong>Numero:</strong> {endereco.numero}</p>

                        </div>

                        <div className='pedido-1-bot'>
                            <div className='part-image'>
                                <img src="/assets/images/localizacaoEndereco.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rodape'>
                <Rodape />
            </div>
        </div>
    )
}