package ex04;
import java.util.ArrayList;
import java.util.List;

class Persona 
{
    private String nombre;
    private int edad;
    
    public Persona(String nombre, int edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre()
    {
        return nombre;
    }

    public int getEdad()
    {
        return edad;
    }

    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }

    public void setEdad(int edad)
    {
        this.edad = edad;
    }

    public void datosPersona()
    {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " +  edad);
    }
}

class Estudiante extends Persona
{
    private String grado;

    public Estudiante(String nombre, int edad, String grado)
    {
        super(nombre, edad); 
        this.grado = grado;
    }

    public String getGrado()
    {
        return grado;
    }

    public void setGrado(String grado)
    {
        this.grado = grado;
    }

    @Override
    public void datosPersona()
    {
        super.datosPersona();
        System.out.println("Grado: " + grado);
    }
}

public class Empleado extends Persona
{
    private double salario;

    public Empleado(String nombre, int edad, double salario)
    {
        super(nombre, edad);
        this.salario = salario;
    }

    public double getSalario()
    {
        return salario;
    }

    public void setSalario(double salario)
    {
        this.salario = salario;
    }

    @Override
    public void datosPersona()
    {
        super.datosPersona();
        System.out.println("Salario: " + salario);
    }

    public static void main(String[] args)
    {
        List<Persona> personas = new ArrayList<>();

        personas.add(new Estudiante("Ana", 20, "Ingeniería"));
        personas.add(new Empleado("Carlos", 30, 2500.50));
        personas.add(new Estudiante("Luis", 22, "Medicina"));
        personas.add(new Empleado("María", 40, 3000.75));

        for (Persona persona : personas)
        {
            persona.datosPersona();
            System.out.println("------------------");
        }
    }
}
