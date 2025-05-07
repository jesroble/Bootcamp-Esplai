package ex04;
import java.util.Scanner;

public class Condicionales 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Número: ");
        int i = scanner.nextInt();

        if (i == 0)
            System.out.println("Es cero");
        else if (i < 0)
            System.out.println("\nEs negativo");
        else if (i > 0)
            System.out.println("\nEs positivo");
        
        scanner.close();
    }
}
