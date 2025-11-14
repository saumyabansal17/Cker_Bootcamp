import java.util.*;
import java.util.stream.*;

@FunctionalInterface
interface NumberRule {
    boolean apply(int n);

}

public class Q2 {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList( 3, 10, 15, 8, 21, 14, 7);
        NumberRule isEven = n -> n % 2 == 0;

        NumberRule isPrime = n -> {
            if (n < 2)
                return false;
            for (int i = 2; i < n / 2; i++) {
                if (n % i == 0)
                    return false;
            }
            return true;
        };

        List<Integer> result = nums.stream()
                .filter(n -> isPrime.apply(n) && isEven.apply(n))
                .map(n -> n * n)
                .collect(Collectors.toList());

        System.out.println("Result : " + result);

        Optional<Integer> res = result.stream().findFirst();

        if (res.isPresent()) {
            System.out.println("First Value: " + res);
        } else {
            System.out.println("No matching number found");
        }

    }

}
