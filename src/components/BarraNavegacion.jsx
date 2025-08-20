import React from 'react';
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';

export const BarraNavegacion = () => {


  return (
    <nav className="barra-navegacion">
      <div className="container">
        <Link className="barra-navegacion-marca" href="/">
          <img src={logo} alt="Hotel Logo" />
        </Link>
        <ul className="barra-navegacion-enlaces">

          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/PaginaHabitaciones">Habitaciones</Link></li>
          <li><Link to="/PaginaGaleria">Galería</Link></li>
          <li><Link to="/PaginaReservas">Reservar</Link></li>
          <li><Link to="/PaginaNosotros">Nosotros</Link></li>
          <li><Link to="/PaginaContacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};


