import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="encabezado">
      <div className="encabezado-contenido">
        <h1>Bienvenido a Hotel Paraíso!</h1>
        <p>Tu escapada de lujo te espera</p>
        <Link to="/PaginaHabitaciones" className="btn">Ver Habitaciones</Link>
      </div>
    </header>
  );
};
