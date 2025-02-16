import java.util.Arrays;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        int[] res = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int diff = target - nums[i];
            if (map.containsKey(diff)) {
                res[0] = map.get(diff);
                res[1] = i;
                return res;
            }
            map.put(nums[i], i);
        }
        return res;
    }
    
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        int[] res = new int[2];
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    res[0] = i;
                    res[1] = j;
                    return res;
                }
            }
        }
        return new int[]{}; 
    }
}

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test Cases
        int[][] testCases = {
            {2, 7, 11, 15},  // target = 9
            {3, 2, 4},       // target = 6
            {3, 3}           // target = 6
        };

        int[] targets = {9, 6, 6};
        int[][] expectedOutputs = {
            {0, 1}, // Expected output for first case
            {1, 2}, // Expected output for second case
            {0, 1}  // Expected output for third case
        };

        for (int i = 0; i < testCases.length; i++) {
            int[] result = solution.twoSum(testCases[i], targets[i]);
            System.out.println("Input: " + Arrays.toString(testCases[i]) + ", Target: " + targets[i]);
            System.out.println("Output: " + Arrays.toString(result));

            // **Assertion to Fail if Output is Wrong**
            assert Arrays.equals(result, expectedOutputs[i]) : 
                "Test failed for input: " + Arrays.toString(testCases[i]);

            System.out.println("Test passed ✅");
            System.out.println("----------------------------");
        }
    }
}
