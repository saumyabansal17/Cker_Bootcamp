import java.util.*;

public class q4 {
    public static Map<Integer, Integer> twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        Map<Integer, Integer> pairs = new HashMap<>();

        for (int num : nums) {
            int diff = target - num;
            if (map.containsKey(diff)) {
                pairs.put(diff, num); 
            }
            map.put(num, 1); 
        }
        return pairs;
    }

    public static void main(String[] args) {
        int[] nums = {2, 3, 6, 7, 11, 15};
        int target = 9;

        Map<Integer, Integer> result = twoSum(nums, target);

        if (result.isEmpty()) {
            System.out.println("No pairs found");
        } else {
            System.out.println("Pairs that add up to " + target + ":");
            for (Map.Entry<Integer, Integer> entry : result.entrySet()) {
                System.out.println(entry.getKey() + " + " + entry.getValue() + " = " + target);
                break;
            }
        }
    }
}
