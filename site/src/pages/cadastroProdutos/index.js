import { useState } from 'react';
import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdmin';
import MenuAdm from '../../components/menuAdmin';

import storage from 'local-storage'
import { cadastrarProduto, enviarImagemProduto, alterarPrdotuo } from '../../api/produtoApi'

import { toast } from 'react-toastify';

export default function CadastroProdutos() {


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [tamanhos, setTamanhos] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    

    async function salvarClick() {
        try {
            if (!imagem)
                throw new Error('Escolha uma imagem.')
            
            const usuario = storage('usuario-logado').id;
            if (id === 0) {
                const novoProduto = await cadastrarProduto(nome, descricao, preco, estoque, categoria, tamanhos, usuario);
                await enviarImagemProduto(novoProduto.id, imagem);

                setId(novoProduto.id);
                toast.dark('🚀 Produto cadastrado com sucesso!');
            } else {
                await alterarPrdotuo(id, nome, descricao, preco, estoque, categoria, tamanhos, usuario);
                await enviarImagemProduto(id, imagem);
                toast.dark('🚀 Produto alterado com sucesso!');
            }

            
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }



    function escolherImagem() {
        document.getElementById('ImagemImage').click()
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }

    function novoClick() {
        setId(0);
        setNome('');
        setDescricao('');
        setPreco('');
        setEstoque(0);
        setCategoria('');
        setTamanhos('');
        setImagem();
        setId(0);
    }

    return (
        <div className="pagina-cadastroProdutos">
            <MenuAdm selecionado='cadastroprodutos' />

            <div className="part-right">
                <CabecalhoAdm />

                <div className="menu-right">

                    <div className='menu-top'>

                    {!imagem && 
                        <span onClick={escolherImagem}> <input id='ImagemImage' type="file" onChange={e => setImagem(e.target.files[0])} /> + </span>
                    }   

                    {imagem &&
                        <img className='ImagemCadastrada' src={mostrarImagem()} alt="" />
                    }

                    </div>
                    

                    <h1>Adicionar Produto</h1>

                    <div className="inputs-add">
                        <p>Nome do produto</p>
                        <input placeholder='..' value={nome} onChange={e => setNome(e.target.value)} type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Descrição do produto</p>
                        <input placeholder='..' value={descricao} onChange={e => setDescricao(e.target.value)} type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Preço</p>
                        <input placeholder='..' value={preco} onChange={e => setPreco(e.target.value)} type='text' />
                    </div>

                    <div className="inputs-add">
                        <p>Quantidade para estoque</p>
                        <input placeholder='..' value={estoque} onChange={e => setEstoque(e.target.value)} type="number" />
                    </div>

                    <div className="inputs-add">
                        <p>Categoria</p>
                        <input placeholder='..' value={categoria} onChange={e => setCategoria(e.target.value)} type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Tamanho</p>
                        <input placeholder='..' value={tamanhos} onChange={e => setTamanhos(e.target.value)} type="text" />
                    </div>

                    <div className='buttons-cadastro-novo'>
                        <button onClick={salvarClick}> { id === 0 ? 'Cadastrar' : 'Alterar'} </button> &nbsp; &nbsp;
                        <button onClick={novoClick}>Novo</button>
                    </div>
                </div>
            </div>

        </div>
    )
}