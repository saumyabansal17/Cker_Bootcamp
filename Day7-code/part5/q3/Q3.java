import java.util.*;

public class Q3 {

    void m1() {
        try {
            m2();
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }finally{
            System.out.println("Process completed");
        }
    }

    void m2() {
        try {
            m3();
        } catch (ArithmeticException e) {
            System.out.println("Exception thrown by m2 to m1");
            throw e;
        }
    }

    void m3() {
        try {
            int a = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception thrown by m3 to m2");
            throw e;
        }
    }

    public static void main(String[] args) {
        Q3 obj = new Q3();
        obj.m1();
    }
}