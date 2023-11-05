import './index.scss'
import CabecalhoCarrinho from '../../components/cabecalhoCarrinho';
import RodapeBranco from '../../components/rodapeBranco';
import CarrinhoVazio from '../../components/carrinhoVazio'
import { Link } from 'react-router-dom';

export default function Carrinho() {
    


    return (
        <div className='pagina-Carrinho'>
            <CabecalhoCarrinho/>

            <div className='carrinho-vazio'>
                <CarrinhoVazio />
            </div>

            <RodapeBranco />
        </div>
    )
}