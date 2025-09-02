import React from "react";

import imgSuiteKing from "../assets/images/Habitación-Suite-CamaKing.png";
import imgSimple from "../assets/images/Habitación-simple.png";
import imgDobleStandard from "../assets/images/Habitación-doble-standard.png";
import imgEjecutivaDoble from "../assets/images/Habitación-ejecutiva-doble.png";
import imgEjecutivaKing from "../assets/images/Habitación-ejecutiva-king.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { set } from "react-hook-form";
import { listaHabitaciones } from "../data/listaHabitaciones";

export const ResumenHabitaciones = () => {


  const [habitacionPrincipal, setHabitacionPrincipal] = useState(listaHabitaciones[0]);
  const habitacionesGaleria = listaHabitaciones.slice(0, 6);
  



  return (
    <section id="habitaciones" className="seccion fondo-claro">
      <div className="container">
        <h2 className="titulo-seccion">Nuestras Habitaciones</h2>
        <div className="contenedor-interactivo-habitaciones">

          <div className="vista-detallada">
            <img
              loading="lazy"
              src={habitacionPrincipal.imagen}
              alt={habitacionPrincipal.titulo}
              className="imagen-principal"
            />
            <h3 className="titulo-detalle">{habitacionPrincipal.titulo}</h3>


            {habitacionPrincipal.capacidad && (
              <div className="info-capacidad" style={{ fontSize: "1.3rem", alignItems: "center", gap: "1rem" }}>
                <div>👤</div>
                <span>{habitacionPrincipal.capacidad} personas</span>
                <span style={{ marginLeft: "5rem", fontWeight: "bold", color: "green"}}>💸 {habitacionPrincipal.precio}</span>
              </div>
              
            )}
            {habitacionPrincipal.desc && (
              <p className="descripcion-detalle">{habitacionPrincipal.desc}</p>
            )}
            <Link to="/Habitaciones" className="btn">
              Ver habitaciones
            </Link>

          </div>
          <div className="galeria-seleccion">
            {habitacionesGaleria.map(habitacion => (
              <div
                key={habitacion.id}
                className="item-galeria"
                onClick={() => setHabitacionPrincipal(habitacion)}
                style={{ cursor: "pointer" }}>
                <img src={habitacion.imagen} alt={habitacion.titulo} loading="lazy" />
                <div className="titulo-superpuesto">{habitacion.titulo}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
