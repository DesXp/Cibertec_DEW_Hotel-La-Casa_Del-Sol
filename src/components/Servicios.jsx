import React from "react";
import { servicios } from "../data/listaServicios";


export const Servicios = () => {
  return (
    <section id="servicios" className="seccion">
      <div className="container">
        <h2 className="titulo-seccion"> Nuestros Servicios</h2>
        <div className="cuadricula-servicios">
          {servicios.map(({icono, titulo}, index) => (
            <div className="servicio-item" key={index}>
              <div className="icono-servicio">{icono}</div>
              <h4>{titulo}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

