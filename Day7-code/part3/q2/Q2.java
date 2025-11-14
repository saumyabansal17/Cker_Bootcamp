import java.util.Scanner;

class MathUtils {
    static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    static int min(int a, int b) {
        return (a < b) ? a : b;
    }

    static double average(int a, int b) {
        return (a + b) / 2.0;
    }
}

public class Q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int x = sc.nextInt();

        System.out.print("Enter second number: ");
        int y = sc.nextInt();

        System.out.println("Max: " + MathUtils.max(x, y));
        System.out.println("Min: " + MathUtils.min(x, y));
        System.out.printf("Average: %.2f", MathUtils.average(x, y));
    }
}
