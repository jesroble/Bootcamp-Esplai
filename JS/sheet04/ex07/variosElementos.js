let button = document.getElementById("button");
let text = document.querySelectorAll(".caja");

button.addEventListener("click", () => {
    text.forEach((text) => {
        text.style.backgroundColor = "yellow";
    });
});
