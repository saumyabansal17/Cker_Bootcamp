import java.util.Scanner;

class BankAccount {
    String accountNumber;
    String holderName;
    double balance;

    BankAccount(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

}

public class Q3{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Account Number: ");
        String acc = sc.nextLine();

        System.out.print("Enter Account Holder Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Initial Balance: ");
        double b = sc.nextDouble();

        BankAccount account = new BankAccount(acc, name, b);

    }
}
