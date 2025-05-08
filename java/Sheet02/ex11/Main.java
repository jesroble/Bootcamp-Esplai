package ex11;

enum EstadoCivil {
    SOLTERO,
    CASADO,
    DIVORCIADO,
    VIUDO
}

class Persona 
{
    private String nombre;
    private int edad;
    private EstadoCivil estadoCivil;

    public Persona(String nombre, int edad, EstadoCivil estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public EstadoCivil getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(EstadoCivil estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public void mostrarDetalles() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Estado Civil: " + estadoCivil);
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Persona persona1 = new Persona("Jose", 20, EstadoCivil.SOLTERO);
        Persona persona2 = new Persona("Ana", 30, EstadoCivil.CASADO);

        persona1.mostrarDetalles();
        System.out.println("---------------");
        persona2.mostrarDetalles();
    }
}
