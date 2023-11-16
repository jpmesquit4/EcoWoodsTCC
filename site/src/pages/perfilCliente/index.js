import { useState } from 'react';
import Cabecalho from '../../components/cabecalhoPrincipal';
import RodapeBranco from '../../components/rodapeBranco'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import './index.scss';
    import { alterarInfo, listarInfoClientes } from '../../api/clienteApi';
    import { buscarPorId } from '../../api/produtoApi';
    import { toast } from 'react-toastify';
    import storage from 'local-storage'


import './index.scss';
import Perfil from '../../components/perfilCliente';

export default function PerfilCliente() {
    
        const [infoCliente, setInfoCliente] = useState({});
    
        const { idParam } = useParams();
    
        useEffect(() => {
            carregarinfoCliente();
        }, []);
    
        async function carregarinfoCliente() {
            const resposta = await listarInfoClientes(idParam);
            setInfoCliente(resposta);
        }

    return (
        <div className='pagina-perfilCliente'>
            <div className='cabecalho'>
                <Cabecalho />
            </div>

            <div className='conteudo'>
                <Perfil infoCliente={infoCliente}/>
            </div>

            <div>
                <RodapeBranco />
            </div>
        </div>
    )
}