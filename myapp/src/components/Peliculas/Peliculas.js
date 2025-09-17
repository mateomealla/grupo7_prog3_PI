import React, { Component } from "react";
import PelisCard from "../PelisCard/PelisCard.js";


class Peliculas extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      filtro: "",
      loading: true,
      error: "",
      num:1
    };
  }

componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&page="+this.state.num)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results,
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

FiltrarPelis(peliAFiltrar) {
  return this.state.movies.filter((i) =>
    i.title.toLowerCase().includes(peliAFiltrar.toLowerCase())
  );
}


cargarMas() {
}

handleSubmit(event) {
  event.preventDefault(); 
}


render() {
     let pelisFiltradas = this.FiltrarPelis(this.state.filtro);

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
        {pelisFiltradas.map((item, i) => (
          <PelisCard image= {item.poster_path} name={item.title} desc={item.overview} id={item.id}  key={"hola" + i} />
        ))}
      </div>

    </section>

<button onClick={() => this.cargarMas()}>
        Más peliculas
      </button>
    </React.Fragment>

  );
};

};

export default Peliculas;
