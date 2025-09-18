import React from "react";
import Detalle from "../../components/Detalle/Detalle";

function DetalleScreen(props) {
  const id = props.match.params.id;
  return (
    <div>
      <h1>Detalles de la Película</h1>
      <Detalle id={id}/>
    </div>
  );
}

export default DetalleScreen;