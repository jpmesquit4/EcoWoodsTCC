import { buscarImagem } from '../../api/produtoApi';

import './index.scss';

export default function Produtos(props) {


    return (
        <div className="cards">

            <div className="img-produto">
                <img src={buscarImagem(props.produtos.imagem)} alt="" />
            </div>

            <div className="info-produto">

                <p className='nomeProduto'> {props.produtos.produto} </p>

                <p className='precoProduto'> R${props.produtos.preco}  </p>

                <img src="/assets/images/favoritar-result.png" alt="" />

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M0.760249 17.9069L19.3437 -4.46763e-05L19.3434 17.9071L0.760249 17.9069Z" fill="#2A2A2A" />
                </svg>


            </div>
        </div>
    )
}