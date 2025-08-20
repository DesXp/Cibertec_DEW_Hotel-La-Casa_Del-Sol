import React from 'react'
import { Header } from '../components/Header'
import { SobreNosotros } from '../components/SobreNosotros'
import { Servicios } from '../components/Servicios'
import { Galeria } from '../components/Galeria'
import { Testimonios } from '../components/Testimonios'
import { SectionHabitaciones } from '../components/SectionHabitaciones'


export const Home = () => {
  return (
    <>
    <Header />
    <SobreNosotros />
    <SectionHabitaciones />
    <Servicios />
    <Galeria />
    <Testimonios />
    </>

  )
}


