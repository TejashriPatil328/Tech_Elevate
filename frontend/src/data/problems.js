export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },


  "best-time-to-buy-and-sell-stock": {
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Greedy",
  description: {
    text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
    notes: [
      "Choose a single day to buy one stock and choose a different day in the future to sell that stock.",
      "Return the maximum profit you can achieve.",
      "If you cannot achieve any profit, return 0."
    ],
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 5."
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "No transaction is done and the maximum profit is 0."
    }
  ],
  constraints: [
    "1 ≤ prices.length ≤ 10⁵",
    "0 ≤ prices[i] ≤ 10⁴"
  ],
  starterCode: {
    javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
    python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
  },
  expectedOutput: {
    javascript: "5\n0",
    python: "5\n0",
    java: "5\n0",
  },
},


"valid-anagram": {
  id: "valid-anagram",
  title: "Valid Anagram",
  difficulty: "Easy",
  category: "String • Hash Table • Sorting",
  description: {
    text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    notes: [
      "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.",
      "Both strings contain only lowercase English letters."
    ],
  },
  examples: [
    {
      input: 's = "anagram", t = "nagaram"',
      output: "true",
      explanation: '"nagaram" can be formed by rearranging the letters of "anagram".'
    },
    {
      input: 's = "rat", t = "car"',
      output: "false",
      explanation: '"car" cannot be formed by rearranging the letters of "rat".'
    }
  ],
  constraints: [
    "1 ≤ s.length, t.length ≤ 5 * 10⁴",
    "s and t consist of lowercase English letters"
  ],
  starterCode: {
    javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,

    python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,

    java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car"));         // Expected: false
    }
}`,
  },

  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
  },
},


"remove-duplicates-from-sorted-array": {
  id: "remove-duplicates-from-sorted-array",
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
    notes: [
      "The relative order of the elements should be kept the same.",
      "Return the number of unique elements k.",
      "The first k elements of nums should contain the unique values."
    ],
  },
  examples: [
    {
      input: "nums = [1,1,2]",
      output: "2, nums = [1,2,_]",
      explanation: "The function should return k = 2, with the first two elements of nums being 1 and 2."
    },
    {
      input: "nums = [0,0,1,1,1,2,2,3,3,4]",
      output: "5, nums = [0,1,2,3,4,_,_,_,_,_]",
      explanation: "The function should return k = 5, with the first five elements containing unique values."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 3 * 10⁴",
    "-100 ≤ nums[i] ≤ 100",
    "nums is sorted in non-decreasing order"
  ],
  starterCode: {
    javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}

// Test cases
let nums1 = [1,1,2];
console.log(removeDuplicates(nums1)); // Expected: 2

let nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2)); // Expected: 5`,

    python: `def removeDuplicates(nums):
    # Write your solution here
    pass

# Test cases
nums1 = [1,1,2]
print(removeDuplicates(nums1))  # Expected: 2

nums2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(nums2))  # Expected: 5`,

    java: `import java.util.*;

class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        int[] nums1 = {1,1,2};
        System.out.println(removeDuplicates(nums1)); // Expected: 2

        int[] nums2 = {0,0,1,1,1,2,2,3,3,4};
        System.out.println(removeDuplicates(nums2)); // Expected: 5
    }
}`,
  },

  expectedOutput: {
    javascript: "2\n5",
    python: "2\n5",
    java: "2\n5",
  },
},


