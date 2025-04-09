let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: titulo,
            body: texto,
        }),
    })
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((datos) => {
            console.log("Respuesta de la API: ", datos);
        });
});