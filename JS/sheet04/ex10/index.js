let text = document.getElementById("direccion");
let email = document.getElementById("correo");
let form = document.getElementById("formulario");

text.addEventListener("input", () => {
    if (text.value.trim() == "")
    {
        text.setCustomValidity("Este campo debe estar relleno");
        text.classList.add("error");
        text.classList.remove("exito");
    }
    else
    {
        text.setCustomValidity("");
        text.classList.add("exito");
        text.classList.remove("error");
    }
});

email.addEventListener("input", () => {
    if (email.value.trim() == "")
    {
        email.setCustomValidity("Este campo debe estar relleno");
        email.classList.add("error");
        email.classList.remove("exito");
    }
    else
    {
        email.setCustomValidity("");
        email.classList.add("exito");
        email.classList.remove("error");
    }
});

form.addEventListener("submit", (event) => {
    if (!text.checkValidity() || !email.checkValidity())
        event.preventDefault();
});