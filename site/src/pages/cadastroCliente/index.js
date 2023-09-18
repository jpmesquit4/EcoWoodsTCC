import './index.scss';

export default function CadastroCliente() {
    return(
        <div className="logins">

        <div className="part-left">

            <span className="top">
                <img src="/assets/images/nuvem-login.png" alt="" />
            </span>

            <span className="mid">
                <h1>Bem-vindo</h1>
                <p>Faça o login para continuar</p>
            </span>

            <span className="bot">
              <img src="/assets/images/nuvem2-login.png" alt="" />
            </span>

        </div>

        <div className="part-right">

            <div className="part-login">
              <div className="cinza-top"></div>
              <div className="cinza-bot"></div>

              <div className="card-login">
                  <h1>Crie sua conta</h1>


                  <input className="inputs-padrao" placeholder='Nome de usuário' type="text" />

                  <input className="inputs-padrao" placeholder='Telefone ou E-mail' type="text" />

                  <input className="inputs-padrao" placeholder='Senha' type="text" />

                  <p>Data de Nascimento</p>

                  <div className="part-selects">
                    <div className="dia">
                        <input type="number" min='1' max='31' />
                    </div>

                    <div className="mes">
                        <select>
                            <option value="" key="">Janeiro</option>
                            <option value="" key="">Fevereiro</option>
                            <option value="" key="">Março</option>
                            <option value="" key="">Abril</option>
                            <option value="" key="">Maio</option>
                            <option value="" key="">Junho</option>
                            <option value="" key="">Julho</option>
                            <option value="" key="">Agosto</option>
                            <option value="" key="">Setembro</option>
                            <option value="" key="">Outubro</option>
                            <option value="" key="">Novembro</option>
                            <option value="" key="">Dezembro</option>
                        </select>
                    </div>

                    <div className="ano">
                    <input type="number" min='1950' max='2023' />
                    </div>
                  </div>

                  <p>Gênero</p>

                  <div className="genero">
                    <select>
                        <option value="" key="">Masculino</option>
                        <option value="" key="">Feminino</option>
                        <option value="" key="">Outro</option>
                    </select>
                  </div>

                  

                  <button>CADASTRE-SE</button>
              </div>

            </div>

        </div>

      </div>

    )
}