# Contains Duplicate

🔗 [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/description/)

## Brute Force Approach (O(n²))
A naive approach to solve this problem is using **two nested loops** to compare every pair of elements.

### Complexity Analysis
- **Time Complexity:** O(n²) – Since we check every pair, it is inefficient for large inputs.  
- **Space Complexity:** O(1) – No extra space is used.

---

## Optimized Approach (O(n))
This solution uses a **HashSet** to store visited numbers, reducing the time complexity to **O(n)**.

### Java Implementation:
```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int num : nums){
            if(!set.contains(num))
                set.add(num);
            else return true;
        }
        return false;
    }
}
```

### Python Implementation:
```python
class Solution(object):
    def containsDuplicate(self, nums):
        return len(set(nums)) != len(nums)
```

### Complexity Analysis
- **Time Complexity:** O(n) – We traverse the array once, using constant-time lookups in HashSet.  
- **Space Complexity:** O(n) – The HashSet stores up to `n` elements in the worst case.  

---

### 🚀 Key Takeaways
✅ **Brute Force** is simple but inefficient for large arrays.  
✅ **Optimized Approach** drastically improves performance using **HashSet**.  
✅ **Always prefer O(n) solutions** when dealing with large input sizes.  

