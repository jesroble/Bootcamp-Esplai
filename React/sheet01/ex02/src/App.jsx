import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListaDeProductos from './components/ListaDeProductos'

function App() {

  const productos = [
    {
        nombre: 'Laptop',
        precio: 1200,
        descripcion: 'Una laptop potente para trabajar y jugar.',
    },
    {
        nombre: 'Smartphone',
        precio: 800,
        descripcion: 'Un smartphone con una excelente cámara.',
    },
    {
        nombre: 'Auriculares',
        precio: 150,
        descripcion: 'Auriculares con cancelación de ruido.',
    },
    {
        nombre: 'Monitor',
        precio: 300,
        descripcion: 'Monitor 4K para una experiencia visual increíble.',
    },
  ];

  return (
    <ListaDeProductos productos={productos} />
  );
}

export default App
