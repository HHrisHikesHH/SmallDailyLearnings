# Product of Array Except Self

🔗 [LeetCode Problem](https://leetcode.com/problems/product-of-array-except-self/description/)

## Brute Force Approach (O(n²))
By using prefix and suffix arrays, we can calculate the product of all elements to the left and right of each index in constant time.

### Java Implementation:
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] pref = new int[n];
        int[] suff = new int[n];
        int[] res = new int[n];

        pref[0] = 1;
        for(int i = 1; i < n; i++){
            pref[i] = nums[i-1] * pref[i-1];
        }

        suff[n - 1] = 1;
        for(int i = n - 2; i >= 0; i--){
            suff[i] = nums[i+1] * suff[i+1];
        }

        for(int i = 0; i < n; i++){
            res[i] = pref[i] * suff[i];
        }
        return res;
    }
}
```

```python
class Solution(object):
    def productExceptSelf(self, nums):
        n = len(nums)
        pref = [1] * n
        suff = [1] * n
        res = [0] * n

        for i in range(1, n):
            pref[i] = nums[i-1] * pref[i-1]

        for i in range(n-2, -1, -1):
            suff[i] = nums[i+1] * suff[i+1]

        for i in range(n):
            res[i] = pref[i] * suff[i]

        return res
```

### Complexity Analysis
- **Time Complexity:** O(n) – Since are not using any nested loops.
- **Space Complexity:** O(n) – we have used two arrays

---

## Optimized Approach (O(n))
This approach avoids the creation of additional arrays. Instead, it modifies the input array itself to store the intermediate results.

### Java Implementation:
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];

        res[0] = 1;
        for(int i = 1; i < n; i++){
            res[i] = res[i - 1] * nums[i - 1];
        }

        int suff = 1;
        for (int i = n - 1; i >= 0; i--) {
            res[i] *= suff;
            suff *= nums[i];
        }

        return res;
    }
}
```

### Python Implementation:
```python
class Solution(object):
    def productExceptSelf(self, nums):
        n = len(nums)
        res = [1] * n

        for i in range(1, n):
            res[i] = res[i - 1] * nums[i - 1]

        suffix = 1
        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]

        return res
```

### Complexity Analysis
- **Time Complexity:** O(n) – Since are not using any nested loops.
- **Space Complexity:** O(1) – No additional space is used apart from the input array.
---

### 🚀 Key Takeaways
✅ **Brute Force** approach has a time complexity of O(n) and uses additional space.  
✅ **Optimized Approach** pproach has a time complexity of O(n) and uses additional no space.  