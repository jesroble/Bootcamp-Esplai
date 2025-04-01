let button = document.getElementById("button");
let input = document.getElementById("input");
let list = document.getElementById("list");

button.addEventListener("click", () =>{
    let text = input.value;

    if (text.trim() !== "")
    {
        let li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        input.value = "";
    }
    else
        alert("El texto no puede estar vacío");
});