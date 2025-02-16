import unittest

class Solution(object):
    def twoSum(self, nums, target):
        n = len(nums) 
        
        for i in range(n): 
            for j in range(i + 1, n): 
                if nums[i] + nums[j] == target:
                    return [i, j] 
        
        return []

    def twoSum(self, nums, target):
        mp = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in mp:
                return [i, mp[diff]]
            mp[num] = i

        return []

# Unit tests
class TestTwoSum(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_case_1(self):
        self.assertEqual(self.solution.twoSum([2, 7, 11, 15], 9), [0, 1])

    def test_case_2(self):
        self.assertEqual(self.solution.twoSum([3, 2, 4], 6), [1, 2])

    def test_case_3(self):
        self.assertEqual(self.solution.twoSum([3, 3], 6), [0, 1])

    def test_no_solution(self):
        self.assertEqual(self.solution.twoSum([1, 2, 3], 7), [])

if __name__ == "__main__":
    unittest.main()
