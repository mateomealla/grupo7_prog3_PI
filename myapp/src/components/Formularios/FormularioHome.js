import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './FormularioHome.css'

class MiFormulario extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda:''
        }
    }

    controlarForm(evento){
        evento.preventDefault()
        this.props.history.push('/resultados/' + this.state.busqueda)
    }

    controlarInput(evento){
        this.setState({
            busqueda: evento.target.value
        }, () => 
            console.log('dentro del setState extendido:', this.state.busqueda)
        )
    }

    render(){
        return(
            <form className="formulario-home" onSubmit={(evento) => this.controlarForm(evento)} >
                <input onChange={(evento) => this.controlarInput(evento)}  />
                <button>Buscar</button>
            </form>
        )
    }

}

export default withRouter(MiFormulario)