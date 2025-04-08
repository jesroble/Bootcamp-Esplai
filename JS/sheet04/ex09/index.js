let agregar = document.getElementById("agregar");
let eliminar = document.getElementById("eliminar");
let texto = document.getElementById("texto");

agregar.addEventListener("click", () => {
    texto.classList.add("verde");
});

eliminar.addEventListener("click", () => {
    texto.classList.remove("verde");
});