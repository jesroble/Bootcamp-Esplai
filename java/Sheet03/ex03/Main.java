package ex03;

import java.util.LinkedList;

public class Main 
{
    public static void main(String[] args)
    {
        LinkedList<String> list = new LinkedList<>();

        list.add("Hola");
        list.add("Mundo");
        list.add("Java");

        list.addFirst("Inicio");
        list.addLast("Final");

        System.out.println(list + "\n"); // imprime la lista

        list.removeFirst();
        list.removeLast();

        for (String element : list) // imprime cada elemento de la lista recorriendola
            System.out.println(element);

        System.out.println("\nSegundo elemento: " + list.get(1)); // accede e imprime el segundo elemento
    }    
}
