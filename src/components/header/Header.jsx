// Link é utilizado para criar links de navegação entre diferentes rotas da aplicação
import { Link } from "react-router-dom";

// Import de CSS
import "./Header.css";
import Logo from "./../../images/logoSenai.jfif";

function Header() {
  return (
    <header>
      <div>
        {/* Cada `Link` representa um link para uma rota específica na aplicação */}
        <Link to="/">Home</Link>
        <Link to="/turmas">Turmas</Link>
        <Link to="/alunos">Alunos</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
