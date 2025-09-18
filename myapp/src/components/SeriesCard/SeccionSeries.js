import React from "react";
import SeriesCard from "./SeriesCard";
import "./SeccionSeries.css"

function SeccionSeries(props) {
    return(
        <section className="seccion-series">
            {
                props.peliculas.slice(0, 5).map((elm,i)=> <SeriesCard key={elm.title + i} data= {elm}  />)
            }
        </section>

    )

}

export default SeccionSeries;