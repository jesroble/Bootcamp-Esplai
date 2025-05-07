package ex09;
import java.util.Scanner;

public class Datos 
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Nombre de usuario: ");
        String usuario = scanner.nextLine();

        System.out.println("¡Bienvenido " + usuario + "!");

        scanner.close();
    }    
}
