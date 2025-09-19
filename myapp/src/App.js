import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./screens/Home/Home"
import Busqueda from "./screens/Busqueda/Busqueda"
import DetallePeli from "./screens/Detalle/DetallePeli"
import Favoritos from "./screens/Favoritos/Favoritos"


import PelisPopulares from "./screens/PelisScreen/PelisPopulares"
import PelisAhora from "./screens/PelisScreen/PelisAhora"
import PelisMejorPt from "./screens/PelisScreen/Pelismejorpt"
import PelisProx from "./screens/PelisScreen/PelisProximamente"

import SeriesPopulares from "./screens/SeriesScreen/SeriesPopulares"
import SeriesTopRated from "./screens/SeriesScreen/SeriesTopRated"
import Seriesairing from "./screens/SeriesScreen/Seriesairing"
import Seriesontheair from "./screens/SeriesScreen/Seriesontheair"

import NotFound from "./screens/NotFound/NotFound"

// import Loader from "./screens/Loader/Loader"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>

        <Route path="/peliculaspopulares" component={PelisPopulares}/>
        <Route path="/peliculasviendoahora" component={PelisAhora}/>
        <Route path="/peliculasmejorpuntuacion" component={PelisMejorPt}/>
        <Route path="/peliculasproximamente" component={PelisProx}/>

        <Route path="/seriespopulares" component={SeriesPopulares}/>
        <Route path="/seriestoprated" component={SeriesTopRated}/>
        <Route path="/seriesairing" component={Seriesairing}/>
        <Route path="/seriesontheair" component={Seriesontheair}/>

        <Route path="/resultados/:busqueda" component={Busqueda}/>
        <Route path="/detalle/:peli/:id" component={DetallePeli}/>
        <Route component={NotFound}/>
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
