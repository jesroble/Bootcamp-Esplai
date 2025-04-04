let agregar = document.getElementById("agregar");
let eliminar = document.getElementById("eliminar");
let lista = document.getElementById("lista");

agregar.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Elemento nuevo";
    lista.appendChild(li);
});

eliminar.addEventListener("click", () => {
    if (lista.lastElementChild)
        lista.removeChild(lista.lastElementChild);
});