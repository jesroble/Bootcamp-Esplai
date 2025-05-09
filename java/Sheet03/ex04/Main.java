package ex04;

import java.util.HashMap;

public class Main
{
    public static void main(String[] args)
    {
        HashMap<String, Integer> map = new HashMap<>();
        
        map.put("Ana", 30);
        map.put("Luis", 35);
        map.put("Juan", 25);

        System.out.println("Mapa cpmpleto: " + map + "\n");

        System.out.println("Valor por su clave (Ana): " + map.get("Ana") + "\n");

        System.out.println("Mapa iterando:");
        for (String key : map.keySet())
            System.out.println("Clave: " + key + ", Valor: " + map.get(key));
    }
}
