import './index.scss';

export default function LoginCliente() {



  return (
    <div className="pagina-loginCliente">
      
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
              
              <div className="card-login">
                  <h1>Log in</h1>

                  <h4>Faça login para continuar acessando as páginas</h4>

                  <input placeholder='E-mail' type="text" />

                  <input placeholder='Senha' type="text" />

                  <button>CONTINUE</button>
              </div>

            </div>

        </div>

      </div>

    </div>
  );
}


