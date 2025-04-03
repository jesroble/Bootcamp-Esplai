let revertirCadena = (texto) => {
    let result = texto.split("").reverse().join("");
    return result;
};

const texto = "JavaScript";
console.log(revertirCadena(texto));