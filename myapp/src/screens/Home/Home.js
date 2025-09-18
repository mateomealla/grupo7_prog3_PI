import React, { Component } from "react";
import MiFormulario from "../../components/Formularios/FormularioHome";
import SeccionSeries from "../../components/SeriesCard/SeccionSeries";
import { Link} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      topRated: [],
      upcoming: [],
      nowPlaying: [],

      spopulares: [],
      sAiring: [],
      stopRated: [],
      sontheair: [],
    };
  }

  componentDidMount() {
    // PELICULAS POPULARES
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((populares) =>
        this.setState({
          populares: populares.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

    // PELICULAS TOP RATED

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((topRated) =>
        this.setState({
          topRated: topRated.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

    // PELICULAS UPCOMING
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((upcoming) =>
        this.setState({
          upcoming: upcoming.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

    // PELICULAS NOW PLAYING
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((nowPlaying) =>
        this.setState({
          nowPlaying: nowPlaying.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

      // SERIES POPULARES
      fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((spopulares) =>
        this.setState({
          spopulares: spopulares.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

      // SERIES AIRING TODAY
      fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((sAiring) =>
        this.setState({
          sAiring: sAiring.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

      // SERIES TOP RATED
      fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((stopRated) =>
        this.setState({
          stopRated: stopRated.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));

      // SERIES ON THE AIR
      fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
    )
      .then((resp) => resp.json())
      .then((sontheair) =>
        this.setState({
          sontheair: sontheair.results,
        })
      )
      .catch((error) => console.log("Error Fetch", error));
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <MiFormulario />

          <section className="home-section">
            <Link to = "/peliculaspopulares"> <h1>Peliculas Populares</h1> </Link>
            <SeccionSeries peliculas={this.state.populares} movie={true} />
          </section>

          <section className="home-section">
            <Link to = "/seriespopulares"> <h1>Series Populares</h1> </Link>
            <SeccionSeries se={this.state.spopulares} movie={false} />
          </section>

          <section className="home-section">
            <Link to = "/peliculasviendoahora"> <h1>Viendo Ahora</h1> </Link>
            <SeccionSeries peliculas={this.state.nowPlaying} movie={true} />
          </section>

          <section className="home-section">
            <Link to = "/seriesairing"> <h1>Trasmitiendo Ahora</h1> </Link>
            <SeccionSeries se={this.state.sAiring} movie={false} />
          </section>

          <section className="home-section">
            <Link to = "/peliculasmejorpuntuacion"> <h1>Mejor Puntuación</h1> </Link>
            <SeccionSeries peliculas={this.state.topRated} movie={true} />
          </section>

          <section className="home-section">
            <Link to = "/seriesontheair"> <h1>Al Aire</h1> </Link>
            <SeccionSeries se={this.state.sontheair} movie={false} />
          </section>

          <section className="home-section">
            <Link to = "/peliculasproximamente"> <h1>Próximamente</h1> </Link>
            <SeccionSeries peliculas={this.state.upcoming} movie={true} />
          </section>

          <section className="home-section">
            <Link to = "/seriestoprated"> <h1>Series Preferidas</h1> </Link>
            <SeccionSeries se={this.state.stopRated} movie={false} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}
export default Home;
