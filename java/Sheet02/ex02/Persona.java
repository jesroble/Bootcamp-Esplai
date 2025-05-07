package ex02;

class Persona 
{
    private String nombre;
    private int edad;
    
    public Persona(String nombre, int edad) // inicializa atributos
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() //sirve para obtener el nombre si la llamas
    {
        return nombre;
    }

    public int getEdad()
    {
        return edad;
    }

    public void setNombre(String nombre) //sirve para cambiar los atributos de la clase Persona
    {
        this.nombre = nombre;
    }

    public void setEdad(int edad)
    {
        this.edad = edad;
    }

    public void datosPersona() // imprime los atributos
    {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " +  edad);
    }

    public static void main(String[] args)
    {
        Persona persona = new Persona("Juan", 25);

        persona.datosPersona(); // obtiene los primeros datos

        persona.setNombre("Carlos"); // los cambiamos
        persona.setEdad(30);

        persona.datosPersona(); // los volvemos a obtener
    }
}