import './index.scss';

export default function Resultado() {

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

                        <img src="/assets/images/sacolaDeCompras.png" alt="" />
                        <p className="notification">0</p>
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
                            <label>Tudo ({''})</label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>Cozinha ({''})</label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>Decoração ({''})</label>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <label>Quarto ({''})</label>
                        </div>

                        <hr />

                        <p>
                            Preço
                        </p>
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
                    </div>
                </main>
            </section>
        </main>

    );
}