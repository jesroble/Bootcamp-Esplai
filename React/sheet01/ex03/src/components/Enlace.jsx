import React from "react";
import PropTypes from "prop-types";

const Enlace = ({texto, url}) => {
    return (
        <li>
            <a href={url}>
                {texto}
            </a>
        </li>
    );
}

Enlace.propTypes = {
    texto: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Enlace;