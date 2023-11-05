import './index.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';



export default function Home() {

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/logincliente');
    }

    function paginaResultadoBusca() {
        navigate('/resultadoBuscar');
    }

    function paginaFavoritos() {
        navigate('/favoritos');
    }

    useEffect(() => {
        if(!storage('cliente-logado')) {
            navigate('/logincliente')
        }
    }, [])


    return (
        <div className="pagina-home">
            <div className="cabecalho-top">

                <div className="header-left">
                    <img src="/assets/images/menu.png" alt="" />
                    <p>Menu</p>

                    <img src="/assets/images/lupa.png" alt="" />
                    <p>Buscar</p>

                    <button onClick={sairClick}>Sair</button>
                </div>

                <div className="header-mid">
                    <h1>EcoWoods</h1>
                </div>

                <div className="header-bot">
                    <p>Fale Conosco</p>

                    <p onClick={paginaFavoritos}>Favoritos</p>

                    <img src="/assets/images/sacolaDeCompras.png" alt="" />
                    <p className="notification">0</p>
                </div>
            </div>

            <div className="cabecalho-mid">
                <img src="/assets/images/logo.png" alt="" />
            </div>

            <div className="cabecalho-bot">
                <div className="card-header">
                    <div>
                        <img src="/assets/images/cadeira-cabecalho.png" alt="" />
                    </div>

                    <div className="header-button-tit">
                        <h1>Transformando seu Lar, Preservando a Natureza</h1>

                   
                        <button onClick={paginaResultadoBusca}>COMPRE AGORA</button>
                     
                    </div>
                </div>
            </div>

            <div className="linha"></div>
            <div className="desperdicio-de-madeira">

                <div className="info">
                    <h1>O Desperdício de Madeira </h1>

                    <p>O desperdício de madeira é um desafio para a indústria, causado por processos ineficientes, descarte prematuro e falta de conscientização. Isso resulta em impactos ambientais, econômicos e sociais, como diminuição das florestas, perda de recursos e prejuízos para as comunidades. Soluções sustentáveis são necessárias para mitigar esse problema.</p>

                    <Link to='https://copaiba.org.br/arvoredepresente/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9v5jLtn_pWCtE1-vumeUp-hJgvpJU0LyZsf7V0dySf79RCJIYhM0XxoCGSsQAvD_BwE'>
                        <button>SALVE AS ÁRVORES</button>
                    </Link>
                </div>

                <div className="image">
                    <img src="/assets/images/entulho.png" alt="" />
                </div>

            </div>
            <div className="linha"></div>

            <div className="cards-empresa">

                <div className="madeiraRenovavel-Design">
                    <div className="card-part">
                        <img src="/assets/images/madeira-eco.png" alt="" />
                        <h1>Madeira Renovável</h1>
                        <p>Utilizamos madeiras provenientes de demolições, sobras de produção ou móveis antigos que podem ser reutilizados.</p>
                    </div>

                    <div className="card-part">
                        <img src="/assets/images/troncos.png" alt="" />
                        <h1>Design Sustenável</h1>
                        <p>Desenvolvemos móveis com design sustentável, levando em consideração a durabilidade, a facilidade de manutenção e a possibilidade de desmontagem para reciclagem futura.</p>
                    </div>
                </div>

                <div className="projetos-visao-certificacoes">
                    <div>
                        <img src="/assets/images/florestasPlantadas.png" alt="" />
                        <h1>Projetos Concluídos:</h1>
                        <p>Ao longo dos anos, tivemos o privilégio de participar de diversos projetos emocionantes, ajudando nossos clientes a transformarem suas visões em realidade. Nossos produtos de madeira sustentável foram utilizados em residências, escritórios, estabelecimentos comerciais e espaços públicos, adicionando elegância e funcionalidade aos ambientes.</p>
                    </div>

                    <div>
                        <img src="/assets/images/troncos2.png" alt="" />
                        <h1>Visão Geral da Empresa:</h1>
                        <p>Somos uma loja de madeira sustentável comprometida em fornecer produtos de alta qualidade, ao mesmo tempo em que promovemos a preservação das florestas e a conscientização ambiental. Nossa missão é oferecer soluções de madeira sustentável para clientes que valorizam a beleza natural, a durabilidade e a responsabilidade ambiental.</p>
                    </div>

                    <div>
                        <img src="/assets/images/casa.png" alt="" />
                        <h1>Certificações e Parcerias:</h1>
                        <p>Somos orgulhosos detentores das certificações FSC e PEFC, que atestam a origem sustentável da nossa madeira. Além disso, mantemos parcerias estratégicas com organizações comprometidas com a preservação florestal e a promoção da sustentabilidade, fortalecendo ainda mais nosso compromisso com o meio ambiente.</p>
                    </div>
                </div>
            </div>
            <div className="linha"></div>

            <div className="fundadores">

                <h1>FUNDADORES DA EMPRESA</h1>

                <div className="card-portifolio">
                    <div>
                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/baixo.png" alt="" />

                                <div className="ig">
                                    <h1>Guilherme Hegeler</h1>
                                    <p>@guihegeler</p>
                                </div>
                            </span>

                            <p>Guilherme Hegeler tem 17 anos e fundou uma empresa de madeira reutilizada e sustentavel</p>

                            <Link to='https://www.instagram.com/guiihegeler/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>  
                            <button class="Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                <span class="text">Instagram</span>
                            </button>
                            </Link>
                        </div>

                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/hengler.png" alt="" />

                                <div className="ig">
                                    <h1>João Hengler</h1>
                                    <p>@joaopedrohengler</p>
                                </div>
                            </span>

                            <p>João Hengler tem 17 anos e fundou uma empresa de madeira reutilizada e sustentavel</p>

                            <Link to='https://www.instagram.com/joaopedrohengler/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>  
                            <button class="Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                <span class="text">Instagram</span>
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/kauan.png" alt="" />

                                <div className="ig">
                                    <h1>Kauan Pedro</h1>
                                    <p>@kauankk._</p>
                                </div>
                            </span>

                            <p>Kauan Pedro tem 17 anos e fundou uma empresa de madeira reutilizada e sustentavel</p>

                            <Link to='https://www.instagram.com/kauankk._/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>  
                            <button class="Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                <span class="text">Instagram</span>
                            </button>
                            </Link>
                        </div>

                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/mesquita.png" alt="" />

                                <div className="ig">
                                    <h1>João Mesquita</h1>
                                    <p>@mesquit_</p>
                                </div>
                            </span>

                            <p>João Mesquita tem 17 anos e fundou uma empresa de madeira reutilizada e sustentavel</p>

                            <Link to='https://www.instagram.com/mesquit_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>  
                            <button class="Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                <span class="text">Instagram</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="linha"></div>

            <div className="desperdicio-de-madeira">

                <div className="image">
                    <img src="/assets/images/sobrenos.png" alt="" />
                </div>

                <div className="info">
                    <h1>Sobre nós</h1>

                    <p>Bem-vindo à nossa loja de madeira sustentável, onde a qualidade e a consciência ambiental se encontram. <br />

                        Somos apaixonados por oferecer soluções em madeira que respeitam o meio ambiente, proporcionando beleza e durabilidade aos nossos clientes. Nossa empresa nasceu do desejo de promover práticas sustentáveis ​​e preservar as riquezas naturais das florestas.<br />

                        Acreditamos que a madeira sustentável é a escolha certa para aqueles que valorizam não apenas a estética e a funcionalidade, mas também o impacto positivo que suas escolhas podem ter no planeta.</p>

                </div>

            </div>
            <div className="linha"></div>

            <div className="comentarios">

                <h1>COMENTÁRIOS DE NOSSOS CLIENTES</h1>

                <div className="card-comentario">
                    <div>
                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/icons-comentarios.png" alt="" />

                                <div className="ig">
                                    <h1>Daniel</h1>
                                </div>
                            </span>

                            <p>"Estou extremamente satisfeito com a minha experiência na loja de madeira sustentável. Adquiri um lindo conjunto de móveis para minha sala de estar e fiquei impressionada com a qualidade da madeira e a atenção aos detalhes. Além disso, saber que estou contribuindo para a preservação das florestas me deixa ainda mais feliz com minha escolha."</p>

                        </div>
    
                    </div>

                    <div>
                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/icons-comentarios.png" alt="" />

                                <div className="ig">
                                    <h1>Ricardo Anastacio</h1>
                                </div>
                            </span>

                            <p>"Estou maravilhado com a mesa de jantar de madeira sustentável que adquiri na loja. Além de ser uma peça belíssima e de alta qualidade, sei que minha escolha contribui para a preservação das florestas. O processo de compra foi fácil, o produto foi entregue dentro do prazo e o serviço pós-venda foi excelente. Recomendo a loja a todos que buscam produtos sustentáveis sem abrir mão da elegância."</p>

                        </div>
                        
                    </div>

                    <div>
                        <div className="card">
                            <span className="card-top">

                                <img src="/assets/images/icons-comentarios.png" alt="" />

                                <div className="ig">
                                    <h1>João Mesquita</h1>
                                </div>
                            </span>

                            <p>"Como arquiteto, prezo muito pela utilização de materiais sustentáveis em meus projetos. A loja de madeira sustentável se tornou minha parceira preferida nesse aspecto. Eles oferecem uma variedade incrível de produtos de madeira certificada, com opções de cores e acabamentos que se adequam perfeitamente aos meus projetos. Além disso, sua equipe está sempre pronta para me ajudar com informações técnicas e soluções personalizadas."</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className="linha"></div>

            <div className="viva-a-sustentabilidade">
                <div className="images-sus">
                    <div>
                        <img className="saladeestar" src="/assets/images/saladeestar.png" alt="" />
                        <img src="/assets/images/casa-sus.png" alt="" />
                        <img src="/assets/images/empresa-sus.png" alt="" />
                        <img src="/assets/images/quarto-sus.png" alt="" />
                        <img src="/assets/images/palnta-sus.png" alt="" />
                    </div>
                </div>

                <div className="info">
                    <h1>Viva a sustentabilidade!</h1>

                    <p>Você está procurando produtos de madeira de alta qualidade, duráveis ​​e, acima de tudo, sustentáveis?<br/>
                        Então você veio ao lugar certo! Nossa loja de madeira sustentável está aqui para oferecer a você uma experiência única de compra, combinando beleza, funcionalidade e responsabilidade ambiental.<br/>
                        Ao escolher nossos produtos de madeira sustentável, você está contribuindo diretamente para a preservação das florestas e para um futuro mais verde. Nossos fornecedores são selecionados com rigor, garantindo que a madeira utilizada em nossos produtos seja proveniente de fontes certificadas e manejo responsável.<br/>
                        Queremos oferecer a você a oportunidade de decorar sua casa ou escritório com peças que se destacam pelo seu design elegante, ao mesmo tempo em que respeitam o meio ambiente.<br/>
                        Nossos móveis, pisos, revestimentos e itens de decoração são cuidadosamente fabricados, utilizando métodos que minimizam o desperdício e maximizam a eficiência energética.</p>
                </div>
            </div>

            <div className="rodape">
                <div className="rodape-top">
                    <h1>EcoWoods - EW</h1>
                </div>

                <div className="rodape-mid">
                    <div>
                        <h1>Produtos</h1>
                        <p>Perguntas frequentes</p>
                        <p>Entrega</p>
                        <p>Garantia</p>
                    </div>

                    <div>
                        <h1>Serviços</h1>
                        <p>Reparos</p>
                        <p>Presentear</p>
                        <p>Salve as árvores</p>
                    </div>

                    <div>
                        <h1>Ajuda</h1>
                        <p>Reclame aqui</p>
                        <p>Email de Contato</p>
                        <p>Sustentabilidade</p>
                    </div>
                </div>

                <div className="line"></div>

                <div className="rodape-bot">
                    <p>EcoWood Comércio Eletrônico S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</p>
                </div>
            </div>

        </div>
    )

}