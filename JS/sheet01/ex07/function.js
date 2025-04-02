function sumarArreglo(numeros)
{
    let suma = 0;
    for (let i = 0; numeros[i]; i++)
        suma += numeros[i];
    return suma;
}

let numeros = [1, 2, 3, 4, 5];
console.log("la suma del array es: ", sumarArreglo(numeros));