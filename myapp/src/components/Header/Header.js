import React from "react";
import FormularioBusqueda from "../Formularios/FormularioBusqueda";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header-nav">
      
        <div className="nav-left">
          <ul className="Logo">
            <li>
              <img src="/img/netflix.png" alt="logo" />
            </li>
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
                <li><Link to="/seriespopulares">Series Populares</Link></li>
                <li><Link to="/seriestoprated">Series Preferidas</Link></li>
                <li><Link to="/seriesontheair">Al Aire</Link></li>
                <li><Link to="/seriesairing">Trasmitiendo Ahora</Link></li>
              </ul>
            </li>
          </ul>
        </div>

     
        <div className="nav-center">
          <FormularioBusqueda />
        </div>


        <div className="nav-right">
          <ul className="user">
            <li>
              <img src="/img/perfil.webp" alt="perfil" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
