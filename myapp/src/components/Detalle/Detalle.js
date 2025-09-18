import React, {Component} from "react";
import './Detalle.css';


class Detalle extends Component {
    constructor(props){
        super(props);   
        this.state = {
            pelicula: null,
            cargando: true,
            error: "",
            esFav: false,
        };
    }


    componentDidMount(){
        const id = this.props.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e1b1f3a5f4f0e1e2c4f6f7c8d9e0a1b&language=es-ES`)
        .then(res => res.json())
        .then(data => { 
              console.log("Respuesta TMDB:", data); 

            let guardados 
            = JSON.parse(localStorage.getItem('favoritos')) || [];
            let existe = guardados.some(f => f.id === data.id);
            this.setState({
                pelicula: data,
                cargando: false,
                esFav: existe,
            });
        }
        )
        .catch(falla => {
            this.setState({
                error:  "Error al cargar detalle de la película",
                cargando: false,
            })
        });
    }
    
    cambiarFavorito(){
        let pelicula = this.state.pelicula;
        let guardados = JSON.parse(localStorage.getItem('favoritos')) || [];
        let existe = guardados.some(f => f.id === pelicula.id);

        if(existe){ 
            guardados = guardados.filter(f => f.id !== pelicula.id);
            localStorage.setItem('favoritos', JSON.stringify(guardados));
            this.setState({esFav: false});
        } else {
            guardados.push({
                id: pelicula.id, 
                title: pelicula.title,
                poster_path: pelicula.poster_path,
                media_type: 'movie'
            });
            localStorage.setItem('favoritos', JSON.stringify(guardados));
            this.setState({esFav: true});
        }

    }

    render() {
    return (
      <React.Fragment>
        {this.state.cargando && <p>Cargando detalle...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.pelicula && (
          <section className="detalle">
            <h2>{this.state.pelicula.title}</h2>

            <img
              src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`}
              alt={this.state.pelicula.title}
            />

            <p>
              <strong>Calificación:</strong> {this.state.pelicula.vote_average}
            </p>
            <p>
              <strong>Fecha de estreno:</strong>{" "}
              {this.state.pelicula.release_date}
            </p>
            <p>
              <strong>Duración:</strong> {this.state.pelicula.runtime} min
            </p>

            <p>
              <strong>Géneros:</strong>{" "}
              {this.state.pelicula.genres && this.state.pelicula.genres.length > 0
                ? this.state.pelicula.genres.map((g) => g.name).join(", ")
                : "Sin información"}
            </p>

            <p>
              <strong>Sinópsis:</strong> {this.state.pelicula.overview}
            </p>

            <button onClick={() => this.cambiarFavorito()}>
              {this.state.esFav
                ? "Quitar de Favoritos"
                : "Agregar a Favoritos"}
            </button>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default Detalle;