
import hab1 from '../assets/images/imgHabitaciones/imagenesBanner/Hab1.jpg'
import hab2 from '../assets/images/imgHabitaciones/imagenesBanner/Hab2.jpg'
import hab3 from '../assets/images/imgHabitaciones/imagenesBanner/Hab3.jpg'
import hab4 from '../assets/images/imgHabitaciones/imagenesBanner/Hab4.jpg'
import hab5 from '../assets/images/imgHabitaciones/imagenesBanner/Hab5.jpg'
import hab6 from '../assets/images/imgHabitaciones/imagenesBanner/Hab6.jpg'
import hab7 from '../assets/images/imgHabitaciones/imagenesBanner/Hab7.jpg'
import hab8 from '../assets/images/imgHabitaciones/imagenesBanner/Hab8.jpg'
import hab9 from '../assets/images/imgHabitaciones/imagenesBanner/Hab9.jpg'
import hab10 from '../assets/images/imgHabitaciones/imagenesBanner/Hab10.jpg'
import hab11 from '../assets/images/imgHabitaciones/imagenesBanner/Hab11.jpg'
import hab12 from '../assets/images/imgHabitaciones/imagenesBanner/Hab12.jpg'

export const listaHabitaciones = [
  {
    id: 'bungalow', titulo: 'Bungalow', precio: '180', imagen: hab1, clase: 'Suite', capacidad: 2, best: true,
    desc: 'Acogedor bungalow rodeado de naturaleza, ideal para una escapada romántica o relajante. Cuenta con todas las comodidades modernas.'
  },
  {
    id: 'doble-twin-double', titulo: 'Habitación Doble (Twin/Double)', precio: '220', imagen: hab5, clase: 'Habitacion', capacidad: 2, best: true,
    desc: 'Habitación versátil con dos camas individuales o una cama doble. Perfecta para amigos o parejas.'
  },
  {
    id: 'habitacion-deluxe', titulo: 'Habitación Deluxe', precio: '270', imagen: hab10, clase: 'Habitacion', capacidad: 2, best: true,
    desc: 'Habitación de alto nivel con acabados premium, minibar y vistas excepcionales.'
  },
  {
    id: 'habitacion-familiar', titulo: 'Habitación Familiar', precio: '240', imagen: hab7, clase: 'Suite', capacidad: 4, best: true,
    desc: 'Espacio ideal para familias, con varias camas y zonas amplias para todos los integrantes.'
  },
  {
    id: 'habitacion-premium', titulo: 'Habitación Premium', precio: '290', imagen: hab11, clase: 'Habitacion', capacidad: 2, best: true,
    desc: 'Comodidad y lujo en un solo lugar. Ideal para parejas que buscan una experiencia elevada.'
  },
  {
    id: 'habitacion-superior', titulo: 'Habitación Superior', precio: '190', imagen: hab2, clase: 'Habitacion', capacidad: 2, best: true,
    desc: 'Confortable habitación con diseño moderno y elegante. Perfecta para estancias cortas o viajes de negocios.'
  },
  {
    id: 'habitacion-triple', titulo: 'Habitación Triple', precio: '260', imagen: hab9, clase: 'Habitacion', capacidad: 3,
    desc: 'Cómoda habitación para tres personas, con camas individuales o combinadas según preferencia.'
  },
  {
    id: 'loft-terraza', titulo: 'Loft con Terraza', precio: '200', imagen: hab3, clase: 'Ejecutiva', capacidad: 2,
    desc: 'Amplio loft con terraza privada. Ideal para quienes buscan comodidad y un espacio al aire libre exclusivo.'
  },
  {
    id: 'suite-ejecutiva', titulo: 'Suite Ejecutiva', precio: '250', imagen: hab8, clase: 'Ejecutiva', capacidad: 2,
    desc: 'Diseñada para el viajero de negocios. Incluye escritorio, zona de reuniones y total privacidad.'
  },
  {
    id: 'suite-junior', titulo: 'Suite Junior', precio: '210', imagen: hab4, clase: 'Suite', capacidad: 2,
    desc: 'Una suite cómoda y elegante con áreas de descanso separadas. Ideal para parejas o estancias prolongadas.'
  },
  {
    id: 'suite-nupcial', titulo: 'Suite Nupcial', precio: '300', imagen: hab12, clase: 'Suite', capacidad: 2,
    desc: 'Decoración romántica y servicios especiales para celebrar momentos únicos. La mejor opción para recién casados.'
  },
  {
    id: 'suite-presidencia', titulo: 'Suite Presidencia', precio: '230', imagen: hab6, clase: 'Suite', capacidad: 4,
    desc: 'Nuestra suite más lujosa. Con sala de estar, comedor y vistas panorámicas, ideal para una experiencia exclusiva.'
  }
];
