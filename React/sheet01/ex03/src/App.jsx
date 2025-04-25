import React from 'react';
import Menu from './components/Menu';

function App() {

  const menu = [
    {texto: 'Inicio', url: '/'},
    {texto: 'Acerca de', url: '/about'},
    {texto: 'Servicios', url: '/services'},
    {texto: 'Contacto', url: '/contact'},
  ];

  return (
    <Menu menu={menu}/>
  );
}

export default App
