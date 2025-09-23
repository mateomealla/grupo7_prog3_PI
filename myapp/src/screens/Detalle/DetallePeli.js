import React from "react";
import Detalle from "../../components/Detalle/Detalle";
import "../css/general.css"

function DetallePeli(props) {
  const id = props.match.params.id;
  const tipo = props.match.params.peli;

  return (
    <main className="detalle-screen">
      <h1 className="detalle-screen-title">
        {tipo === "peli" ? "Detalles de la Película" : "Detalles de la Serie"}
      </h1>

      <Detalle id={id} movie={tipo === "peli"} />
    </main>
  );
}

export default DetallePeli;
