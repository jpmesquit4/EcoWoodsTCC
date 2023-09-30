// import { useState } from 'react';
import storage from 'local-storage'
import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function CadastroProdutos() {
    
    const navigate = useNavigate();

    const handleButton1Click = () => {
        navigate('/admin'); 
      };

      function sairClick() {
        storage.remove('usuario-logado');
        navigate('/loginadm')
      }


    // const [nome, setNome] = useState('');
    // const [descricao, setDescricao] = useState('');
    // const [preco, setPreco] = useState('');
    // const [qntEstoque, setQntEstoque] = useState(0);
    // const [categoria, setCategoria] = useState('');
    // const [tamanhos, setTamanhos] = useState('');

    


    return (
        <div className="pagina-cadastroProdutos">

            <div className="part-left">
                <div className="cabecalho-left">
                    <div>
                        <img src="/assets/images/logo.png" alt="" />
                    </div>

                        <div className="divisor">&nbsp;</div>

                    <div>
                        <h1>Ecowoods</h1>

                        <p>ADMIN PAINEL</p>
                    </div>
                </div>

                <div className="menu-left">
                    <button>Gestão de Produtos</button>

                    <button>Pedidos e Gestão de Vendas</button>

                    <button>Gestão de Clientes</button>

                    <button>Visão Geral do Painel</button>

                    <span className='vazio'></span>

                    <button onClick={sairClick}>Sair</button>
                </div>
            </div>

            <div className="part-right">
                <div className="cabecalho-right">
                    <span> <button onClick={handleButton1Click}>Home</button> </span>
                    <span> <img className="carta-sino" src="/assets/images/sino.png" alt="" /></span>
                    <span> <img className="carta-sino" src="/assets/images/carta.png" alt="" /></span>
                    <span> <img className="icon-perfil" src="/assets/images/icon-perfil.png" alt="" /></span>
                </div>

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