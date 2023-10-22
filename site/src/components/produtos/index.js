import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { buscarPorId, buscarImagem } from '../../api/produtoApi';

import './index.scss';

export default function Produtos() {

    const [produto, setProduto] = useState({});

    const { idParam } = useParams();

    useEffect(() => {
        carregarProduto();
    }, [])


    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);
    }

    return (
        <div className='cards'>
            <div className="img-produto">
                <img src={buscarImagem(produto.imagem)} alt="" />
            </div>

            <div className="info-produto">
                <p>
                    {produto.produto}
                    <br />
                    <span>
                        R${produto.preco}
                    </span>
                </p>
                <p>
                    <img src="/assets/images/favoritar-result.png" alt="" />
                </p>
            </div>
        </div>
    )
}