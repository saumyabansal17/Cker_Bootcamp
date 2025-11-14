import java.util.Scanner;

class Calculator {
    double add(double a, double b) {
        return a + b;
    }

    double subtract(double a, double b) {
        return a - b;
    }

    double multiply(double a, double b) {
        return a * b;
    }

    double divide(double a, double b) {
        if (b == 0) {
            System.out.println("Denominator can not be zero");
            return 0;
        }
        return a / b;
    }
}

public class Q1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calculator c= new Calculator();

        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        System.out.println("\nAddition: " + c.add(num1, num2));
        System.out.println("Subtraction: " + c.subtract(num1, num2));
        System.out.println("Multiplication: " + c.multiply(num1, num2));
        System.out.printf("Division: %.2f\n", c.divide(num1, num2));
    }
}
