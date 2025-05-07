package ex10;
import java.util.Random;
import java.util.Scanner;
import java.util.random.*;;

public class Numeros 
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int num_a_adivinar = random.nextInt(100) + 1;
        System.out.println("Adivina un número del 1 al 100: ");
        int num_usuario = scanner.nextInt();

        while (!comprobar_numero(num_usuario, num_a_adivinar)) 
        {
            System.out.println("Inténtalo de nuevo: ");
            num_usuario = scanner.nextInt();
        }
        System.out.println("¡Acertaste!");
    }

    public static boolean comprobar_numero(int num_usuario, int num_a_adivinar)
    {
        if (num_a_adivinar < num_usuario)
       {
            System.out.println("El número a advininar es menor");
            return false;
       }
        else if (num_a_adivinar > num_usuario)
        {
            System.out.println("El número a advininar es mayor");
            return false;
        }
        else
            return true;
    }
}
