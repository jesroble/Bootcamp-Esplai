package ex03;

import java.util.Scanner;

public class OperacionesAritmeticas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce un número entero: ");
        int n1 = scanner.nextInt();
        System.out.println("Introduce el siguiente número: ");
        int n2 = scanner.nextInt();

        System.out.println("\nn1 + n2 = " + (n1 + n2));
        System.out.println("n1 - n2 = " + (n1 - n2));
        System.out.println("n1 / n2 = " + (n1 / n2));
        System.out.println("n1 * n2 = " + (n1 * n2));

        scanner.close();
    }
}
