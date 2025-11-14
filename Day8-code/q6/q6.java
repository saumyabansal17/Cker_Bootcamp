class Table{
    boolean flag=true;
    public synchronized void tableof2(int i){
        try{
            while(!flag){
                wait();
            }
            System.out.println("2 X "+i+" = "+2*i);
            flag=false;
            
            notify();
        }catch(InterruptedException e){
            System.out.println("t2");
        }
    }

    public synchronized void tableof4(int i){
        try{
            while(flag){
                wait();
            }
            System.out.println("4 X "+i+" = "+4*i);
            flag=true;
            notify();
        }catch(InterruptedException e){
            System.out.println("t2");
        }
    }
}
public class q6 {
    public static void main(String[] args) {
        Table obj1=new Table();
        Thread t1=new Thread(new Runnable() {
            @Override
            public void run(){
                for(int i=1;i<=10;i++){
                    obj1.tableof2(i);
                }
            }
        });
        Thread t2=new Thread(new Runnable() {
            @Override
            public void run(){
                for(int i=1;i<=10;i++){
                    obj1.tableof4(i);
                }
            }
        });
        t1.start();
        t2.start();
    }
}
