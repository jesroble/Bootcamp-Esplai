package ex06;

import java.util.ArrayList;

public class Main
{
    public static void main(String[] args)
    {
        ArrayList<Integer> list = new ArrayList<>();

        list.add(10);
        list.add(13);
        list.add(20);
        list.add(25);
        list.add(27);
        list.add(40);

        System.out.println(list + "\n");

        for (Integer num : list)
        {
            if (num % 2 == 0)
                System.out.println(num);
        }
    }
}
