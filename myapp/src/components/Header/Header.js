import React from "react";
import FormularioBusqueda from "../Formularios/FormularioBusqueda";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <input type="checkbox" id="menu-toggle" hidden />

      <nav className="header-nav">
        <div className="nav-left">
          <ul className="Logo">
            <li>
              <img src="/img/netflix.png" alt="logo" />
            </li>
          </ul>

          <ul className="main-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li className="has-submenu">
              <span>Películas ▾</span>
              <ul className="submenu">
                <li>
                  <Link to="/peliculaspopulares">Populares</Link>
                </li>
                <li>
                  <Link to="/peliculasviendoahora">Viendo Ahora</Link>
                </li>
                <li>
                  <Link to="/peliculasmejorpuntuacion">Mejor Puntuación</Link>
                </li>
                <li>
                  <Link to="/peliculasproximamente">Próximamente</Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <span>Series ▾</span>
              <ul className="submenu">
                <li>
                  <Link to="/seriespopulares">Series Populares</Link>
                </li>
                <li>
                  <Link to="/seriestoprated">Series Preferidas</Link>
                </li>
                <li>
                  <Link to="/seriesontheair">Al Aire</Link>
                </li>
                <li>
                  <Link to="/seriesairing">Transmitiendo Ahora</Link>
                </li>
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
          <label htmlFor="menu-toggle" className="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>

      <div className="side-menu">
        <label htmlFor="menu-toggle" className="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>


        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>

          <li className="has-submenu">
            <input type="checkbox" id="submenu-peliculas" hidden />
            <label htmlFor="submenu-peliculas">Películas ▾</label>
            <ul className="submenu">
              <li>
                <Link to="/peliculaspopulares">Populares</Link>
              </li>
              <li>
                <Link to="/peliculasviendoahora">Viendo Ahora</Link>
              </li>
              <li>
                <Link to="/peliculasmejorpuntuacion">Mejor Puntuación</Link>
              </li>
              <li>
                <Link to="/peliculasproximamente">Próximamente</Link>
              </li>
            </ul>
          </li>

          <li className="has-submenu">
            <input type="checkbox" id="submenu-series" hidden />
            <label htmlFor="submenu-series">Series ▾</label>
            <ul className="submenu">
              <li>
                <Link to="/seriespopulares">Series Populares</Link>
              </li>
              <li>
                <Link to="/seriestoprated">Series Preferidas</Link>
              </li>
              <li>
                <Link to="/seriesontheair">Al Aire</Link>
              </li>
              <li>
                <Link to="/seriesairing">Transmitiendo Ahora</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="search-box">
          <FormularioBusqueda />
        </div>
      </div>
    </header>
  );
}

export default Header;
