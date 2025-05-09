package ex07;

public class Main 
{
    public static void main(String[] args)
    {
        String cadena = "123";
        Integer num = Integer.valueOf(cadena);

        num *= 2;
        System.out.println(cadena);
        System.out.println(num);
    }
}
