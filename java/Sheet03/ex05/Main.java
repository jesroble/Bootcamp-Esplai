package ex05;

import java.util.HashSet;

public class Main 
{
    public static void main(String[] args)
    {
        HashSet<Integer> set = new HashSet<>();
        
        set.add(10);
        set.add(20);
        set.add(30);
        set.add(10); // duplicado

        System.out.println(set + "\n");

        for (Integer num : set)
            System.out.println(num);
    }
}

/* La diferencia entre set y otros tipos de listas es que no guarda los duplicados,
pero no conserva el orden.

Prompt: 20 10 30

Si quisiera que estuvieran ordenados, podria usar LinkedHashSet */