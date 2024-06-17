// Importa as funcionalidades do React e Router
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import MainRoutes from "./routes.jsx";

// Importa o CSS global
import "./style/Global.css";

// Cria uma raiz para a aplicação React no DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Encapsula a aplicação para habilitar o roteamento
  <BrowserRouter>
    {/* MainRoutes contém as rotas principais da aplicação */}
    <MainRoutes />
  </BrowserRouter>
);
