package ex10;

public class Main 
{
    public static void main(String[] args)
    {
        Thread thread = new Thread(() -> {
            for (int i = 1; i <= 5; i++)
            {
                try
                {
                    System.out.println(i);
                    Thread.sleep(1000);
                }
                catch (InterruptedException e)
                {
                    System.out.println("El hilo fue interrumpido");
                }
            }
        });
        thread.start();
    }    
}
