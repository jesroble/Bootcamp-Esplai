package ex08;
import java.util.Scanner;

public class Palindromo 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Escribe: ");
        String cadena = scanner.nextLine();

        System.out.println(es_palindromo(cadena));
        scanner.close();
    }

    public static String es_palindromo(String cadena)
    {
        cadena = cadena.replaceAll("\\s+", "").toLowerCase();
        int i = cadena.length() - 1;

        for (int j = 0; j < i / 2; j++)
        {
            if (cadena.charAt(j) != cadena.charAt(i - j))
                return ("No es palíndromo");
        }
        return ("Es palíndromo");
    }
}
   
