import { problemCatalog } from './problemCatalog.js';
import { golangSolutions } from './solutions/golang.js';
import { javaSolutions } from './solutions/java.js';
import { javascriptSolutions } from './solutions/javascript.js';
import { pythonSolutions } from './solutions/python.js';
import { createVisualization } from './visualizations.js';

const starterProblems = [
  {
    slug: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    category: 'Array / String',
    difficulty: 'Easy',
    summary: 'Merge two sorted arrays in-place, starting from the back of the output array.',
    approach: 'Fill nums1 from right to left. At every step, place the larger of the two current values at the last free position. Moving backward avoids overwriting values in nums1 that have not yet been compared.',
    complexity: { time: 'O(m + n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/merge-sorted-array/',
    solutions: {
      python: `class Solution:
    def merge(self, nums1, m, nums2, n):
        left, right, write = m - 1, n - 1, m + n - 1
        while right >= 0:
            if left >= 0 and nums1[left] > nums2[right]:
                nums1[write] = nums1[left]
                left -= 1
            else:
                nums1[write] = nums2[right]
                right -= 1
            write -= 1`,
      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int left = m - 1, right = n - 1, write = m + n - 1;
        while (right >= 0) {
            if (left >= 0 && nums1[left] > nums2[right]) {
                nums1[write--] = nums1[left--];
            } else {
                nums1[write--] = nums2[right--];
            }
        }
    }
}`,
    },
    visualization: {
      kind: 'merge',
      input: { first: [1, 3, 5, 0, 0, 0], second: [2, 4, 6], firstCount: 3 },
      steps: [
        { left: 2, right: 2, write: 5, message: 'Compare 5 and 6. Place 6 at the final free position.' },
        { left: 2, right: 1, write: 4, message: 'Compare 5 and 4. Place 5 before 6.' },
        { left: 1, right: 1, write: 3, message: 'Compare 3 and 4. Place 4 before 5.' },
        { left: 1, right: 0, write: 2, message: 'Compare 3 and 2. Place 3 before 4.' },
        { left: 0, right: 0, write: 1, message: 'Compare 1 and 2. Place 2 before 3.' },
        { left: 0, right: -1, write: 0, message: 'All values are merged in sorted order.' },
      ],
    },
  },
  {
    slug: 'remove-element',
    title: 'Remove Element',
    category: 'Array / String',
    difficulty: 'Easy',
    summary: 'Remove every occurrence of a value in-place and return the new length.',
    approach: 'Use a write pointer for the next kept value. Scan the array once and copy only values that are not equal to the target.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/remove-element/',
    solutions: {
      python: `class Solution:
    def removeElement(self, nums, val):
        write = 0
        for value in nums:
            if value != val:
                nums[write] = value
                write += 1
        return write`,
      java: `class Solution {
    public int removeElement(int[] nums, int val) {
        int write = 0;
        for (int value : nums) {
            if (value != val) nums[write++] = value;
        }
        return write;
    }
}`,
    },
    visualization: {
      kind: 'array',
      input: [3, 2, 2, 3, 4],
      target: 3,
      steps: [
        { index: 0, write: 0, output: [], message: '3 matches the target. Skip it.' },
        { index: 1, write: 0, output: [2], message: 'Keep 2 at the write position.' },
        { index: 2, write: 1, output: [2, 2], message: 'Keep the next 2.' },
        { index: 3, write: 2, output: [2, 2], message: '3 matches the target. Skip it.' },
        { index: 4, write: 2, output: [2, 2, 4], message: 'Keep 4. The new length is 3.' },
      ],
    },
  },
  {
    slug: 'remove-duplicates-from-sorted-array',
    title: 'Remove Duplicates from Sorted Array',
    category: 'Array / String',
    difficulty: 'Easy',
    summary: 'Keep one copy of each value in a sorted array using constant extra space.',
    approach: 'Because the values are sorted, duplicates are adjacent. Advance a write pointer only when a new value is found.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    solutions: {
      python: `class Solution:
    def removeDuplicates(self, nums):
        if not nums:
            return 0
        write = 1
        for read in range(1, len(nums)):
            if nums[read] != nums[write - 1]:
                nums[write] = nums[read]
                write += 1
        return write`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int write = 1;
        for (int read = 1; read < nums.length; read++) {
            if (nums[read] != nums[write - 1]) {
                nums[write++] = nums[read];
            }
        }
        return write;
    }
}`,
    },
  },
  {
    slug: 'majority-element',
    title: 'Majority Element',
    category: 'Array / String',
    difficulty: 'Easy',
    summary: 'Find the value that appears more than half the time.',
    approach: 'Boyer–Moore voting pairs each candidate occurrence with a different value. Since a majority exists, it cannot be fully cancelled.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/majority-element/',
    solutions: {
      python: `class Solution:
    def majorityElement(self, nums):
        candidate, count = None, 0
        for value in nums:
            if count == 0:
                candidate = value
            count += 1 if value == candidate else -1
        return candidate`,
      java: `class Solution {
    public int majorityElement(int[] nums) {
        int candidate = 0, count = 0;
        for (int value : nums) {
            if (count == 0) candidate = value;
            count += value == candidate ? 1 : -1;
        }
        return candidate;
    }
}`,
    },
  },
  {
    slug: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    category: 'Array / String',
    difficulty: 'Easy',
    summary: 'Maximize one transaction’s profit by buying before selling.',
    approach: 'Track the lowest price seen so far and the best profit from selling at each day’s price.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    solutions: {
      python: `class Solution:
    def maxProfit(self, prices):
        lowest, best = float('inf'), 0
        for price in prices:
            lowest = min(lowest, price)
            best = max(best, price - lowest)
        return best`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        int lowest = Integer.MAX_VALUE, best = 0;
        for (int price : prices) {
            lowest = Math.min(lowest, price);
            best = Math.max(best, price - lowest);
        }
        return best;
    }
}`,
    },
  },
  {
    slug: 'valid-palindrome',
    title: 'Valid Palindrome',
    category: 'Two Pointers',
    difficulty: 'Easy',
    summary: 'Check whether letters and digits read identically in both directions.',
    approach: 'Move two pointers inward, skipping non-alphanumeric characters and comparing lowercase characters.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/valid-palindrome/',
    solutions: {
      python: `class Solution:
    def isPalindrome(self, s):
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
        return True`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
    },
    visualization: {
      kind: 'pointers',
      input: 'A man, a plan, a canal: Panama',
      steps: [
        { left: 0, right: 29, match: true, message: 'Compare a and a; move both pointers inward.' },
        { left: 1, right: 28, match: true, message: 'Skip punctuation, then compare m and m.' },
        { left: 3, right: 26, match: true, message: 'The inward characters match.' },
        { left: 7, right: 23, match: true, message: 'Continue comparing the remaining letters.' },
      ],
    },
  },
  {
    slug: 'two-sum-ii-input-array-is-sorted',
    title: 'Two Sum II — Input Array Is Sorted',
    category: 'Two Pointers',
    difficulty: 'Medium',
    summary: 'Find two values in a sorted array that add up to a target.',
    approach: 'Start at both ends. If the sum is too small, move the left pointer up; if too large, move the right pointer down.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    solutions: {
      python: `class Solution:
    def twoSum(self, numbers, target):
        left, right = 0, len(numbers) - 1
        while left < right:
            total = numbers[left] + numbers[right]
            if total == target:
                return [left + 1, right + 1]
            if total < target:
                left += 1
            else:
                right -= 1`,
      java: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return new int[] {left + 1, right + 1};
            if (sum < target) left++;
            else right--;
        }
        return new int[0];
    }
}`,
    },
  },
  {
    slug: 'container-with-most-water',
    title: 'Container With Most Water',
    category: 'Two Pointers',
    difficulty: 'Medium',
    summary: 'Choose two heights that hold the greatest amount of water.',
    approach: 'Compute the area at the endpoints and move the shorter side inward. Moving the taller side cannot improve the limiting height.',
    complexity: { time: 'O(n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/container-with-most-water/',
    solutions: {
      python: `class Solution:
    def maxArea(self, height):
        left, right, best = 0, len(height) - 1, 0
        while left < right:
            best = max(best, min(height[left], height[right]) * (right - left))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return best`,
      java: `class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1, best = 0;
        while (left < right) {
            best = Math.max(best, Math.min(height[left], height[right]) * (right - left));
            if (height[left] < height[right]) left++;
            else right--;
        }
        return best;
    }
}`,
    },
  },
  {
    slug: 'search-insert-position',
    title: 'Search Insert Position',
    category: 'Binary Search',
    difficulty: 'Easy',
    summary: 'Find the target index, or the position where it belongs in a sorted array.',
    approach: 'Binary search the sorted array. When the loop ends, low is the first index whose value is not less than the target, so it is also the insertion position.',
    complexity: { time: 'O(log n)', space: 'O(1)' },
    sourceUrl: 'https://leetcode.com/problems/search-insert-position/',
    solutions: {
      python: `class Solution:
    def search(self, nums, target):
        low, high = 0, len(nums) - 1
        while low <= high:
            middle = low + (high - low) // 2
            if nums[middle] == target:
                return middle
            if nums[middle] < target:
                low = middle + 1
            else:
                high = middle - 1
        return low`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int middle = low + (high - low) / 2;
            if (nums[middle] == target) return middle;
            if (nums[middle] < target) low = middle + 1;
            else high = middle - 1;
        }
        return low;
    }
}`,
    },
    visualization: {
      kind: 'search',
      input: [-1, 0, 3, 5, 9, 12],
      target: 9,
      steps: [
        { low: 0, high: 5, middle: 2, message: 'Middle value is 3. The target is larger; search the right half.' },
        { low: 3, high: 5, middle: 4, message: 'Middle value is 9. Target found at index 4.' },
      ],
    },
  },
];

const starterContentBySlug = new Map(
  starterProblems.map(({ slug, summary, approach, complexity, solutions, visualization }) => [
    slug,
    { summary, approach, complexity, solutions, visualization },
  ]),
);

export const problems = problemCatalog.map((problem) => {
  const starterContent = starterContentBySlug.get(problem.slug);
  return {
    ...problem,
    ...starterContent,
    solutions: {
      python: pythonSolutions[problem.slug],
      golang: golangSolutions[problem.slug],
      java: javaSolutions[problem.slug],
      javascript: javascriptSolutions[problem.slug],
      ...starterContent?.solutions,
    },
    summary: starterContent?.summary ?? `Practice ${problem.title} from the ${problem.category} collection.`,
    visualization: starterContent?.visualization ?? createVisualization(problem),
    solutionReady: Boolean(
      pythonSolutions[problem.slug]
      && golangSolutions[problem.slug]
      && javaSolutions[problem.slug]
      && javascriptSolutions[problem.slug],
    ),
  };
});

export const catalogProgress = {
  completed: problems.length,
  total: 150,
  solutionsReady: problems.filter((problem) => ['python', 'golang', 'java', 'javascript'].every((language) => problem.solutions?.[language])).length,
  visualizationsReady: problems.filter((problem) => problem.visualization).length,
};
