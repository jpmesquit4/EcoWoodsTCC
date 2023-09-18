import './index.scss'

export default function Home() {


    return (
        <div className="pagina-home">
            <div className="cabecalho-top">

                <div className="header-left">
                    <img src="/assets/images/menu.png" alt="" />
                    <p>Menu</p>

                    <img src="/assets/images/lupa.png" alt="" />
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

                        <button>COMPRE AGORA</button>
                    </div>
                </div>
            </div>

            <div className="desperdicio-de-madeira">

                <div className="info">
                    <h1>O Desperdício de Madeira </h1>

                    <p>O desperdício de madeira é um desafio para a indústria, causado por processos ineficientes, descarte prematuro e falta de conscientização. Isso resulta em impactos ambientais, econômicos e sociais, como diminuição das florestas, perda de recursos e prejuízos para as comunidades. Soluções sustentáveis são necessárias para mitigar esse problema.</p>

                    <button>SALVE AS ÁRVORES</button>
                </div>

                <div className="image">
                    <img src="/assets/images/entulho.png" alt="" />
                </div>

            </div>
        </div>
    )

}