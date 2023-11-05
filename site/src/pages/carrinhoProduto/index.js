import './index.scss'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { buscarPorId } from '../../api/produtoApi';

import Cabecalho from '../../components/cabecalhoPrincipal'
import Rodape from '../../components/rodapePrincipal'
import CarrinhoCheio from '../../components/carrinhoCheio'

export default function CarrinhoProduto() {

    const [produto, setProduto] = useState({});

    const {idParam} = useParams();

    useEffect(() => {
        carregarProduto();
    }, []);

    async function carregarProduto() {
        const resposta = await buscarPorId(idParam);
        setProduto(resposta);   
    }
    
    return(
        <div className='pagina-CarrinhoProduto'>
            <Cabecalho />

            <div className='carrinho-cheio'>
                <CarrinhoCheio produto={produto} />
            </div>

            <div>
                <Rodape />
            </div>
        </div>
    )
}