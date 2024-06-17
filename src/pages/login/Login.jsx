import Header from "../../components/header/Header.jsx";
import "./Login.css";
import Celular from "../../images/celularSENAI.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Header />
      <div className="fundo">
        <div className="celularSENAI">
          <img src={Celular} alt="" />
        </div>
        <div className="caixaLogin">
          <div className="titulo">
            <h1>CARÔMETRO</h1>
          </div>
          <div className="caixaFormulario">
            <form action="">
              <div className="informacoes">
                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  autoComplete="off"
                />
                <input
                  id="email"
                  type="text"
                  placeholder="Digite seu email"
                  autoComplete="off"
                />
                <input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  autoComplete="off"
                />
              </div>
              <div className="botoes">
                <button onclick="logar" type="submit">
                  Faça login
                </button>
                <Link to="/cadastro">
                  <button onclick="cadastrar" type="button">
                    Cadastre-se
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
