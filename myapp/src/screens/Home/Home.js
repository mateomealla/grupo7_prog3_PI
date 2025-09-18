import React, { Component } from "react";
import MiFormulario from "../../components/Formularios/FormularioHome";
import SeccionSeries from "../../components/SeriesCard/SeccionSeries";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      topRated: [],
      upcoming: [],
      nowPlaying: [],
    };
  }

  componentDidMount() {
    // PELICULAS POPULARES
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=8a83423231f73046d3a699212802bf6e&language=en-US&page=1"
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
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <MiFormulario />

          <section className="home-section">
            <h1>Now Playing</h1>
            <SeccionSeries peliculas={this.state.nowPlaying} />
          </section>

          <section className="home-section">
            <h1>Popular</h1>
            <SeccionSeries peliculas={this.state.populares} />
          </section>

          <section className="home-section">
            <h1>Top Rated</h1>
            <SeccionSeries peliculas={this.state.topRated} />
          </section>

          <section className="home-section">
            <h1>Upcoming</h1>
            <SeccionSeries peliculas={this.state.upcoming} />
          </section>
        </main>
        {console.log(this.state.topRated)}
      </React.Fragment>
    );
  }
}
export default Home;
