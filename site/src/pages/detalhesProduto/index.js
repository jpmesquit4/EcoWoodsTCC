import './index.scss';
import Cabecalho from '../../components/cabecalhoPrincipal';
import Rodape from '../../components/rodapePrincipal';
import PagDetalhes from '../../components/pagDetalhe';

import { useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { buscarPorId } from '../../api/produtoApi'



export default function DetalhesProduto() {

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
        <div className='pagina-detalhesProduto'>
            <Cabecalho />

        
                <div className='photo-and-info'>
                    <PagDetalhes produto={produto} />
                </div>
            

            <Rodape />
        </div>
    )
}