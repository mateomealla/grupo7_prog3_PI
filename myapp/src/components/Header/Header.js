import React from "react";
import "./Header.css"
import { Link} from "react-router-dom";


function Header() {

  return (
    <header>
        <nav>
            <ul className="Logo">
                <li><img src="/img/netflix.png" alt=""></img></li>
            </ul>
            <ul className="main-nav">
                <li> <Link to = "/home"> Home </Link></li>
                {/* <li> <Link to = "/busqueda"> Personajes </Link></li> */}
                {/* <li> <Link to = "/detalle"> Personajes </Link></li> */}
                <li> <Link to = "/favoritos"> Favoritos </Link></li>
                <li> <Link to = "/peliculasyseries"> Peliculas mas vistas </Link></li>
            </ul>
            <ul className="user">
                <li><img src="/img/perfil.webp" alt=""></img></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
