class Car {
    String model;
    double price;

    Car(String model) {
        this.model = model;
    }

    Car(String model, double price) {
        this.model = model;
        this.price = price;
    }

    void display() {
        System.out.println("Car Model: " + model);
        System.out.println("Price: " + price);
    }
}

public class Q2 {
    public static void main(String[] args) {
        Car c1 = new Car("Honda City");
        Car c2 = new Car("Audi", 1450000);

        c1.display();
        c2.display();
    }
}
