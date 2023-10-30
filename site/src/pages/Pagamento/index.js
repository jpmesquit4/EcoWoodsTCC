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
                            <div className="part-2">
                                <select className="Estado">
                                    <option value="" disable selected>Estado</option>
                                    <option value="" key="">São Paulo</option>
                                    <option value="" key="">Pinto Rosa</option>
                                </select>

                                <select className="Cidade">
                                    <option value="" disable selected>Cidade</option>
                                    <option value="" key="">São Paulo</option>
                                    <option value="" key="">FotoTeta</option>
                                </select>

                                <input type="text" placeholder="CEP" id="" />
                            </div>

                            <div className="part-1">
                                <input type="text" placeholder="Bairro" id="" />
                                <input type="text" placeholder="Rua" id="" />
                                <input type='text' placeholder='Complemento (Opcional)' id='' />
                            </div>
                        </div>
                    </div>

                    <div className="Detalhes">
                        <div className="p-1">
                            <span className="line-1">
                                <p>Detalhes Preço Original</p>
                                <input type='text' placeholder='Selecione ou Insira o Código' id='' />
                            </span>

                            <span className="line-2">
                                <p>Subtotal dos Produtos</p>
                                {''} {/*Usar para puxar o subtotal dos produtos */}
                            </span>
                            <span className="line-3">
                                <p>Subtotal do Frete</p>
                                {''} {/*Usar para puxar o frete */}
                            </span>
                        </div>

                        <div className="p-2">
                            <p>Total do Pedido</p>
                            {''} {/*Usar para puxar o total do pedido */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}