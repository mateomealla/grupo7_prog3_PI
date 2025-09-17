import React, { Component } from "react";
import SeriesCard from "../SeriesCard/SeriesCard.js";


class Series extends Component {
  constructor() {
    super();
    this.state = {
      series: [],
      page: 1,
      filtro: "",
      loading: true,
      error: "",
    };
  }

componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          series: data.results,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          error: 'Error al cargar personajes',
          loading: false
        });
      });
  }


FiltrarSeries(serieAFiltrar) {
  return this.state.series.filter((i) =>
    i.title.toLowerCase().includes(serieAFiltrar.toLowerCase())
  );
}


cargarMas() {
}

handleSubmit(event) {
  event.preventDefault(); 
}

render() {
    let seriesFiltradas = this.FiltrarSeries(this.state.filtro);

  return (
    <React.Fragment>
    <section className="">
        {this.state.loading && <p>Cargando…</p>}
        {this.state.error && <p >{this.state.error}</p>}
        <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              value={this.state.filtro}
              onChange={(event) => this.handleChange(event)}
              placeholder="Filtra personajes..."
            />
          </form>
      <div className="">
        {seriesFiltradas.map((item, i) => (
          <SeriesCard image= {item.poster_path} name={item.title} desc={item.overview} id={item.id}  key={"hola" + i} />
        ))}
      </div>
    </section>

<button onClick={() => this.cargarMas()}>
        Más series
      </button>
    </React.Fragment>

  );
};

};

export default Series;
