import React from "react";
import Enlace from "./Enlace";

const Menu = ({menu}) => {
    return (
        <nav style={estiloNav}>
            <ul style={estiloLista}>
                {
                    menu.map((enlace, index) => (
                        <Enlace
                            key={index}
                            texto={enlace.texto}
                            url={enlace.url}
                        />
                    ))
                }
            </ul>
        </nav>
    );
};

const estiloNav = {
    padding: '20px',
    backgroundColor: 'black',
    borderRadius: '8px',
};

const estiloLista = {
    padding: 0,
    margin: 0,
};

export default Menu