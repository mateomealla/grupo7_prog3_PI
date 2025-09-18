import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="Logo">
          <li><img src="/img/netflix.png" alt="logo"></img></li>
        </ul>

        <ul className="main-nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>

          <li className="has-submenu">
            <span>Películas ▾</span>
            <ul className="submenu">
              <li><Link to="/peliculaspopulares">Populares</Link></li>
              <li><Link to="/peliculasviendoahora">Viendo Ahora</Link></li>
              <li><Link to="/peliculasmejorpuntuacion">Mejor Puntuación</Link></li>
              <li><Link to="/peliculasproximamente">Próximamente</Link></li>
            </ul>
          </li>

          <li className="has-submenu">
            <span>Series ▾</span>
            <ul className="submenu">
              
            </ul>
          </li>
        </ul>

        <ul className="user">
          <li><img src="/img/perfil.webp" alt="perfil"></img></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
