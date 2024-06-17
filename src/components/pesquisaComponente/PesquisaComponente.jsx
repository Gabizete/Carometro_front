import React, { useRef } from "react";
import LupaImg from "../../images/lupa.png";

function PesquisaComponent() {
  // Cria uma referência para o campo de pesquisa
  const barraPesquisarRef = useRef(null);

  // Função que realiza a pesquisa
  const handleSearch = () => {
    // Obtém o texto inserido na barra de pesquisa
    const searchText = barraPesquisarRef.current.value;
    // Se houver texto, realiza a pesquisa na página
    if (searchText) {
      // Usa o método window.find() para pesquisar o texto na página
      window.find(searchText);
    }
  };

  // Função que lida com pressionamentos de tecla
  const handleKeyPress = (event) => {
    // Verifica se a tecla pressionada é "Enter"
    if (event.key === "Enter") {
      // Impede o envio automático do formulário
      event.preventDefault();
      // Chama a função handleSearch para realizar a pesquisa
      handleSearch();
    }
  };

  return (
    <div className="pesquisa">
      {/* Campo de pesquisa */}
      <input
        ref={barraPesquisarRef} // Atribui a referência ao campo de pesquisa
        id="barraPesquisar"
        type="text"
        placeholder="Digite o texto a ser pesquisado" 
        onKeyPress={handleKeyPress} // Adiciona o evento de tecla pressionada
      />
      {/* Botão de pesquisa */}
      <button
        id="consultarBotao"
        onClick={handleSearch} // Chama a função handleSearch ao clicar
        type="submit"
        className="consultarBotao"
      >
        {/* Imagem de lupa no botão */}
        <img className="lupaImg" src={LupaImg} alt="Pesquisar" />
      </button>
    </div>
  );
}

export default PesquisaComponent;
