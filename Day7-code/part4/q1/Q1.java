class Book {
    String title;
    String author;
    double price;

    Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    void display() {
        System.out.println("Book Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: " + price);
    }
}

public class Q1 {
    public static void main(String[] args) {
        Book b1 = new Book("Atomic Habits", "James Clear",450);
        b1.display();
    }
}
