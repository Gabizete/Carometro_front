import Header2 from "../../components/header/Header2.jsx";
import "./Turmas.css";
import { Link } from "react-router-dom";

// Import imagens IDEV
import Fenix from "../../images/fenix.jfif";
import Lobao from "../../images/lobao.jfif";
import FDS from "../../images/naoTem.jfif";

// Import imagens IELE/IMEC
import Pereca from "../../images/pererecos.jfif";
import Tigroes from "../../images/tigroes.jfif";

function Turmas() {
  return (
    <div>
      <Header2 />
      <div className="fundoTurmas">
        <div className="idevs">
          <h1 id="tituloSalas">DESENVOLVIMENTO DE SISTEMAS</h1>
          <div className="salasIdev">
            <div className="IDEV1">
              <div className="imagemLobao">
                <img src={Lobao} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">3° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Desenvolvimento de Sistemas
                  para estudantes do terceiro ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
            <div className="IDEV2">
              <div className="imagemFenix">
                <img src={Fenix} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">2° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Desenvolvimento de Sistemas
                  para estudantes do segundo ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
            <div className="IDEV3">
              <div className="imagemFds">
                <img src={FDS} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">1° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Desenvolvimento de Sistemas
                  para estudantes do primeiro ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ecs">
          <h1 id="tituloSalas">ELETROELETRÔNICA E MECÂNICA</h1>
          <div className="salasEc">
            <div className="EC1">
              <div className="imagemTigrao">
                <img src={Tigroes} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">3° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Eletroeletrônica e Mecânica
                  para estudantes do terceiro ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
            <div className="EC2">
              <div className="imagemPerereca">
                <img src={Pereca} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">2° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Eletroeletrônica e Mecânica
                  para estudantes do segundo ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
            <div className="EC3">
              <div className="imagemFds">
                <img src={FDS} alt="" />
              </div>
              <div className="textinhoDasSalas">
                <p id="tituloDoTexto">1° ANO DO ENSINO MÉDIO</p>
                <p id="textoNormal">
                  Saiba mais sobre nossa turma de Eletroeletrônica e Mecânica
                  para estudantes do primeiro ano. Clique no botão abaixo para
                  obter mais informações.
                </p>
                <Link to="/alunos">
                  <button onclick="verSala" type="button" id="visualizarSalas">
                    VER SALA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turmas;
