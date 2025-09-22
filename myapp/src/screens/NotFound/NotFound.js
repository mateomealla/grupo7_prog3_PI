import React from "react";
import "./NotFound.css";
import Cargando from "../../components/Cargando/Cargando.js";

export default function NotFound() {
  return (
    <div className="notfound">
      <Cargando />
      <h2>404 - Página no encontrada</h2>
      <p>La página que buscas no existe o fue movida.</p>
    </div>
  );
}