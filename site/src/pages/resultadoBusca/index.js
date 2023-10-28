import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { buscarImagem, buscarProdutosPorNome, listarTodosProdutos, consultarProdutos } from '../../api/produtoApi';

export default function Resultado() {

    const[produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const [categoria, setCategoria] = useState('');

    async function carregarProdutoFiltrado() {
        if (categoria) {
        const url = `http://localhost:6969/produto/filtroCategoria?categoria=${categoria}`;

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
    }

    const navigate = useNavigate();

    useEffect(() => {
        carregarProduto();
    }, [])

    function paginaDetalhes() {
        navigate('/detalhesproduto');
    }

    async function carregarProduto() {
        const url = 'http://localhost:6969/produto';

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
    
    async function filtrar() {
        const url = `http://localhost:6969/produto/busca?nome=${filtro}`;

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

    return (
        <main className="pagina-result">
            <header>
                <div className="cabecalho-top">

                    <div className="header-left">
                        <img src="/assets/images/barra.png" alt="" />
                        <p>Menu</p>

                        <Link className='nav-link' to='/'>
                            <img src="/assets/images/botao-home.png" alt="" />
                            <p>Inicio</p>
                        </Link>
                    </div>

                    <div className="header-mid">
                        <h1>EcoWoods</h1>
                    </div>

                    <div className="header-bot">
                        <p>Fale Conosco</p>

                        <p>Favoritos</p>

                        <img src="/assets/images/sacola.png" alt="" />
                        <p className="notification">{''}</p>
                    </div>
                </div>

                <hr />

                <div className="cabecalho-mid">
                    <img src="/assets/images/logo.png" alt="" />
                </div>
                <hr />
            </header>

            <section>
                <div className="input-verificar">
                    <input type="text" placeholder='Pesquisa' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img className='icon-relative' onClick={filtrar} src="/assets/images/proc-2.png" alt="" />
                </div>

                <main className="container-content">
                    <div className="nav-left">
                        <p>
                            Coleção
                        </p>

                        <div className='container-check'>
                            <div>
                            <select onClick={carregarProdutoFiltrado} value={categoria} onChange={e => setCategoria(e.target.value)}>
                            <option value="" disabled selected>Selecione um cômodo</option>
                            <option value="Sala de Estar" key="">Sala de Estar</option>
                            <option value="Cozinha" key="">Cozinha</option>
                            <option value="Closet" key="">Closet</option>
                            <option value="Escritorio" key="">Escritório</option>
                            <option value="Banheiro" key="">Banheiro</option>
                            <option value="Lavanderia" key="">Lavanderia</option>
                    </select>
                            </div>
                        </div>

                        <hr />

                        <div className='input-move'>
                            <label for="valor">Valor</label>
                            <input type="range" id="valor" name="volume" min="0" max="100" />

                            <div className='nav-valores'>
                                <span>
                                    {/* usar para aparecer os valores disponiveis minimo */}
                                    {''}
                                </span>

                                <span>
                                    {/* usar para aparecer os valores disponiveis maximos */}
                                    {''}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="nav-right">
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
                        
                        <div className='change-pages'>
                            <span className='click-menor'>
                                <img src="/assets/images/menor.png" alt="" />
                            </span>
                            
                            <span>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                            </span>

                            <span className='click-maior'>
                                <img src="/assets/images/menor.png" alt="" />
                            </span>
                        </div>
                    </div>
                </main>
            </section>

            <Footer />
        </main>

    );
}