"find-minimum-in-rotated-sorted-array": {
  id: "find-minimum-in-rotated-sorted-array",
  title: "Find Minimum in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Array • Binary Search",
  description: {
    text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums, return the minimum element of this array.",
    notes: [
      "You must write an algorithm that runs in O(log n) time."
    ],
  },
  examples: [
    {
      input: "nums = [3,4,5,1,2]",
      output: "1",
      explanation: "The original array was [1,2,3,4,5] rotated 3 times."
    },
    {
      input: "nums = [4,5,6,7,0,1,2]",
      output: "0",
      explanation: "The minimum element is 0."
    },
    {
      input: "nums = [11,13,15,17]",
      output: "11",
      explanation: "The array was not rotated, so the first element is the minimum."
    }
  ],
  constraints: [
    "n == nums.length",
    "1 ≤ n ≤ 5000",
    "-5000 ≤ nums[i] ≤ 5000",
    "All integers of nums are unique",
    "nums is sorted and rotated between 1 and n times"
  ],
  starterCode: {
    javascript: `function findMin(nums) {
  // Write your solution here
  
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,

    python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,

    java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
  },

  expectedOutput: {
    javascript: "1\n0\n11",
    python: "1\n0\n11",
    java: "1\n0\n11",
  },
},


"longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window • Hash Table",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "A substring is a contiguous sequence of characters within a string.",
      "You need to find the longest substring that contains no duplicate characters."
    ],
  },
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: "The answer is 'abc', with the length of 3."
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: "The answer is 'b', with the length of 1."
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: "The answer is 'wke', with the length of 3."
    }
  ],
  constraints: [
    "0 ≤ s.length ≤ 5 * 10⁴",
    "s consists of English letters, digits, symbols and spaces"
  ],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,

    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,

    java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
  },

  expectedOutput: {
    javascript: "3\n1\n3",
    python: "3\n1\n3",
    java: "3\n1\n3",
  },
},


"longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window • Hash Table",
  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "A substring is a contiguous sequence of characters within a string.",
      "You need to find the longest substring that contains no duplicate characters."
    ],
  },
  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation: "The answer is 'abc', with the length of 3."
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation: "The answer is 'b', with the length of 1."
    },
    {
      input: 's = "pwwkew"',
      output: "3",
      explanation: "The answer is 'wke', with the length of 3."
    }
  ],
  constraints: [
    "0 ≤ s.length ≤ 5 * 10⁴",
    "s consists of English letters, digits, symbols and spaces"
  ],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,

    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,

    java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
  },

  expectedOutput: {
    javascript: "3\n1\n3",
    python: "3\n1\n3",
    java: "3\n1\n3",
  },
},


"find-first-and-last-position-of-element-in-sorted-array": {
  id: "find-first-and-last-position-of-element-in-sorted-array",
  title: "Find First and Last Position of Element in Sorted Array",
  difficulty: "Medium",
  category: "Array • Binary Search",
  description: {
    text: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.",
    notes: [
      "If target is not found in the array, return [-1, -1].",
      "You must write an algorithm with O(log n) runtime complexity."
    ],
  },
  examples: [
    {
      input: "nums = [5,7,7,8,8,10], target = 8",
      output: "[3,4]",
      explanation: "The first occurrence of 8 is at index 3 and the last occurrence is at index 4."
    },
    {
      input: "nums = [5,7,7,8,8,10], target = 6",
      output: "[-1,-1]",
      explanation: "6 is not present in the array."
    },
    {
      input: "nums = [], target = 0",
      output: "[-1,-1]",
      explanation: "The array is empty."
    }
  ],
  constraints: [
    "0 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
    "nums is a non-decreasing array",
    "-10⁹ ≤ target ≤ 10⁹"
  ],
  starterCode: {
    javascript: `function searchRange(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchRange([5,7,7,8,8,10], 8)); // Expected: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Expected: [-1,-1]
console.log(searchRange([], 0)); // Expected: [-1,-1]`,

    python: `def searchRange(nums, target):
    # Write your solution here
    pass

# Test cases
print(searchRange([5,7,7,8,8,10], 8))  # Expected: [3,4]
print(searchRange([5,7,7,8,8,10], 6))  # Expected: [-1,-1]
print(searchRange([], 0))              # Expected: [-1,-1]`,

    java: `import java.util.*;

class Solution {
    public static int[] searchRange(int[] nums, int target) {
        // Write your solution here
        
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(searchRange(new int[]{5,7,7,8,8,10}, 8))); 
        // Expected: [3,4]

        System.out.println(Arrays.toString(searchRange(new int[]{5,7,7,8,8,10}, 6))); 
        // Expected: [-1,-1]

        System.out.println(Arrays.toString(searchRange(new int[]{}, 0))); 
        // Expected: [-1,-1]
    }
}`,
  },

  expectedOutput: {
    javascript: "[3,4]\n[-1,-1]\n[-1,-1]",
    python: "[3, 4]\n[-1, -1]\n[-1, -1]",
    java: "[3, 4]\n[-1, -1]\n[-1, -1]",
  },
},

