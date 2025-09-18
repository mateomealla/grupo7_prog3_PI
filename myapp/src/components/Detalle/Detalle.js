import React, { Component } from "react";
import "./Detalle.css";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      cargando: true,
      error: "",
      series: null,
    };
  }

  componentDidMount() {
    const movie_id = this.props.id;

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
    )
      .then((res) => res.json())
      .then((movie) => {
        this.setState({
          pelicula: movie,
          cargando: false,
        });
      })
      .catch((error) => console.log("Error Fetch", error));

    fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES`
    )
      .then((res) => res.json())
      .then((series) => {
        this.setState({
          series: series,
          cargando: false,
        });
      })
      .catch((error) => console.log("Error Fetch", error));
  }

  render() {
    console.log(this.state.pelicula);

    return (
      <React.Fragment>
        {this.state.cargando && <p>Cargando detalle...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.pelicula && (
          <section className="detalle">
            <h2>{this.state.pelicula.title}</h2>

            <img
              src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`}
              alt={this.state.pelicula.title}
            />

            <p>
              <strong>Calificación:</strong> {this.state.pelicula.vote_average}
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
              <strong>Sinópsis:</strong> {this.state.pelicula.overview}
            </p>

            <button onClick={() => this.cambiarFavorito()}>
              {this.state.esFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
            </button>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default Detalle;
