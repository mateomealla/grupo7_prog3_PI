import React from "react";
import PeliculasPopularPadre from "../../components/Peliculas/PeliculasPopularPadre";
import "../css/general.css"

function PelisPopulares() {
  return (
    <main>
      <section className="home-section">
        <PeliculasPopularPadre />
      </section>
    </main>
  );
}

export default PelisPopulares;
