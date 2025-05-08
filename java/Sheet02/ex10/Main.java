package ex10;

class Caja<T>
{
    private T contenido;

    public void setContenido(T contenido){
        this.contenido = contenido;
    }

    public T getContenido(){
        return contenido;
    }
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

    @Override
    public String toString()
    {
        return nombre + " " + edad;
    }
}

class Utilidades
{
    public static <U> U utilidad(U valor)
    {
        return valor;
    }
}

public class Main 
{
    public static void main(String[] args)
    {
        Caja<Persona> cajaPersona = new Caja<>();
        Persona persona = new Persona("Juan", 20);
        cajaPersona.setContenido(persona);
        System.out.println("Contenido cajaPersona: " + cajaPersona.getContenido());

        Caja<String> cajaString = new Caja<>();
        cajaString.setContenido("Hola mundo");
        System.out.println("Contenido de cajaString: " + cajaString.getContenido());

        String texto = Utilidades.utilidad("Texto generico");
        int numero = Utilidades.utilidad(10);
        System.out.println(texto);
        System.out.println(numero);
    }
}
