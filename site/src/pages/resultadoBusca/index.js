import './index.js';

export default function Resultado() {

    return (
        <main>
            <header>
                <div className="nav-left">
                    <div className="n-menu">
                        <img src="/assets/images/barras.png" alt="" />

                        <h2>
                            Menu
                        </h2>
                    </div>

                    <div className="n-buscar">
                        <img src="/assets/images/buscar.png" alt="" />

                        <h2>
                            Buscar
                        </h2>
                    </div>
                </div>

                <div className="nav-logo">
                    <img src="/assets/images/Ecowoods.png" alt="" />
                </div>

                <div className="nav-right">
                    <div>
                        <h2>
                            Fale Conosco
                        </h2>

                        <h2>
                            Favoritos
                        </h2>
                    </div>

                    <img src="/assets/images/sacola.png" alt="" />
                </div>
            </header>
        </main>

    );
}