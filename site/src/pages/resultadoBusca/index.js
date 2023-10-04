import './index.scss';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Resultado() {

    

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
                    <input type="text" placeholder='Pesquisa' />
                    <button className='button-thumb'>
                        <div></div>
                        <img className='icon-relative' src="/assets/images/proc-2.png" alt="" />
                    </button>
                </div>

                <main className="container-content">
                    <div className="nav-left">
                        <p>
                            Coleção
                        </p>

                        <div className='container-check'>
                            <div className='sub-container'>
                                <div class="custom-checkbox">
                                    <input id="checkbox-1" type="checkbox" />
                                    <label for="checkbox-1">Tudo { }</label>
                                </div>
                            </div>

                            <div className='sub-container'>
                                <div class="custom-checkbox">
                                    <input id="checkbox-2" type="checkbox" />
                                    <label for="checkbox-2">Cozinha { }</label>
                                </div>
                            </div>

                            <div className='sub-container'>
                                <div class="custom-checkbox">
                                    <input id="checkbox-3" type="checkbox" />
                                    <label for="checkbox-3">Decoração { }</label>
                                </div>
                            </div>

                            <div className='sub-container'>
                                <div class="custom-checkbox">
                                    <input id="checkbox-4" type="checkbox" />
                                    <label for="checkbox-4">Quarto { }</label>
                                </div>
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