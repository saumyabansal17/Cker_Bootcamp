
import java.util.*;
import java.util.concurrent.*;

class SharedBuffer{
    private Queue<Integer> q=new LinkedList<>();
    private int capacity=5;
    public synchronized void producer(int i){
        try{
            while(q.size()==capacity){
                wait();
            }
            q.add(i);
            System.out.println("Produced : "+i);
            
            notify();
        }catch(InterruptedException e){
            e.printStackTrace();
        }
    }

    public synchronized void consumer(){
        try{
            while(q.isEmpty()){
                wait();
            }
            int r=q.remove();
            System.out.println("Consumed :"+r--);
            // flag=true;
            notify();
        }catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}
public class q1 {
    public static void main(String[] args) {
        SharedBuffer obj1=new SharedBuffer();
        ExecutorService t1=Executors.newFixedThreadPool(2);
        t1.submit(() -> {
            for (int i = 1; i <= 50; i++) {
                obj1.producer(i);
                // sleep(100);
            }
        });
        ExecutorService t2=Executors.newFixedThreadPool(2);
        t2.submit(() -> {
            for (int i = 1; i <= 50; i++) {
                obj1.consumer();
            }
        });
        t1.shutdown();
        t2.shutdown();
        
    }
}
