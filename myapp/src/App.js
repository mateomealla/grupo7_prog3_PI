import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./screens/Home/Home"
import Busqueda from "./screens/Busqueda/Busqueda"
import Detalle from "./screens/Detalle/Detalle"
import Favoritos from "./screens/Favoritos/Favoritos"
import PelisScreen from "./screens/PelisScreen/PelisScreen"
import SeriesScreen from "./screens/SeriesScreen/SeriesScreen"
import NotFound from "./screens/NotFound/NotFound"
// import Loader from "./screens/Loader/Loader"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/peliculas" component={PelisScreen}/>
        <Route path="/series" component={SeriesScreen}/>
        <Route path="/resultados/:busqueda" component={Busqueda}/>
        <Route path="/detalle/:id" component={Detalle}/>
        <Route component={NotFound}/>
      </Switch>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
