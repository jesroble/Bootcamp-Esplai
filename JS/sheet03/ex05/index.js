// Función normal
const numeros = [1, 2, 3];
const dobles = numeros.map(function(n) {
return n * 2;
});

// función flecha
let doblados = numeros.map(n => n * 2);
console.log(dobles + "\n");
console.log(doblados + "\n");