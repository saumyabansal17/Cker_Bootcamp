import java.util.Scanner;

public class Q3{
    static int factorial(int n){
        int ans=1;
        for(int i=1;i<=n;i++){
            ans*=i;
        }
        return ans;
    }

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number : ");
        int n=sc.nextInt();

        System.out.println("Factorial of "+n+" :"+factorial(n));
    }
}