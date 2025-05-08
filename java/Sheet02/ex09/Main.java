package ex09;

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

class Empleado extends Persona
{
    private double salario;
    private static int contadorEmpleados = 0;

    public Empleado(String nombre, int edad, double salario)
    {
        super(nombre, edad);
        this.salario = salario;
        contadorEmpleados++; // incrementa el contador cada vez que se cree un objeto Empleado
    }

    public double getSalario()
    {
        return salario;
    }

    public void setSalario(double salario)
    {
        this.salario = salario;
    }

    public static int getContadorEmpleados()
    {
        return contadorEmpleados;
    }

    @Override
    public void datosPersona()
    {
        super.datosPersona();
        System.out.println("Salario: " + salario);
    }
}

class Utilidades
{
    public static boolean esMayorDeEdad(Persona p)
    {
        if (p.getEdad() >= 18)
            return true;
        return false;
    }
}

public class Main
{
    public static void main(String[] args) 
    {
        Empleado empleado1 = new Empleado("Carlos", 30, 2500.50);
        Empleado empleado2 = new Empleado("Ana", 17, 3000.75);

        empleado1.datosPersona();
        System.out.println("\n");
        empleado2.datosPersona();
        System.out.println("\n");

        System.out.println("Empleados totales: " + Empleado.getContadorEmpleados());
        System.out.println("\n");

        System.out.println(empleado1.getNombre() + " es mayor de edad: " + Utilidades.esMayorDeEdad(empleado1));
        System.out.println(empleado2.getNombre() + " es mayor de edad: " + Utilidades.esMayorDeEdad(empleado2));
    }
}
