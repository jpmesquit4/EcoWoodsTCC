import './index.scss'

export default function LoginADM() {


    return (
        <div className="pagina-loginADM">
      
      <div className="logins">

        <div className="part-left">

            <span className="top">
                <img src="/assets/images/nuvem-login.png" alt="" />
            </span>

            <span className="mid">
                <h1>Login ADM</h1>
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
                  <h1>Log in</h1>

                  <h4>Faça login como administrador</h4>

                  <input placeholder='Nome de usuário' type="text" />

                  <input placeholder='Senha' type="text" />

                  <button>CONTINUE</button>
              </div>

            </div>

        </div>

      </div>

    </div>
    )

}