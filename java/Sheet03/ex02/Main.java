package ex02;

import java.util.ArrayList;

public class Main 
{
    public static void main(String[] args) 
    {
        ArrayList<Integer> list = new ArrayList<>();

        list.add(10);
        list.add(20);
        list.add(30);

        int i = 0;

        for (int num : list)
        {
            i += num;
        }
        System.out.println(i);
    }
}
