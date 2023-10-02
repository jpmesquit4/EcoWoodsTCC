import './index.scss';
import { useContext, useEffect, useState } from 'react';

export default function Resultado() {

    const [mostrar, setMostrar] = useState(false);

    // async function inputsh() {
    //     if ( sacola += 1) {
    //         setMostrar(true);


    //     }

    //     else{
    //         setMostrar(false);
    //     }
    // }

    return (
        <main className="pagina-result">
            <header>
                <div className="cabecalho-top">

                    <div className="header-left">
                        <img src="/assets/images/barra.png" alt="" />
                        <p>Menu</p>

                        <img src="/assets/images/buscar.png" alt="" />
                        <p>Buscar</p>
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
                    <input type="text" placeholder='Pesquisa' />
                </div>

                <main className="container-content">
                    <div className="nav-left">
                        <p>
                            Coleção
                        </p>

                        <div>
                            <input type="checkbox" />
                            <label>
                                Tudo <span classname="show-on">({''})</span>
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>
                                Cozinha <span classname="show-on">({''})</span>
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>
                                Decoração <span classname="show-on">({''})</span>
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>
                                Quarto <span classname="show-on">({''})</span>
                            </label>
                        </div>

                        <hr />

                        <div className='input-move'>
                            <label for="valor">Valor</label>
                            <input type="range" id="valor" name="volume" min="0" max="100"  />

                            <div className='nav-valores'>
                                <span>
                                    ${''}
                                </span>

                                <span>
                                    ${''}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="nav-right">
                        <div className="cards">
                            <div className="img-produto">
                                <img src="/assets/images/img-result.png" alt="" />
                            </div>

                            <div className="info-produto">
                                <p>
                                    Escrivaninha de Carvalho
                                    {/*
                                USAR PARA PUXAR AS INFORMAÇÕES DO BD
                                {''}
                            
                                    */}
                                    <br />
                                    <span>
                                        R$60,00
                                    </span>
                                </p>
                                <p>
                                    <img src="/assets/images/favoritar-result.png" alt="" />

                                    {/* 
                                USAR PARA PUXAR O FAVORITO DO BD
                                {''} 
                            
                                    */}
                                </p>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="img-produto">
                                <img src="/assets/images/img-result.png" alt="" />
                            </div>

                            <div className="info-produto">
                                <p>
                                    Escrivaninha de Carvalho
                                    {/*
                                USAR PARA PUXAR AS INFORMAÇÕES DO BD
                                {''}
                            
                                    */}
                                    <br />
                                    <span>
                                        R$60,00
                                    </span>
                                </p>
                                <p>
                                    <img src="/assets/images/favoritar-result.png" alt="" />

                                    {/* 
                                USAR PARA PUXAR O FAVORITO DO BD
                                {''} 
                            
                                    */}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </main>

    );
}