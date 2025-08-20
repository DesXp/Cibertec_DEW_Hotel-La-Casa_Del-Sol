

import { Footer } from './components/Footer'
import { BarraNavegacion } from './components/BarraNavegacion'

import PaginaContacto from './pages/PaginaContacto'
import PaginaHabitaciones from './pages/PaginaHabitaciones'
import PaginaGaleria from './pages/PaginaGaleria'
import PaginaReservas from './pages/PaginaReservas'
import PaginaNosotros from './pages/PaginaNosotros'
import { Home } from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // 1. Envuelve toda tu aplicación con BrowserRouter
    <BrowserRouter basename='/Cibertec_DEW_Hotel-La-Casa_Del-Sol/git '>
      {/* La barra de navegación ahora puede estar dentro o fuera de BrowserRouter */}
      <BarraNavegacion />

      {/* 2. Define el área donde cambiarán los componentes */}
      <Routes>
        {/* 3. Crea una ruta para cada página */}
        <Route path="/" element={<Home />} />
        <Route path="/PaginaHabitaciones" element={<PaginaHabitaciones />} />
        <Route path="/PaginaGaleria" element={<PaginaGaleria />} />
        <Route path="/PaginaReservas" element={<PaginaReservas />} />
        <Route path="/PaginaNosotros" element={<PaginaNosotros />} />
        <Route path="/PaginaContacto" element={<PaginaContacto />} />

        {/* Opcional: una ruta por defecto si no se encuentra la URL */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Puedes agregar aquí otros componentes como el Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
