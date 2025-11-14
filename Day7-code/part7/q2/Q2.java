import java.util.*;

class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    double calculateSalary() {
        return 0.0;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Salary: " + calculateSalary();
    }
}

class FullTimeEmployee extends Employee {
    private double monthlySalary;

    FullTimeEmployee(String name, int id, double monthlySalary) {
        super(name, id);
        this.monthlySalary = monthlySalary;
    }

    @Override
    double calculateSalary() {
        return monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    private int hours;
    private double rate;

    PartTimeEmployee(String name, int id, int hours, double rate) {
        super(name, id);
        this.hours = hours;
        this.rate = rate;
    }

    @Override
    double calculateSalary() {
        return hours * rate;
    }
}

public class Q2 {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        employees.add(new FullTimeEmployee("Saumya", 101, 50000));
        employees.add(new PartTimeEmployee("Riya", 102, 80, 200));
        employees.add(new PartTimeEmployee("Amit", 103, 60, 150));

        for (Employee emp : employees) {
            System.out.println(emp);
        }
    }
}
