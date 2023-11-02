import './index.scss'
import CabecalhoCarrinho from '../../components/cabecalhoCarrinho';
import RodapeBranco from '../../components/rodapeBranco';
import { Link } from 'react-router-dom';

export default function Carrinho() {
    


    return (
        <div className='pagina-Carrinho'>
            <CabecalhoCarrinho/>

            <div className='menu'>
                <div className='part-imagem'>
                    <img src="assets/images/carrinhoVazio.png" alt="" />
                    <p>O seu Carrinho está vazio</p>
                    <Link to='/resultadoBuscar'> 
                        <button>Começar a comprar</button>
                    </Link>
                </div>

                <div className="part-info">

                    <div className='infos'>
                        <img src="assets/images/card.png" alt="" />
                        <h1>Prazo de Estorno</h1>
                    </div>

                    <span className='line'></span>

                    <div className='infos'>
                        <img src="assets/images/card.png" alt="" />

                        <div>
                            <h1>Forma de Pagamento</h1>
                            <p>cartão de credito e cartão de débito</p>
                        </div>

                    </div>

                    <span className='line'></span>

                    <div className='infos'>
                        <img src="assets/images/caminhao.png" alt="" />

                        <div>
                            <h1>Prazo de Entrega</h1>
                            <p>Frete gratuito para todo território nacional</p>
                        </div>

                    </div>

                    <span className='line'></span>

                    <div className='infos'>
                        <img src="assets/images/cartaseta.png" alt="" />

                        <div>
                            <h1>Troca e Devoluções</h1>
                            <p>com coleta reversa gratuita</p>
                        </div>

                        
                        
                    </div>

                </div>
            </div>

            <RodapeBranco />
        </div>
    )
}