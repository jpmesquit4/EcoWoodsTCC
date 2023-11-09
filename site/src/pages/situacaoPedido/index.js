import "./index.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useParams } from 'react';
import axios from 'axios';
import InputMask from "react-input-mask"
import Cabecalho from "../../components/cabecalhoPrincipal";

export default function Situacao() {

    return (
        <main className="SituacaoPedido">
            <section className="container">
                <Cabecalho />

                <div className="sub-container">
                    <h1>
                        DETALHES DO PEDIDO
                    </h1>

                    <div className="nav-esquerda">
                        <div className="cabecalho">
                            <img src="/assets/images/verificar.png" alt="" />
                            <div>
                                <p>
                                    PEDIDO SENDO PREPARADO
                                    <span>
                                        AQUARDE NOVA MENSAGEM
                                    </span>
                                </p>
                            </div>
                        </div>

                        <hr />

                        <div className="Destino">
                            <img src="/assets/images/entrega-rapida.png" alt="" />
                        </div>
                    </div>
                    <div className="nav-direita">

                    </div>
                </div>
            </section>
        </main>
    );
}