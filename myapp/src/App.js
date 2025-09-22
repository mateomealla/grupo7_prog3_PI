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

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" exact={true} component={Favoritos}/>

        <Route path="/peliculaspopulares" exact={true} component={PelisPopulares}/>
        <Route path="/peliculasviendoahora" exact={true} component={PelisAhora}/>
        <Route path="/peliculasmejorpuntuacion" exact={true} component={PelisMejorPt}/>
        <Route path="/peliculasproximamente" exact={true} component={PelisProx}/>

        <Route path="/seriespopulares" exact={true} component={SeriesPopulares}/>
        <Route path="/seriestoprated" exact={true} component={SeriesTopRated}/>
        <Route path="/seriesairing" exact={true} component={Seriesairing}/>
        <Route path="/seriesontheair" exact={true} component={Seriesontheair}/>

        <Route path="/resultados/:category/:query" exact={true} component={Busqueda}/>
        <Route path="/detalle/:peli/:id" exact={true} component={DetallePeli}/>
        <Route component={NotFound}/>
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
