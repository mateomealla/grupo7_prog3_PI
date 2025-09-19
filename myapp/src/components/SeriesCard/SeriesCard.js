import React, { Component } from "react";
import { Link } from "react-router-dom";

class SeriesCard extends Component {
  constructor() {
    super();
    this.state = {
      verMas: false,
      textoBoton: "Ver descripcion",
    };
  }

  Cambiar() {
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.verMas ? "Ver descripcion" : "Ver menos",
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <React.Fragment>
        <article className="series-card">
          <div className="card-image">
            <img
              src={"https://image.tmdb.org/t/p/w342" + this.props.data.poster_path}
              alt={this.props.data.title ? this.props.data.title : this.props.data.name}
            />
          </div>

          <div className="card-body">
            <h4 className="card-title">{this.props.data.title ? this.props.data.title : this.props.data.name}</h4>
           

            {this.state.verMas && (
              <p className="card-desc">
                Descripción: {this.props.data.overview}
              </p>
            )}

            <div className="card-actions">
              <button className="btn-secondary" onClick={() => this.Cambiar()}>
                {this.state.textoBoton}
              </button>

              <button className="btn-fav">Favorito</button>
            </div>
            <Link to={this.props.movie ? `/detalle/peli/${this.props.data.id}` : `/detalle/serie/${this.props.data.id}`} className="btn-play">
              Detalle
            </Link>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default SeriesCard;
