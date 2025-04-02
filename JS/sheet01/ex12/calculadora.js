let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let mult = document.getElementById("mult");
let div = document.getElementById("divide");
let text = document.getElementById("text");

suma.addEventListener("click", () => {
    let result = parseFloat(n1.value) + parseFloat(n2.value);
    text.textContent = "El resultado de la suma es: " + result;
});

resta.addEventListener("click", () => {
    let result = n1.value - n2.value;
    text.textContent = "El resultado de la resta es: " + result;
});

mult.addEventListener("click", () => {
    let result = n1.value * n2.value;
    text.textContent = "El resultado de la multiplicación es: " + result;
});

div.addEventListener("click", () => {
    let result = n1.value / n2.value;
    text.textContent = "El resultado de la división es: " + result;
});