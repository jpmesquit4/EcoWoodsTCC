// import { useState } from 'react';
import './index.scss';
import CabecalhoAdm from '../../components/cabecalhoAdmin';
import MenuAdm from '../../components/menuAdmin';

export default function CadastroProdutos() {


    // const [nome, setNome] = useState('');
    // const [descricao, setDescricao] = useState('');
    // const [preco, setPreco] = useState('');
    // const [qntEstoque, setQntEstoque] = useState(0);
    // const [categoria, setCategoria] = useState('');
    // const [tamanhos, setTamanhos] = useState('');

    


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
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Descrição do produto</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Preço</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Quantidade para estoque</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Categoria</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Tamanhos</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <button className="button-2a"> Cadastrar </button>
                </div>
            </div>

        </div>
    )
}