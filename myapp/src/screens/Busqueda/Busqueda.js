import React, { Component } from "react";
import SeriesCard from "../../components/SeriesCard/SeriesCard";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      cargando: true,
      error: "",
      categoria: this.props.match.params.category,
      query: this.props.match.params.query,
      num: 1,
    };
  }

  componentDidMount() {
    let { category, query } = this.props.match.params;

    fetch(
      `https://api.themoviedb.org/3/search/${category}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          results: data.results ? data.results : [],
          cargando: false,
          num: 2,
        });
      })
      .catch(() =>
        this.setState({ error: "Error al buscar resultados", cargando: false })
      );
  }

  cargarMas() {
    fetch(
      `https://api.themoviedb.org/3/search/${this.state.categoria}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&query=${this.state.query}&page=${this.state.num}&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          results: this.state.results.concat(data.results),
          num: this.state.num + 1,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let categoria = this.props.match.params.category;

    return (
      <main>
        <h1 className="detalle-screen-title">Resultados de búsqueda</h1>

        {this.state.cargando && <p>Cargando…</p>}
        {this.state.error && <p>{this.state.error}</p>}

        <div className="home-section">
          <h1>{categoria === "movie" ? "Películas" : "Series"}</h1>
          <section className="seccion-series">
            {this.state.results.map((item, i) => (
              <SeriesCard
                data={item}
                movie={categoria === "movie"}
                key={"res-" + i}
              />
            ))}
          </section>
        </div>

        {this.state.results.length > 0 && (
          <div className="load-more-container">
            <button className="btn-mas-pelis" onClick={() => this.cargarMas()}>
              Cargar más
            </button>
          </div>
        )}
      </main>
    );
  }
}

export default SearchResults;
