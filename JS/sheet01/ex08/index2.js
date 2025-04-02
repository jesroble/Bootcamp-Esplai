function describirPersona(persona)
{
    for (let dato in persona) {
        console.log(`${dato}: ${persona[dato]}`);
    }
}

let persona = {
    nombre: "Ana",
    edad: "30",
    ciudad: "Madrid"
};

describirPersona(persona);