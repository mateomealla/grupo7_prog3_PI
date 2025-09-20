import React, { Component } from "react";
import { Link } from "react-router-dom";

class SeriesCard extends Component {
  constructor() {
    super();
    this.state = {
      verMas: false,
      textoBoton: "Ver descripcion",
      esFav: false,
    };
  }

  componentDidMount() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    let encontrados = guardados.filter(
      (fav) =>
        fav.id === this.props.data.id &&
        fav.tipo === (this.props.movie ? "peli" : "serie")
    );
    this.setState({ esFav: encontrados.length > 0 });
  }

  Cambiar() {
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.verMas ? "Ver descripcion" : "Ver menos",
    });
  }

  agregarFavorito() {
    let guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    let nuevo = {
      id: this.props.data.id,
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
          fav.id === this.props.data.id &&
          fav.tipo === (this.props.movie ? "peli" : "serie")
        )
    );

    localStorage.setItem("favoritos", JSON.stringify(filtrados));
    this.setState({ esFav: false });
  }

  render() {
    return (
      <React.Fragment>
        <article className="series-card">
          <div className="card-image">
            <img
              src={
                "https://image.tmdb.org/t/p/w342" + this.props.data.poster_path
              }
              alt={
                this.props.data.title
                  ? this.props.data.title
                  : this.props.data.name
              }
            />
          </div>

          <div className="card-body">
            <h4 className="card-title">
              {this.props.data.title
                ? this.props.data.title
                : this.props.data.name}
            </h4>

            {this.state.verMas && (
              <p className="card-desc">
                Descripción: {this.props.data.overview}
              </p>
            )}

            <div className="card-actions">
              <button className="btn-secondary" onClick={() => this.Cambiar()}>
                {this.state.textoBoton}
              </button>

              {this.state.esFav ? (
                <button
                  className="btn-fav"
                  onClick={() => this.eliminarFavorito()}
                >
                  Quitar Favorito
                </button>
              ) : (
                <button
                  className="btn-fav"
                  onClick={() => this.agregarFavorito()}
                >
                  Agregar Favorito
                </button>
              )}
            </div>

            <Link
              to={
                this.props.movie
                  ? `/detalle/peli/${this.props.data.id}`
                  : `/detalle/serie/${this.props.data.id}`
              }
              className="btn-play"
            >
              Detalle
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default SeriesCard;
