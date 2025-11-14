import java.util.Scanner;

class Student {
    String name;
    int m1, m2, m3;

    int total() {
        return m1 + m2 + m3;
    }

    double average() {
        return total() / 3;
    }
}

public class Q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student s = new Student();

        System.out.print("Enter student name: ");
        s.name = sc.nextLine();

        System.out.print("Enter marks in 3 subjects: ");
        s.m1 = sc.nextInt();
        s.m2 = sc.nextInt();
        s.m3 = sc.nextInt();

        System.out.println("\nStudent Name: " + s.name);
        System.out.println("Total Marks: " + s.total());
        System.out.println("Average Marks: " + s.average());
    }
}
