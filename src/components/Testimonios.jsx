import React from "react";

import { testimoniosData } from '../data/testimonios-data'

export const Testimonios = () => {
  return (
    <section id="testimonios" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion">Lo que dicen nuestros huéspedes</h2>
        <div className="cuadricula-testimonios">
          {testimoniosData.map(({ id, testimonio, autor }) => (
            <div className="tarjeta-testimonio" key={id}>
              <p>{testimonio}</p>
              <footer className="autor-testimonio">- {autor}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
