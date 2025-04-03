let palabraMasLarga = (palabras) => {
    return palabras.reduce((max, actual) => {
        return actual.length > max.length ? actual : max;
    }, "");
};

const palabras = ["hola", "mundo", "javascript", "programación"];
console.log(palabraMasLarga(palabras));