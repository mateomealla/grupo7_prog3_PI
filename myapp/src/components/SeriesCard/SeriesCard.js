import React, { Component } from "react";
import { Link } from "react-router-dom";

class SeriesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      textoBoton: "Ver descripcion",
      dataProducto: props.data,
    };
  }

  Cambiar() {
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.verMas ? "Ver descripcion" : "Ver menos",
    });
  }

  render() {
    return (
      <React.Fragment>
        <article className="series-card">
          <div className="card-image">
            <img
              src={"https://image.tmdb.org/t/p/w342" + this.state.dataProducto.poster_path}
              alt={this.state.dataProducto.title}
            />
          </div>

          <div className="card-body">
            <h4 className="card-title">{this.state.dataProducto.title}</h4>
            {console.log(this.state.dataProducto.title)}

            {this.state.verMas && (
              <p className="card-desc">
                Descripción: {this.state.dataProducto.overview}
              </p>
            )}

            <div className="card-actions">
              <button className="btn-secondary" onClick={() => this.Cambiar()}>
                {this.state.textoBoton}
              </button>

              <button className="btn-fav">Favorito</button>
            </div>
            <Link to={`/detalle/id/${this.state.dataProducto.id}`} className="btn-play">
              Detalle
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default SeriesCard;
