import java.util.Scanner;

public class q1{
    static int sum(int num){
        int sum=0;
        while(num>0){
            sum+=(num%10);
            num/=10;
        }
        return sum;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n=sc.nextInt();

        System.out.println("Sum of digits : "+sum(n));
        
    }
}