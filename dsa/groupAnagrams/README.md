# Group Anagrams

🔗 [LeetCode Problem](https://leetcode.com/problems/group-anagrams/description/)

## Approach 1 (O(n²))
Here we are sorting each string in the input array and then grouping them by their sorted strings.

### Java Implementation:
```java
import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
         Map<String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sortedString = new String(chars); 

            map.putIfAbsent(sortedString, new ArrayList<>());
            map.get(sortedString).add(str);
        }

        return new ArrayList<>(map.values());
    } 
}
```

### Python Implementation:
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = {}

        for s in strs:
            sorted_str = "".join(sorted(s))

            if sorted_str not in anagram_map:
                anagram_map[sorted_str] = []
            
            anagram_map[sorted_str].append(s)

        return list(anagram_map.values()) 
```

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