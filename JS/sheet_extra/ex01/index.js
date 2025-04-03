let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados + "\n");

let pares = numeros.filter(num => num % 2 === 0);
console.log(pares + "\n");

let sumar = numeros.reduce((sum, num) => sum + num, 0);
console.log(sumar + "\n");