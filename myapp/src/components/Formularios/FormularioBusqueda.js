import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class FormularioHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      categoria: "movie",
    };
  }

  controlarForm(evento) {
    evento.preventDefault();
    this.props.history.push(
      "/resultados/" + this.state.categoria + "/" + this.state.busqueda
    );
  }

  controlarInput(evento) {
    this.setState({
      busqueda: evento.target.value,
    });
  }

  controlarCategoria(evento) {
    this.setState({
      categoria: evento.target.value,
    });
  }

  render() {
    return (
      <form
        className="formulario-home"
        onSubmit={(evento) => this.controlarForm(evento)}
      >
        <input
          type="text"
          placeholder="Buscar..."
          className="formulario-input"
          value={this.state.busqueda}
          onChange={(evento) => this.controlarInput(evento)}
        />

        <div className="formulario-radios">
          <label className="formulario-radio">
            <input
              type="radio"
              name="categoria"
              value="movie"
              checked={this.state.categoria === "movie"}
              onChange={(evento) => this.controlarCategoria(evento)}
            />
            <span>Películas</span>
          </label>

          <label className="formulario-radio">
            <input
              type="radio"
              name="categoria"
              value="tv"
              checked={this.state.categoria === "tv"}
              onChange={(evento) => this.controlarCategoria(evento)}
            />
            <span>Series</span>
          </label>
        </div>

        <button type="submit" className="formulario-btn">
          Buscar
        </button>
      </form>
    );
  }
}

export default withRouter(FormularioHome);
