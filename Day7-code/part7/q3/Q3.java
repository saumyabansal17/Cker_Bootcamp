import java.util.*;

class InvalidPriceException extends Exception {
    InvalidPriceException(String msg) {
        super(msg);
    }
}

class Product {
    private int id;
    private String name;
    private double price;

    public Product(int id, String name, double price) throws InvalidPriceException {
        if (price < 0)
            throw new InvalidPriceException("Price cannot be negative");
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String toString() {
        return "Product ID: " + id + "\nProduct Name: " + name + "\nPrice: " + price + "\n";
    }
}

public class Q3 {
    public static void main(String[] args) {
        try {
            Product p1 = new Product(101, "Laptop", 55000);
            Product p2 = new Product(102, "Mouse", 800);
            Product p3 = new Product(103, "Keyboard", 1200);
            Product p4 = new Product(104, "Monitor", -3000);

            List<Product> products = Arrays.asList(p1, p2, p3);
            for (Product p : products) {
                System.out.println(p);
            }

        } catch (InvalidPriceException e) {
            System.out.println(e.getMessage());
        }

        System.out.println("Process completed");
    }
}
