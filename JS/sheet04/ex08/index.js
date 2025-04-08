let text = document.getElementById("text");
let button = document.getElementById("toggle");

button.addEventListener("click", () => {
    text.classList.toggle("resaltado");
});