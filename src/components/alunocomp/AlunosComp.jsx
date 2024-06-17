import "../alunocomp/AlunosComp.css";
import Gradiente from "../../images/gradiente.png";
import { Link } from "react-router-dom";



function AlunosComp() {
  return (
    <div>
      <div className="rostoAlunos">
        <div  class='aluno'>
          <div className="sombra">
            <Link to="/paginadoaluno">
              <img id="baseAlunos"src={Gradiente} />
            </Link>
          </div>
          <div className="linha"></div>
          <div className="textos">
            <span className="nomeAluno"><strong>Gabrielle de Lima Quinquio Deboletta</strong></span>
            <span className="turmaAluno">IDEV2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlunosComp;
