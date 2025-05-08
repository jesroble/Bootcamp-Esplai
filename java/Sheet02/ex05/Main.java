package ex05;

import java.util.ArrayList;
import java.util.List;

interface Imprimible
{
    void imprimir();
}

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

class Estudiante extends Persona implements Imprimible
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

    @Override
    public void imprimir()
    {
        System.out.println("Imprimiendo detalles del estudiante:");
        datosPersona();
    }
}

class Empleado extends Persona implements Imprimible
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

    @Override
    public void imprimir()
    {
        System.out.println("Imprimiendo detalles del empleado:");
        datosPersona();
    }
}

public class Main
{
    public static void main(String[] args)
        {
            List<Imprimible> imprimibles = new ArrayList<>();
    
            imprimibles.add(new Estudiante("Ana", 20, "Ingeniería"));
            imprimibles.add(new Empleado("Carlos", 30, 2500.50));
            imprimibles.add(new Estudiante("Luis", 22, "Medicina"));
            imprimibles.add(new Empleado("María", 40, 3000.75));
    
            for (Imprimible imprimible : imprimibles)
            {
                imprimible.imprimir();
                System.out.println("------------------");
            }
    }
}
