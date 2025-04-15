import React from 'react';
import Tarjeta from './Tarjeta';

const ListaDeTarjetas = ({ tarjetas }) => {
    return (
        <div style={estilosLista}>
            <Tarjeta
                nombre="Juan"
                apellido="Pérez"
                ocupacion="Ingeniero de Software"
                imagenURL="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <Tarjeta
                nombre="Ana"
                apellido="García"
                ocupacion="Diseñadora Gráfica"
                imagenURL="https://randomuser.me/api/portraits/women/50.jpg"
            />
            <Tarjeta
                nombre="Carlos"
                apellido="López"
                ocupacion="Médico"
                imagenURL="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <Tarjeta
                nombre="María"
                apellido="Rodríguez"
                ocupacion="Profesora"
                imagenURL="https://randomuser.me/api/portraits/women/22.jpg"
            />
        </div>
    );
};

const estilosLista = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

export default ListaDeTarjetas;