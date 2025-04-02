function Randomizer(num1, num2) {
    return Math.round(Math.random() * (num2 - num1) + num1);
}

let n = document.getElementById("usern");
let button = document.getElementById("button");
let text = document.getElementById("text");
let machinen = Randomizer(1, 100);

button.addEventListener("click", () => {
    let usern = parseFloat(n.value);

    if (isNaN(usern) || usern < 1 || usern > 100) {
        text.textContent = "Introduce un número válido";
        text.style.color = "orange";
        return;
    }

    if (usern < machinen) 
    {
        text.textContent = "El número es mayor";
        text.style.color = "red";
    } else if (usern > machinen) 
    {
        text.textContent = "El número es menor";
        text.style.color = "red";
    } else 
    {
        text.textContent = "¡Acertaste el número!: " + machinen;
        text.style.color = "green";
        machinen = Randomizer(1, 100);
    }

    n.value = "";
});