let contarVocales = (texto) => {
    let vocales = 0;
    for (let i = 0; texto[i]; i++)
    {
        if (['a', 'e', 'i', 'o', 'u'].includes(texto[i].toLowerCase()))
            vocales++;
    }
    return (vocales);
};

let texto = "Hola mundo";
console.log(contarVocales(texto));