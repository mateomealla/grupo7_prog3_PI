import React, { Component } from "react";
import SeriesCard from "../SeriesCard/SeriesCard.js";
import "./Peliculas.css";
import Cargando from "../Cargando/Cargando.js";

class PeliculasProximamentePadre extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filtro: "",
      cargando: true,
      error: "",
      num: 1,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=" +
        this.state.num
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          cargando: false,
          num: this.state.num + 1,
        });
      })
      .catch((err) => {
        this.setState({
          error: "Error al cargar peliculas",
          cargando: false,
        });
      });
  }

  FiltrarPelis(peliAFiltrar) {
    return this.state.movies.filter((i) =>
      i.title.toLowerCase().includes(peliAFiltrar.toLowerCase())
    );
  }

  cargarMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=${this.state.num}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: this.state.movies.concat(data.results),
          num: this.state.num + 1,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange(event) {
    this.setState({ filtro: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let pelisFiltradas = this.FiltrarPelis(this.state.filtro);

    return (
      <React.Fragment>
        <form
          className="formulario-home"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input
            type="text"
            value={this.state.filtro}
            onChange={(event) => this.handleChange(event)}
            placeholder="Filtra peliculas..."
          />
        </form>

        <h1>Próximamente</h1>

        <section className="seccion-series">
          {this.state.cargando && <Cargando />}
          {this.state.error && <p>{this.state.error}</p>}

          {pelisFiltradas.map((item, i) => (
            <SeriesCard data={item} key={"hola" + i} movie={true} />
          ))}
        </section>

        <button className="btn-mas-pelis" onClick={() => this.cargarMas()}>Más peliculas</button>
      </React.Fragment>
    );
  }
}

export default PeliculasProximamentePadre;
