import "./index.scss"

export default function Pagamento() {

    return (
        <main className="PagamentosCartao">
            <section className="container">
                <div className="Produtos">
                    <div className="map">
                        <h2>guarda-roupa de fototeta</h2>

                        <div>
                            <img src="/assets/images/guardasroupas.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="nav-right">
                    <h2>Finalizando Pedido</h2>
                    <p>Opção de Envio</p>

                    <div className="inputs">
                        <select className="sel-entrega">
                            <option value="" disable selected>Selecione o Modo de Entrega</option>
                            <option value="" key="">Expresso Padrão</option>
                            <option value="" key="">Expresso Rápido</option>
                            <option value="" key="">Retirar da Loja</option>
                        </select>

                        <div className="nav-input">
                            <div>
                                <input type="text" placeholder="Rua" id="" />
                                <input type="text" placeholder="Bairro" id="" />

                                <select className="Cidade">
                                    <option value="" disable selected>Selecione uma Opção</option>
                                    <option value="" key="">São Paulo</option>
                                    <option value="" key="">FotoTeta</option>
                                </select>

                                <select className="Estado">
                                    <option value="" disable selected>Selecione uma Opção</option>
                                    <option value="" key="">São Paulo</option>
                                    <option value="" key="">Pinto Rosa</option>
                                </select>

                                <select className="Tipo">
                                    <option value="" key="" disable selected>Selecione uma Opção</option>
                                    <option value="" key="">Tipo sexo ne arrombado</option>
                                    <option value="" key="">me mama</option>
                                </select>
                                
                                <input type="text" placeholder="CEP" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}