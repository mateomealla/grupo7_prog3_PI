import React, { Component } from "react";
import SeriesCard from "../SeriesCard/SeriesCard.js";
import "./Series.css";

class Series extends Component {
  constructor() {
    super();
    this.state = {
      series: [],
      filtro: "",
      cargando: true,
      error: "",
      num: 1,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&page=" +
        this.state.num
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          series: data.results,
          cargando: false,
          num: this.state.num + 1,
        });
      })
      .catch((err) => {
        this.setState({
          error: "Error al cargar personajes",
          cargando: false,
        });
      });
  }

  FiltrarSeries(seriesAFiltrar) {
    return this.state.series.filter((i) =>
      i.name.toLowerCase().includes(seriesAFiltrar.toLowerCase())
    );
  }

  cargarMas() {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&page=" +
        this.state.num
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          series: this.state.series.concat(data.results),
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
    let seriesFiltradas = this.FiltrarSeries(this.state.filtro);
    console.log(this.state.series);
    return (
      <React.Fragment>
        <form className="formulario-home" onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.filtro}
            onChange={(event) => this.handleChange(event)}
            placeholder="Filtra series..."
          />
        </form>

        <h1>Series populares</h1>
        <section className="seccion-series">
          {this.state.cargando && <p>Cargando…</p>}
          {this.state.error && <p>{this.state.error}</p>}

          {seriesFiltradas.map((item, i) => (
            <SeriesCard data={item} key={"hola" + i} />
          ))}
        </section>

        <button onClick={() => this.cargarMas()}>Más series</button>
      </React.Fragment>
    );
  }
}

export default Series;
