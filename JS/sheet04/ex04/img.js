let button = document.getElementById("button");
let img = document.getElementById("img");

let img1 = "https://www.educima.com/imagen-alegre-s19863.jpg";
let img2 = "https://www.educima.com/imagen-triste-s19861.jpg";

button.addEventListener("click", () => {
    img.src = img.src == img1 ? img2 : img1;
});