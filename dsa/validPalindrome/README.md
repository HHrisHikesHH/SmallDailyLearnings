#  Valid Palindrome

🔗 [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/description/)

## Brute Force Approach (O(n))
This approach creates a filtered string containing only alphanumeric characters and checks if it matches its reverse.

### Complexity Analysis
- **Time Complexity:** O(n) – Since we iterate through the string once.
- **Space Complexity:** O(n) – Due to storing the filtered string.

---

## Optimized Approach (O(n))
This approach provides two solutions: one using extra space with a StringBuilder, and another using two pointers to check for palindrome validity in-place.

### Java Implementation (Using Extra Space):
```java
class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isLetterOrDigit(ch))
                sb.append(Character.toLowerCase(ch));
        }

        return sb.toString().equals(sb.reverse().toString());
    }
}
```

### Java Implementation (Two Pointers, No Extra Space):
```java
class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```

### Python Implementation (Using Extra Space):
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = ''.join(ch.lower() for ch in s if ch.isalnum())  
        return filtered == filtered[::-1]
```

### Python Implementation (Two Pointers, No Extra Space):
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
            
            if s[left].lower() != s[right].lower():
                return False
            
            left += 1
            right -= 1
        
        return True
```
### Complexity Analysis
- **Time Complexity:** O(n) – We traverse the string once.
- **Space Complexity:** O(1) – No extra space is used apart from variables.

---

### 🚀 Key Takeaways
✅ **Brute Force** approach filters and reverses the string, requiring extra space.
✅ **Optimized Approach** (Two Pointers) checks characters in place, making it more efficient.
✅ **Handles Unicode characters and ignores non-alphanumeric symbols.**

