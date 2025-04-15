import React from 'react';
import PropTypes from 'prop-types';

const Tarjeta = ({ nombre, apellido, ocupacion, imagenURL }) => {
    return (
        <div style={estilosTarjeta}>
            <img src={imagenURL} alt={`${nombre} ${apellido}`} style={estilosImagen} />
            <h2>{nombre} {apellido}</h2>
            <p>{ocupacion}</p>
        </div>
    );
};

const estilosTarjeta = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const estilosImagen = {
    width: '100%',
    borderRadius: '50%',
};

Tarjeta.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ocupacion: PropTypes.string.isRequired,
    imagenURL: PropTypes.string.isRequired,
};

export default Tarjeta;