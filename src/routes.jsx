// Import Routes é o componente que encapsula as rotas da aplicação
// Import Route é utilizado para definir uma rota específica a seu componente associado
import { Routes, Route } from "react-router-dom";

// Importa os componentes para os caminhos das rotas
import Home from "./pages/home/Home";
import Turmas from "./pages/turma/Turmas";
import Login from "./pages/login/Login";
import Alunos from "./pages/alunos/Alunos";
import Cadastro from "./pages/cadastro/Cadastro";
import PaginaDoAluno from "./pages/paginadoaluno/PaginaDoAluno";
import AlunosComp from "./components/alunocomp/AlunosComp";

// Define o componente MainRoutes
function MainRoutes() {
  return (
    // Bloco de rotas da aplicação utilizando o componente Routes
    <Routes>
      {/* Define uma rota para o caminhos definidos e associa-os a um componente */}
      <Route path="/" element={<Home />} />
      <Route path="/turmas" element={<Turmas />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alunos" element={<Alunos />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/paginadoaluno" element={<PaginaDoAluno />} />
      <Route path="/alunocomp" element={<AlunosComp/>} />
    </Routes>
  );
}

export default MainRoutes;
