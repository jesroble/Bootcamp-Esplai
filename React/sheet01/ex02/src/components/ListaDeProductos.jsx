import React from "react";
import Producto from "./Producto";

const ListaDeProductos = ({productos}) => {
    return (
        <div style={estilosLista}>
            {productos.map((producto, index) => (
                <Producto
                    key={index}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                />
            ))}
        </div>
    );
};

const estilosLista = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
};

export default ListaDeProductos;