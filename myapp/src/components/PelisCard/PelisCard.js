// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../Peliculas/Peliculas.css";

// class PelisCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       verMas: false,
//       textoBoton: "Ver más",
//     };
//   }

//   Cambiar() {
//     this.setState({
//       verMas: !this.state.verMas,
//       textoBoton: this.state.verMas ? "Ver más" : "Ver menos",
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <article className="">
//           <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
         
//           <h4>{this.props.name}</h4>
//           <div className="">
//             {this.state.verMas && <p>Descripcion: {this.props.desc} </p>}
//             <button onClick={() => this.Cambiar()}>
//               {this.state.textoBoton}
//             </button>
//           </div>
//           <Link to={`/detalle/id/${this.props.id}`}>
//             <p>Detalle</p>
//           </Link>
//           <button>Guardar</button>
//         </article>
//       </React.Fragment>
//     );
//   }
// }

// export default PelisCard;
