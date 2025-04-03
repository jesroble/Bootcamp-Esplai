let removerDuplicados = (numeros) => {
    let nuevo = new Set();
    for (let i = 0; numeros[i]; i++)
        nuevo.add(numeros[i]);
    return nuevo;
};

const numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(removerDuplicados(numeros));