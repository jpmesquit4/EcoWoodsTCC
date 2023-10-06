import { useState } from 'react';
import './index.scss';

import CabecalhoAdm from '../../components/cabecalhoAdmin';
import MenuAdm from '../../components/menuAdmin';

import storage from 'local-storage'
import { cadastrarProduto, enviarImagemProduto } from '../../api/produtoApi'

import { toast } from 'react-toastify';

export default function CadastroProdutos() {


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [tamanhos, setTamanhos] = useState('');
    const [imagem, setImagem] = useState ('')

    

    async function salvarClick() {
        try {
            const usuario = storage('usuario-logado').id;
            const resposta = await cadastrarProduto(nome, descricao, preco, estoque, categoria, tamanhos, usuario)

            toast.dark('🚀 Produto cadastrado com sucesso!');
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    return (
        <div className="pagina-cadastroProdutos">
            <MenuAdm selecionado='cadastroprodutos' />

            <div className="part-right">
                <CabecalhoAdm />

                <div className="menu-right">

                    <div className='menu-top'>

                        <span> + </span>

                        <div className='buttons-edit-add'>
                            <button className="button-blue">Adicionar imagem</button>  
                            <button className="button-blue">Editar imagem</button>
                        </div>

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
                        <p>Tamanhos</p>
                        <input placeholder='..' value={tamanhos} onChange={e => setTamanhos(e.target.value)} type="text" />
                    </div>

                    <button className="button-2a" onClick={salvarClick}> Cadastrar </button>
                </div>
            </div>

        </div>
    )
}