import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './FormularioHome.css'

class MiFormulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      categoria: "movie",
    };
  }

  controlarForm(evento) {
    evento.preventDefault();
    this.props.history.push("/resultados/" + this.state.categoria + "/" + this.state.busqueda);
  }

  controlarInput(evento) {
    this.setState(
      {
        busqueda: evento.target.value,
      },
      () => console.log("dentro del setState extendido:", this.state.busqueda)
    );
  }

 controlarCategoria(evento){
    this.setState({
      categoria: evento.target.value
    });
  }

  render() {
    return (
      <form
        className="formulario-home"
        onSubmit={(evento) => this.controlarForm(evento)}
      >
        <input onChange={(evento) => this.controlarInput(evento)} />
        <div className="">
          <label>
            <input
              type="radio"
              name="categoria"
              value="movie"
              onChange={(evento) => this.controlarCategoria(evento)}
            />
            Películas
          </label>

          <label>
            <input
              type="radio"
              name="categoria"
              value="tv"
              onChange={(evento) => this.controlarCategoria(evento)}
            />
            Series
          </label>
        </div>

        <button>Buscar</button>
      </form>
    );
  }
}

export default withRouter(MiFormulario);
