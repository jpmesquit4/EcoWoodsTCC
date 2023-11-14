import Cabecalho from '../../components/cabecalhoPrincipal';
import './index.scss';

export default function PerfilCliente() {
    

    return (
        <div className='pagina-perfilCliente'>
            <div className='cabecalho'>
                <Cabecalho />
            </div>

            <div className='conteudo'>
                <div className='conteudo-cabecalho'>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                </div>

                <div className='conteudo-menu'>
                    

                    <div className='cadastro'>
                        <h1>Finalizar cadastro</h1>

                        <div>
                            <label>Nome</label>
                            <input type="text"  />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Telefone</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Endereço</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Forma de Pagamento</label>
                            <input type="text" />
                        </div>

                        <button>Salvar</button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}