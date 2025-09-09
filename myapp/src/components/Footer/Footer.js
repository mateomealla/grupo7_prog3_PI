import React from "react";
import "./Footer.css"
import Footerarticle from "./Footerarticle.js";



function Footer() {
  const integrantes = [{nombre: "Mateo Mealla", imagen: "/img/Mateo.jpg"}, {nombre: "Juan Manuel Criniti", imagen: "/img/Juanma.jpg"}, {nombre: "Facundo Ho", imagen: "/img/Facu.jpg"}];

  return (
    <footer>
        <section className="footer-content">
            <img className="footer-logo" src="/img/netflix.png" alt="Logo de la empresa"/>
            {integrantes.map((integrante, i) => (
              <Footerarticle key={i} nombre={integrante.nombre} imagen={integrante.imagen} />
            ))}
        </section>
        <p>© Todos los derechos reservados por Papus</p>
    </footer>
  );
}

export default Footer;
