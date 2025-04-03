let esPalindromo = (texto) => {
    let clean = texto.toLowerCase().replace(/[^a-z]/g, "");

    return clean == clean.split("").reverse().join("");
};

const texto = "A man, a plan, a canal, Panama";
console.log(esPalindromo(texto)); //true
console.log(esPalindromo("Hola mundo")); //false