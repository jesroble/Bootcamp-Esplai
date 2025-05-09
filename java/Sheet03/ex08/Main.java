package ex08;

public class Main 
{
    public static double divide(int num, int den)
    {
        if (den == 0)
            throw new ArithmeticException("Division por cero");
        return (double) num / den;
    }

    public static void main(String[] args)
    {
        try
        {
            int num = 10;
            int den = 0;
            double res = divide(num, den);
            System.out.println("Resultado: " + res);
        }
        catch (ArithmeticException e)
        {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
