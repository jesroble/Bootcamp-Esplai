package ex11;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class Main
{
    public static void main(String[] args)
    {
        List<String> palabras = new ArrayList<>();

        palabras.add("Banana");
        palabras.add("Apple");
        palabras.add("Cherry");

        Collections.sort(palabras, (a, b) -> a.compareTo(b));
        System.out.println(palabras);
    }
}
