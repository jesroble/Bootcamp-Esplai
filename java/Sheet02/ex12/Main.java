package ex12;

abstract class Animal
{
    public abstract void hacerSonido();
}

class Perro extends Animal
{
    @Override
    public void hacerSonido()
    {
        System.out.println("El perro hace Guau");
    }
}

class Gato extends Animal
{
    @Override
    public void hacerSonido()
    {
        System.out.println("El gato hace Miau");
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Perro perro = new Perro();
        Gato gato = new Gato();

        perro.hacerSonido();
        gato.hacerSonido();
    }
}
