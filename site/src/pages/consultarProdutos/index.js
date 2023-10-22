import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdmin';
import MenuAdm from '../../components/menuAdmin';

import { confirmAlert } from 'react-confirm-alert';

import { listarTodosProdutos, buscarProdutosPorNome, removerProduto } from '../../api/produtoApi'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify'

export default function ConsultarProdutos() {

    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

    function editarProduto(id) {
        navigate(`/alterar/${id}`)
    }
    
    async function removerProdutoClick(id, produto) {

        confirmAlert({
            title: 'Remover produto',
            message: `Deseja remover o produto ${produto}`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerProduto(id, produto);
                            if(filtro === '')
                                carregarTodosProdutos();
                            else
                                filtrar();

                        toast.success('Produto Removido')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })



        
    }

    async function filtrar() {
        const resp = await buscarProdutosPorNome(filtro);
        setProdutos(resp);
    }
    
    async function carregarTodosProdutos() {
        const resp = await listarTodosProdutos();
        setProdutos(resp);
    }

    


    useEffect(() => {
        carregarTodosProdutos();
    }, [])



    return (
        <div className='pagina-consultarProdutos'>
            <MenuAdm selecionado='consultarprodutos' />

            <div className="part-right">
                <CabecalhoAdm />

                <div className='menu-right'>
                    <div className='buscar'>
                        <input type="text" placeholder='Buscar produtos por nome' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                        <img src="/assets/images/lupa.svg" onClick={filtrar} />
                    </div>

                    <div className='tabela'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Identificação</th>
                                        <th>Produto</th>
                                        <th>Descrição</th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                        <th>Categoria</th>
                                        <th>Tamanho</th>
                                        <th></th>   
                                    </tr>
                                </thead>
                                <tbody>

                                {produtos.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.produto}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.preco}</td>
                                        <td>{item.estoque}</td>
                                        <td>{item.nome_categoria}</td>
                                        <td>{item.tamanho}</td>
                                        <img src="/assets/images/editar.svg" onClick={() => editarProduto(item.id)} />
                                        <img src="/assets/images/lixo.svg" onClick={() => removerProdutoClick(item.id, item.produto)}/>
                                    </tr>
                                )}
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>   
        </div>
    )
}