import React, { Component } from "react";
// import MiFormulario from "../../components/Formularios/FormularioHome";
import SeriesCard from "../../components/SeriesCard/SeriesCard";
// import "../../components/Series/Series.css";   
// import "../Home/Home.css";   
import "./Busqueda.css"

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
    let categoria = this.props.match.params.category;
    let query = this.props.match.params.query;

    fetch(
      `https://api.themoviedb.org/3/search/${categoria}?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          results: data.results ? data.results : [],
          cargando: false,
          num:2
        });
      })
      .catch(() =>
        this.setState({ error: "Error al buscar resultados", cargando: false })
      );
  }

   cargarMas() {
    fetch(
      "https://api.themoviedb.org/3/search/" + this.state.categoria + "?api_key=8a83423231f73046d3a699212802bf6e&language=es-ES&query=" + this.state.query + "&page=" + this.state.num +"&include_adult=false"
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
        <section className="">
      <h1>Resultados de búsqueda</h1>
      
        {this.state.cargando && <p>Cargando…</p>}
        {this.state.error && <p>{this.state.error}</p>}

       <section className="">
          {this.state.results.map((item, i) => (
            <SeriesCard data={item} movie={categoria === "movie"} key={"hola" + i} />
          ))}
      </section>
      <button className="" onClick={() => this.cargarMas()}>Más peliculas</button>
      </section>
      </main>
    );
  }
}

export default SearchResults;
