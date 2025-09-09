import React from "react";


function Footerarticle(props) {

  return (
    <article className="footer-article">
        <h3>{props.nombre}</h3>
        <img src={props.imagen} alt={props.nombre} />
    </article>
  );
}

export default Footerarticle;
