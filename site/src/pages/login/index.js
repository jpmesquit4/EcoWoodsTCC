import './index.scss';

export default function Login() {
    

    return (
        <div className='login'>
            
            <div className='imagem'>
                <span> J </span>
            </div>
            
            <div className='card-login'>
                <h1>Log in</h1>
                <p>Faça login para continuar acessando as páginas</p>

                <div className="inputs">
                    <input type="text" placeholder='Email'/>
                    <input type='password' placeholder='Senha'/>
                </div>

                <button> Entrar </button>

            </div>
        </div>
    )
}