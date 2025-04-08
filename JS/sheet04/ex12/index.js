let button = document.getElementById("button");
let texto = document.getElementById("texto");

button.addEventListener("click", () => {
    texto.classList.add("grande");
    texto.classList.add("borde");
});