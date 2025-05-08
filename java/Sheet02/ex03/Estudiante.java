package ex03;

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

    public static void main(String[] args)
    {
        Estudiante estudiante = new Estudiante("Ana", 20, "Ingeniería");

        estudiante.datosPersona();
    }
}