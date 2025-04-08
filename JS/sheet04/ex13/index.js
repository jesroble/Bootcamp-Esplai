let button = document.getElementById("button");
let divs = document.querySelectorAll(".caja");

button.addEventListener("click", () => {
    divs.forEach((div) => {
        div.classList.toggle("activo");
    });
});