# Two Sum

🔗 [LeetCode Problem](https://leetcode.com/problems/two-sum/description/)

## How to Run
```sh
javac Main.java
java -ea Main  # -ea enables assertions
```
The `-ea` flag enables assertions to ensure correctness.

```sh
python3 Main.py
```
---

## Brute Force Approach (O(n²))
This approach uses a **nested loop** to check every possible pair:

```java
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
```

```python
def twoSum(self, nums, target):
    n = len(nums) 
    
    for i in range(n): 
        for j in range(i + 1, n): 
            if nums[i] + nums[j] == target:
                return [i, j] 
    
    return []
```

### Complexity Analysis
- **Time Complexity:** O(n²) – Since we check every pair, it is inefficient for large inputs.  
- **Space Complexity:** O(1) – No extra space is used.

---

## Optimized Approach (O(n))
This solution uses a **HashMap** to store visited numbers, reducing the time complexity to **O(n)**.

```java
import java.util.HashMap;

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
```

```python
def twoSum(self, nums, target):
    mp = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in mp:
            return [i, mp[diff]]
        mp[num] = i

    return []
```
### Complexity Analysis
- **Time Complexity:** O(n) – We traverse the array once, using constant-time lookups in HashMap.  
- **Space Complexity:** O(n) – The HashMap stores up to `n` elements in the worst case.  

---

### 🚀 Key Takeaways
✅ **Brute Force** is simple but inefficient for large arrays.  
✅ **Optimized Approach** drastically improves performance using **HashMap**.  
✅ **Always prefer O(n) solutions** when dealing with large input sizes.  


