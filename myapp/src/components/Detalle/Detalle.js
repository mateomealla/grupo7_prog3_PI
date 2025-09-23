import React, { Component } from "react";
import "./Detalle.css";
import Cargando from "../Cargando/Cargando.js";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      cargando: true,
      error: "",
      series: null,
      esFav: false,
      nuevo: null,
    };
  }

  componentDidMount() {
    const movie_id = this.props.id;
    this.setState({ nuevo: this.props.id });

    if (this.props.movie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
      )
        .then((res) => res.json())
        .then((movie) => {
          this.setState({
            pelicula: movie,
            cargando: false,
          });
          this.verificarFavorito();
        })
        .catch((error) => console.log("Error Fetch", error));
    } else {
      fetch(
        `https://api.themoviedb.org/3/tv/${movie_id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
      )
        .then((res) => res.json())
        .then((series) => {
          this.setState({
            series: series,
            cargando: false,
          });
          this.verificarFavorito();
        })
        .catch((error) => console.log("Error Fetch", error));
    }
  }

  verificarFavorito() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    let encontrados = guardados.filter(
      (fav) =>
        Number(fav.id) === Number((this.props.id)) &&
        fav.tipo === (this.props.movie ? "peli" : "serie")
    );
    this.setState({ esFav: encontrados.length > 0 });
  }

  agregarFavorito() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];

    let nuevo = {
      id: (this.props.id),
      tipo: this.props.movie ? "peli" : "serie",
    };

    let repetidos = guardados.filter(
      (fav) => fav.id === nuevo.id && fav.tipo === nuevo.tipo
    );

    if (repetidos.length === 0) {
      guardados.push(nuevo);
      localStorage.setItem("favoritos", JSON.stringify(guardados));
      this.setState({ esFav: true });
    }
  }

  eliminarFavorito() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    let filtrados = guardados.filter(
      (fav) =>
        !(
          Number(fav.id) === Number(this.props.id) &&
          fav.tipo === (this.props.movie ? "peli" : "serie")
        )
    );

    localStorage.setItem("favoritos", JSON.stringify(filtrados));
    this.setState({ esFav: false });
  }

  render() {
    console.log(this.state.nuevo);
    return (
      <React.Fragment>
        {this.state.cargando && (<Cargando />          
        )}
        {this.state.error && (
          <p className="detalle-error">{this.state.error}</p>
        )}

        {this.props.movie && this.state.pelicula && (
          <section className="detalle detalle-pelicula">
            <h2 className="detalle-title">{this.state.pelicula.title}</h2>

            <div className="detalle-content">
              <img
                className="detalle-poster"
                src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`}
                alt={this.state.pelicula.title}
              />

              <div className="detalle-info">
                <p>
                  <strong>Calificación:</strong>{" "}
                  {this.state.pelicula.vote_average}
                </p>
                <p>
                  <strong>Fecha de estreno:</strong>{" "}
                  {this.state.pelicula.release_date}
                </p>
                <p>
                  <strong>Duración:</strong> {this.state.pelicula.runtime} min
                </p>
                <p>
                  <strong>Géneros:</strong>{" "}
                  {this.state.pelicula.genres &&
                  this.state.pelicula.genres.length > 0
                    ? this.state.pelicula.genres.map((g) => g.name).join(", ")
                    : "Sin información"}
                </p>
                <p>
                  <strong>Sinopsis:</strong> {this.state.pelicula.overview}
                </p>

                {this.state.esFav ? (
                  <button
                    className="boton-fav"
                    onClick={() => this.eliminarFavorito()}
                  >
                    Eliminar de Favoritos
                  </button>
                ) : (
                  <button
                    className="boton-fav"
                    onClick={() => this.agregarFavorito()}
                  >
                    Agregar a Favoritos
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {!this.props.movie && this.state.series && (
          <section className="detalle detalle-serie">
            <h2 className="detalle-title">{this.state.series.name}</h2>

            <div className="detalle-content">
              <img
                className="detalle-poster"
                src={`https://image.tmdb.org/t/p/w342${this.state.series.poster_path}`}
                alt={this.state.series.name}
              />

              <div className="detalle-info">
                <p>
                  <strong>Calificación:</strong>{" "}
                  {this.state.series.vote_average}
                </p>
                <p>
                  <strong>Fecha de estreno:</strong>{" "}
                  {this.state.series.first_air_date}
                </p>
                <p>
                  <strong>Géneros:</strong>{" "}
                  {this.state.series.genres &&
                  this.state.series.genres.length > 0
                    ? this.state.series.genres.map((g) => g.name).join(", ")
                    : "Sin información"}
                </p>
                <p>
                  <strong>Sinopsis:</strong> {this.state.series.overview}
                </p>

                {this.state.esFav ? (
                  <button className="boton-fav" onClick={() => this.eliminarFavorito()}>
                    Eliminar de Favoritos
                  </button>
                ) : (
                  <button className="boton-fav" onClick={() => this.agregarFavorito()}>
                    Agregar a Favoritos
                  </button>
                )}
              </div>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default Detalle;
