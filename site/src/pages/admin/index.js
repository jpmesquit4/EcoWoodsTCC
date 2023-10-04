import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './index.scss';
import MenuAdm from '../../components/menuAdmin';
import CabecalhoAdm from '../../components/cabecalhoAdmin';

export default function AdmPainel() {

    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/loginadm')
        }
    }, [])


  return (
    <div className="pagina-cadastroProdutos">

            <MenuAdm />

            <div className="part-right">
                
                <CabecalhoAdm />

                <div className='menu-right'>

                </div>
            </div>
        </div>
  );
}
