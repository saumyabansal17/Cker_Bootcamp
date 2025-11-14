import java.util.*;

class Customer {
    private int id;
    private String name;
    private String email;

    Customer(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Email: " + email;
    }
}

public class Q1 {
    public static void main(String[] args) {
        List<Customer> customers = new ArrayList<>();

        customers.add(new Customer(1, "Saumya", "saumya@gmail.com"));
        customers.add(new Customer(2, "Riya", "riya@gmail.com"));
        customers.add(new Customer(3, "Amit", "amit@gmail.com"));

        for (Customer c : customers) {
            System.out.println(c);
        }
    }
}
