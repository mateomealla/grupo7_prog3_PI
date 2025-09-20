import React from "react";
import SeriesCard from "./SeriesCard";
import "./SeccionSeries.css";

function SeccionSeries(props) {
  return (
    <section className="seccion-series">
      {props.movie ? (
        props.peliculas.map((elm, i) => (
          <SeriesCard key={elm.title + i} data={elm} movie={true} />
        ))
      ) : (
        props.se.map((elm, i) => (
          <SeriesCard key={elm.name + i} data={elm} movie={false} />
        ))
      )}
    </section>
  );
}

export default SeccionSeries;
