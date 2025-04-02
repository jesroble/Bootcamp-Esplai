function Randomizer(num1, num2)
{
    let result = Math.round(Math.random() * (num2 - num1) + num1);
    return result;
}

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let button = document.getElementById("button");
let text = document.getElementById("text");

button.addEventListener("click", () => 
{
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);

    if (isNaN(num1) || isNaN(num2)) 
    {
        text.textContent = "Introduce números válidos";
        return;
    }

    if (num1 > num2) 
    {
        text.textContent = "El número mínimo no puede ser mayor que el número máximo";
        return;
    }

    let result = Randomizer(num1, num2);
    text.textContent = "El número aleatorio es: " + result;
});