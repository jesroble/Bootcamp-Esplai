class Persona
{
    constructor(nombre, edad, profesion)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar()
    {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y 
            mi profesión es ${this.profesion}\n`);
    }
    despedirse()
    {
        console.log(`Adios, recuerda que soy ${this.nombre}\n`)
    }
}

let persona1 = new Persona("Juan", 25, "ingeniero");
let persona2 = new Persona("María", 30, "bióloga");

persona1.saludar();
persona2.saludar();

persona1.despedirse();
persona2.despedirse();