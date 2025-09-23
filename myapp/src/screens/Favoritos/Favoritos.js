import React, { Component } from "react";
import SeriesCard from "../../components/SeriesCard/SeriesCard";
import "../css/general.css"

class Favoritos extends Component {
  constructor() {
    super();
    this.state = {
      pelisFav: [],
      seriesFav: [],
      cargando: true,
      error: "",
    };
  }

  componentDidMount() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (guardados.length === 0) {
      this.setState({ cargando: false });
      return;
    }

    let pelisRecuperadas = [];
    let seriesRecuperadas = [];

    guardados.map((fav) => {
      if (fav.tipo === "peli") {
        fetch(
          `https://api.themoviedb.org/3/movie/${fav.id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
        )
          .then((res) => res.json())
          .then((data) => {
            pelisRecuperadas.push(data);
            this.setState({
              pelisFav: pelisRecuperadas,
              cargando: false,
            });
          })
          .catch(() => {
            this.setState({ error: "Error al cargar películas favoritas" });
          });
      } else if (fav.tipo === "serie") {
        fetch(
          `https://api.themoviedb.org/3/tv/${fav.id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
        )
          .then((res) => res.json())
          .then((data) => {
            seriesRecuperadas.push(data);
            this.setState({
              seriesFav: seriesRecuperadas,
              cargando: false,
            });
          })
          .catch(() => {
            this.setState({ error: "Error al cargar series favoritas" });
          });
      }
      return null;
    });
  }

  eliminarDeFavoritos(id, tipo) {
    if (tipo === "peli") {
      let nuevasPelis = this.state.pelisFav.filter((p) => p.id !== id);
      this.setState({ pelisFav: nuevasPelis });
    } else {
      let nuevasSeries = this.state.seriesFav.filter((s) => s.id !== id);
      this.setState({ seriesFav: nuevasSeries });
    }
  }

  render() {
    return (
      <main>
        <h1 className="detalle-screen-title">Mis Favoritos</h1>

        {this.state.cargando && <p>Cargando favoritos...</p>}
        {this.state.error && <p>{this.state.error}</p>}

        {!this.state.cargando &&
          this.state.pelisFav.length === 0 &&
          this.state.seriesFav.length === 0 && (
            <p>No tienes nada en favoritos.</p>
          )}

        {this.state.pelisFav.length > 0 && (
          <>
            <div className="home-section">
              <h1>Películas</h1>
            </div>
            <section className="seccion-series">
              {this.state.pelisFav.map((pelicula) => (
                <SeriesCard
                  key={pelicula.id}
                  data={pelicula}
                  movie={true}
                  onRemove={(id, tipo) => this.eliminarDeFavoritos(id, tipo)}
                />
              ))}
            </section>
          </>
        )}

        {this.state.seriesFav.length > 0 && (
          <>
            <div className="home-section">
              <h1>Series</h1>
            </div>
            <section className="seccion-series">
              {this.state.seriesFav.map((serie) => (
                <SeriesCard
                  key={serie.id}
                  data={serie}
                  movie={false}
                  onRemove={(id, tipo) => this.eliminarDeFavoritos(id, tipo)}
                />
              ))}
            </section>
          </>
        )}
      </main>
    );
  }
}

export default Favoritos;
