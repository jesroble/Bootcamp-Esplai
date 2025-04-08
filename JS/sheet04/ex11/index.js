let lista = document.querySelector(".tareas");

lista.addEventListener("click", (event) => {
    if (event.target.tagName == "LI")
    {
        document.querySelectorAll(".tareas li").forEach((li) => {
            li.classList.remove("seleccionado");
        });
        event.target.classList.add("seleccionado");
    }
});