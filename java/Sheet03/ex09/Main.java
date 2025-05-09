package ex09;

import java.util.regex.Pattern;

public class Main 
{

    public static boolean checkEmail(String email)
    {
        String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

        return Pattern.matches(emailRegex, email);
    }

    public static void main(String[] args)
    {
        String email1 = "Jerope2000@gmail.com";

        String email2 = "tralalero tralala, porco dio porco ala";

        System.out.println(checkEmail(email1));
        System.out.println(checkEmail(email2));
    }
}
