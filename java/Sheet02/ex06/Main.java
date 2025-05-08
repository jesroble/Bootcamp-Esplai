package ex06;

class Direccion
{
    private String calle;
    private String ciudad;
    private String codigoPostal;

    public Direccion(String calle, String ciudad, String codigoPostal)
    {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCodigoPostal() {
        return codigoPostal;
    }

    public void setCodigoPostal(String codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    @Override
    public String toString() {
        return "Calle: " + calle + "\nCiudad: " + ciudad + "\nCódigo Postal: " + codigoPostal;
    }
}

class Persona
{
    private String nombre;
    private int edad;
    private Direccion direccion; //relación "tiene-un"

    public Persona(String nombre, int edad, Direccion direccion)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
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

    public Direccion getDireccion() {
        return direccion;
    }

    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }

    public void datosPersona()
    {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println(direccion);
    }
}

public class Main
{
    public static void main(String[] args) 
    {
        Direccion direccion = new Direccion("Jerez Perchet", "Sevilla", "22134");
        Persona persona = new Persona("Juan", 22, direccion);

        persona.datosPersona();
    }
}
