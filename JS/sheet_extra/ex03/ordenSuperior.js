let ordenSuperior = (operacion, numeros) => operacion(numeros);

let sumar = (numeros) => numeros.reduce((sum, num) => sum + num, 0);
let restar = (numeros) => numeros.reduce((sum, num) => sum - num, 0);
let multiplicar = (numeros) => numeros.reduce((sum, num) => sum * num, 1);
let dividir = (numeros) => numeros.reduce((sum, num) => sum / num, 1);

let numeros = [1, 2, 3, 4];

console.log(ordenSuperior(sumar, numeros));
console.log(ordenSuperior(restar, numeros));
console.log(ordenSuperior(multiplicar, numeros));
console.log(ordenSuperior(dividir, numeros));