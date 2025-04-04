let input = document.getElementById("nombre");
let button = document.getElementById("button");
let text = document.getElementById("error");

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value == "")
    {
        text.style.display = "grid";
        text.style.color = "red";
        text.textContent = "Por favor, rellena el campo";
    }
    else
    text.style.display = "none";
});