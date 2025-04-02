let texto = document.getElementById("texto");

texto.addEventListener("mouseover", () => {
    texto.style.backgroundColor = "red";
    texto.textContent = "¿Qué haces?";
})

texto.addEventListener("mouseout", () => {
    texto.style.backgroundColor = "rgb(18, 212, 18)";
    texto.textContent = "No me pases por encima";
})