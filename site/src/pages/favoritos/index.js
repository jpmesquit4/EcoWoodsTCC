import Cabecalho from '../../components/cabecalhoPrincipal';
import './index.scss';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { buscarImagem } from '../../api/produtoApi';

export default function Favoritos() {

    const[produtos, setProdutos] = useState([]);
    const[filtro, setFiltro] = useState('');

    const navigate = useNavigate();

    function paginaDetalhes() {
        navigate('/detalhesproduto');
    }

    useEffect(() => {
        carregarProduto();
    }, [])
    
    async function filtrar() {
        const url = `http://129.148.42.252:5020/produto/busca?nome=${filtro}`;

        let response = await axios.get(url);

        let listaProdutos = [];

        for (let item of response.data) {

            function mostrarImagem() {
                if (typeof (item.imagem) == 'object') {
                    return URL.createObjectURL(item.imagem);
                } 
                else {
                    return buscarImagem(item.imagem);
                }
            }

            listaProdutos.push({
              nome: item.produto,
              preco: item.preco,
              imagem: mostrarImagem()
            })
          }

          
      
          setProdutos(listaProdutos); 
    }

    async function carregarProduto() {
        const url = 'http://129.148.42.252:5020/produto';

        let response = await axios.get(url);

        let listaProdutos = [];

        for (let item of response.data) {

            function mostrarImagem() {
                if (typeof (item.imagem) == 'object') {
                    return URL.createObjectURL(item.imagem);
                } 
                else {
                    return buscarImagem(item.imagem);
                }
            }

            listaProdutos.push({
              nome: item.produto,
              preco: item.preco,
              imagem: mostrarImagem()
            })
          }

          
      
          setProdutos(listaProdutos);
    }


    return(
        <div className='pagina-favoritos'>
            <Cabecalho />

            <div className='page'>

                <div className="input-verificar">
                    <input type="text" placeholder='Pesquisa' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img className='icon-relative' onClick={filtrar} src="/assets/images/proc-2.png" alt="" />
                </div>

                <div className='container-cards'>

                                {produtos.map( item =>
                                <div className="cards">

                                        <div className="img-produto">
                                            <img src={item.imagem} alt="" />
                                        </div>

                                        <div className="info-produto">

                                        <p className='nomeProduto'> {item.nome} </p>

                                        <p className='precoProduto'> R${item.preco} </p>

                                        <img src="/assets/images/favoritar-result.png" alt="" />

                                        <svg onClick={paginaDetalhes} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                            <path d="M0.760249 17.9069L19.3437 -4.46763e-05L19.3434 17.9071L0.760249 17.9069Z" fill="#2A2A2A"/>
                                        </svg>
                               
                                        
                                    </div>
                                </div>
                                        )} 
                                
                            </div>

            </div>
        </div>
    )
}