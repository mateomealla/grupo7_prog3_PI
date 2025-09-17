import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PelisCard extends Component {

constructor() {
  super();
   this.state = { 
    verMas: false, 
    textoBoton: "Ver más",
  };
}

Cambiar() {
  this.setState({
    verMas: !this.state.verMas,
    textoBoton: this.state.verMas ? "Ver más" : "Ver menos"
    
  });
}

render(){
    return(
    <React.Fragment>

        <article>
            <img src={this.props.image} alt="" />
            <h4>{this.props.name}</h4>          
        <div className="">
            {this.state.verMas && 
            <p>Descripcion: {this.props.desc} </p>
            }
            <button onClick={() => this.Cambiar()}>
                {this.state.textoBoton}
            </button>   
        </div>
            <Link to={`/peliculas/id/${this.props.id}`}>
            <p>Detalle</p>
            </Link>  
            <button>Guardar</button>        
        </article>
        
    </React.Fragment>

        );
    }
};


export default PelisCard;



