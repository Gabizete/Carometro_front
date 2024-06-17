import Header from "../../components/header/Header.jsx";
import "./PaginaDoAluno.css";
import RostoA from "../../images/rosto.png";
import React, { useState, useEffect } from "react";

function PaginaDoAluno() {
  const [showCard, setShowCard] = useState(false);

  const mostrarCard = () => {
    setShowCard(!showCard);
  };
  return (
    <div>
      <Header />
      <div className="fundoDoAluno">
        <div className="separarPagina">
          <div className="rostoAluno">
            <img src={RostoA} />
          </div>
          <div className="informacoesPaginaAluno">
            <div class="tudo">
              <div className="nome">
                <h1>Gabrielle de Lima Quinquio</h1>
              </div>
              <div className="separarInformacao">
                <div className="parte1">
                  <div className="espacamento">
                    <label id="teste">Email:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">CPF:</label>
                    <input className="inputNormal" type="number" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Celular:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">CEP:</label>
                    <input className="inputNormal" type="number" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Data de Nascimento:</label>
                    <input
                      className="inputNormal"
                      id="dataNascimento"
                      type="date"
                    />
                  </div>
                </div>
                <div className="parte2">
                  <div className="espacamento">
                    <label id="teste">Bairro:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Estado:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Cidade:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Rua:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="botaoPaginaAluno">
                    <button onClick={mostrarCard}>OCORRÊNCIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCard && (
        <div>
          <div className="overlay" />
          <div className="card">
            {
              <div className="boxCard">
                <button
                  className="botaoFechar"
                  onClick={() => setShowCard(false)}
                >
                  <div className="inputbotao">FECHAR</div>
                </button>
                <div className="ocorrencia">
                <div className="inf">
                    <form className="formularioOcorrencia">
                      <div className="dataOcorrencia">
                        <label className="labelOcorrencia" >Data:</label>
                        <input type="date" className="inputOcorrencia" />
                      </div>
                      <div className="horarioOcorrencia">
                        <label className="labelOcorrencia">Horário:</label>
                        <input type="number" className="inputOcorrencia" />
                      </div>
                      <div className="professorOcorrencia">
                        <label className="labelOcorrencia">Professor:</label>
                        <input type="text" className="inputOcorrencia" />
                      </div>
                      <div className="motivoOcorrencia">
                        <label className="labelOcorrencia">Motivo da ocorrência:</label>
                        <input type="text" className="inputOcorrencia" />
                      </div>
                    </form>
                  </div>
                  <div className="foto_botao">
                  <div className="fotoOcorrencia">
                      <div className="fotoOcorrencia2">
                        <img src={RostoA}  />
                      </div>
                    </div>
                    <div className="botaoEnviar">
                      <button className="botaoEnviar2" >
                      <div className="inputbotao">ENVIAR</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="observacao">
                  <form className="formularioObservacao">
                    <label className="labelOcorrencia">Observações:</label>
                    <input type="text" className="inputObservacao" />
                  </form>
                </div>
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default PaginaDoAluno;
