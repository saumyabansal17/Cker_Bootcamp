import java.util.*;

class InvalidAmountException extends Exception {
    InvalidAmountException(String msg) {
        super(msg);
    }
}

class BankAccount {
    static int count;
    double balance;

    BankAccount() {
        count++;
    }

    BankAccount(double balance) {
        count++;
        this.balance = balance;
    }

    void deposit(double amount) throws InvalidAmountException {
        if (amount <= 0) {
            throw new InvalidAmountException("Amount deposited must be greater than 0");
        }
        balance += amount;
        System.out.println("After Deposit: " + balance);
    }

    void withdraw(double amount) throws InvalidAmountException {
        if (amount <= 0 || amount > balance) {
            throw new InvalidAmountException("Amount withdrawal must be greater than 0 but less than balance");
        }
        balance -= amount;
        System.out.println("After Withdrawal: " + balance);
    }

    double getBalance() {
        return balance;
    }

}

public class Q1 {

    public static void main(String[] args) {
        BankAccount b1 = new BankAccount();
        BankAccount b2 = new BankAccount(2000);
        BankAccount b3 = new BankAccount();
        try {
            b1.deposit(100);
            b1.withdraw(10);
            b2.withdraw(100);
        } catch (InvalidAmountException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("completed");
        System.out.println("Bank Account Created: " + BankAccount.count);
    }
}