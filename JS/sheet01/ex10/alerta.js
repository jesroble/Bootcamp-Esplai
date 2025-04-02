let button = document.getElementById("button");
let input = document.getElementById("text");

button.addEventListener("click", () => {
    let texto = input.value;
    console.log(texto);
})