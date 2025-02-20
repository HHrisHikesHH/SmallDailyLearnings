# Valid Anagram

🔗 [LeetCode Problem](https://leetcode.com/problems/valid-anagram/description/)

## Brute Force Approach (O(n log n))
By sorting both strings and comparing them. Sorting takes **O(n log n)** time complexity.

### Complexity Analysis
- **Time Complexity:** O(n log n) – Due to sorting.
- **Space Complexity:** O(n) – Since sorting might require additional space.

---

## Optimized Approach (O(n))
This approach avoids sorting and instead uses a frequency map to track character counts.

### Java Implementation:
```java
import java.util.*;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<Character, Integer> freqMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            freqMap.put(s.charAt(i), freqMap.getOrDefault(s.charAt(i), 0) + 1);
            freqMap.put(t.charAt(i), freqMap.getOrDefault(t.charAt(i), 0) - 1);
        }

        return freqMap.values().stream().allMatch(value -> value == 0);
    }
}
```

### Python Implementation:
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False

        freq = {}

        for i in range(len(s)):
            freq[s[i]] = freq.get(s[i], 0) + 1
            freq[t[i]] = freq.get(t[i], 0) - 1

        return all(value == 0 for value in freq.values())
```

### Complexity Analysis
- **Time Complexity:** O(n) – We iterate through the strings once.
- **Space Complexity:** O(n) – We store character frequencies in a HashMap.

---

### 🚀 Key Takeaways
✅ **Brute Force** approach (sorting) has a time complexity of **O(n log n)** and uses additional space.
✅ **Optimized Approach** (frequency count) has a time complexity of **O(n)** and efficiently tracks character counts.
✅ **HashMap-based method supports Unicode characters.**

