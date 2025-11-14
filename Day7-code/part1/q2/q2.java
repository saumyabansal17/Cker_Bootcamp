import java.util.Scanner;

public class q2{
    static void multiply(int n){
        for(int i=1;i<=10;i++){
            System.out.println(n+" X "+i+"= "+ n*i);
        }
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number to see multiplication table: ");
        int n=sc.nextInt();

        System.out.println("Multiplication table of "+n+" : \n");
        multiply(n);
    }
}