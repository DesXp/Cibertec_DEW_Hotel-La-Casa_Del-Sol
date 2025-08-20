// App.jsx

// 1. Importa HashRouter en lugar de BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { BarraNavegacion } from './components/BarraNavegacion';
// ...otros imports...
import { Home } from './pages/Home';

function App() {
  return (
    // 2. Usa HashRouter. NO necesita 'basename'.
    <HashRouter>
      <BarraNavegacion />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PaginaHabitaciones" element={<PaginaHabitaciones />} />
          <Route path="/PaginaGaleria" element={<PaginaGaleria />} />
          <Route path="/PaginaReservas" element={<PaginaReservas />} />
          <Route path="/PaginaNosotros" element={<PaginaNosotros />} />
          <Route path="/PaginaContacto" element={<PaginaContacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;