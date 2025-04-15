import React from "react";
import PropTypes from "prop-types";

const Producto = ({nombre, precio, descripcion}) => {
    return (
        <div style={estiloProducto}>
            <h2>{nombre}</h2>
            <p>Precio: {precio}$</p>
            <p>Descripción: {descripcion}</p>
        </div>
    )
};

Producto.PropTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
};

const estiloProducto = {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'left',
};

export default Producto;
