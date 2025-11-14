import java.util.*;

public class Q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            int arr[] = new int[2];
            try {
                System.out.print("Enter first number: ");
                arr[0] = sc.nextInt();
                System.out.print("Enter second number: ");
                arr[1] = sc.nextInt();
                int ans = arr[0] / arr[1];
                System.out.println("Result : " + ans);
            } catch (ArithmeticException e) {
                System.out.println("Divisor can not be 0");
            }

            arr[2] = 4;

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Can not assign index out of Array");
        }
        System.out.println("Process completed");

    }
}