"search-in-rotated-sorted-array": {
  id: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Array • Binary Search",
  description: {
    text: "There is an integer array nums sorted in ascending order (with distinct values). Before being passed to your function, nums is rotated at an unknown pivot. Given the rotated array nums and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    notes: [
      "You must write an algorithm with O(log n) runtime complexity.",
      "All values of nums are unique."
    ],
  },
  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation: "The value 0 is present at index 4."
    },
    {
      input: "nums = [4,5,6,7,0,1,2], target = 3",
      output: "-1",
      explanation: "The value 3 does not exist in nums."
    },
    {
      input: "nums = [1], target = 0",
      output: "-1",
      explanation: "The target is not present."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 5000",
    "-10⁴ ≤ nums[i] ≤ 10⁴",
    "All values of nums are unique",
    "nums is sorted and rotated",
    "-10⁴ ≤ target ≤ 10⁴"
  ],
  starterCode: {
    javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(search([1], 0)); // Expected: -1`,

    python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1
print(search([1], 0))              # Expected: -1`,

    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); 
        // Expected: 4

        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); 
        // Expected: -1

        System.out.println(search(new int[]{1}, 0)); 
        // Expected: -1
    }
}`,
  },

  expectedOutput: {
    javascript: "4\n-1\n-1",
    python: "4\n-1\n-1",
    java: "4\n-1\n-1",
  },
},


"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Array • Two Pointers • Dynamic Programming",
  description: {
    text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    notes: [
      "The amount of water trapped between bars depends on the maximum height on the left and right sides.",
      "Return the total amount of trapped water."
    ],
  },
  examples: [
    {
      input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6",
      explanation: "The elevation map traps 6 units of rain water."
    },
    {
      input: "height = [4,2,0,3,2,5]",
      output: "9",
      explanation: "The elevation map traps 9 units of rain water."
    }
  ],
  constraints: [
    "n == height.length",
    "1 ≤ n ≤ 2 * 10⁴",
    "0 ≤ height[i] ≤ 10⁵"
  ],
  starterCode: {
    javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,

    python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))               # Expected: 9`,

    java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        // Expected: 6

        System.out.println(trap(new int[]{4,2,0,3,2,5}));
        // Expected: 9
    }
}`,
  },

  expectedOutput: {
    javascript: "6\n9",
    python: "6\n9",
    java: "6\n9",
  },
},

"burst-balloons": {
  id: "burst-balloons",
  title: "Burst Balloons",
  difficulty: "Hard",
  category: "Array • Dynamic Programming • Interval DP",
  description: {
    text: "You are given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by nums. You must burst all balloons. If you burst the ith balloon, you will get nums[i-1] * nums[i] * nums[i+1] coins.",
    notes: [
      "After a balloon is burst, the remaining balloons close the gap.",
      "If there is no balloon on the left or right, treat it as having a value of 1.",
      "Return the maximum coins you can collect by bursting the balloons wisely."
    ],
  },
  examples: [
    {
      input: "nums = [3,1,5,8]",
      output: "167",
      explanation: "Bursting balloons in order 1,5,3,8 gives maximum coins."
    },
    {
      input: "nums = [1,5]",
      output: "10",
      explanation: "The maximum coins collected is 10."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 300",
    "0 ≤ nums[i] ≤ 100"
  ],
  starterCode: {
    javascript: `function maxCoins(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxCoins([3,1,5,8])); // Expected: 167
console.log(maxCoins([1,5])); // Expected: 10`,

    python: `def maxCoins(nums):
    # Write your solution here
    pass

# Test cases
print(maxCoins([3,1,5,8]))  # Expected: 167
print(maxCoins([1,5]))      # Expected: 10`,

    java: `class Solution {
    public static int maxCoins(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxCoins(new int[]{3,1,5,8}));
        // Expected: 167

        System.out.println(maxCoins(new int[]{1,5}));
        // Expected: 10
    }
}`,
  },

  expectedOutput: {
    javascript: "167\n10",
    python: "167\n10",
    java: "167\n10",
  },
},


};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
