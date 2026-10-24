const rows = `
Array / String|Merge Sorted Array|Easy
Array / String|Remove Element|Easy
Array / String|Remove Duplicates from Sorted Array|Easy
Array / String|Remove Duplicates from Sorted Array II|Medium
Array / String|Majority Element|Easy
Array / String|Rotate Array|Medium
Array / String|Best Time to Buy and Sell Stock|Easy
Array / String|Best Time to Buy and Sell Stock II|Medium
Array / String|Jump Game|Medium
Array / String|Jump Game II|Medium
Array / String|H-Index|Medium
Array / String|Insert Delete GetRandom O(1)|Medium
Array / String|Product of Array Except Self|Medium
Array / String|Gas Station|Medium
Array / String|Candy|Hard
Array / String|Trapping Rain Water|Hard
Array / String|Roman to Integer|Easy
Array / String|Integer to Roman|Medium
Array / String|Length of Last Word|Easy
Array / String|Longest Common Prefix|Easy
Array / String|Reverse Words in a String|Medium
Array / String|Zigzag Conversion|Medium
Array / String|Find the Index of the First Occurrence in a String|Easy
Array / String|Text Justification|Hard
Two Pointers|Valid Palindrome|Easy
Two Pointers|Is Subsequence|Easy
Two Pointers|Two Sum II - Input Array Is Sorted|Medium
Two Pointers|Container With Most Water|Medium
Two Pointers|3Sum|Medium
Sliding Window|Minimum Size Subarray Sum|Medium
Sliding Window|Longest Substring Without Repeating Characters|Medium
Sliding Window|Substring with Concatenation of All Words|Hard
Sliding Window|Minimum Window Substring|Hard
Matrix|Valid Sudoku|Medium
Matrix|Spiral Matrix|Medium
Matrix|Rotate Image|Medium
Matrix|Set Matrix Zeroes|Medium
Matrix|Game of Life|Medium
Hashmap|Ransom Note|Easy
Hashmap|Isomorphic Strings|Easy
Hashmap|Word Pattern|Easy
Hashmap|Valid Anagram|Easy
Hashmap|Group Anagrams|Medium
Hashmap|Two Sum|Easy
Hashmap|Happy Number|Easy
Hashmap|Contains Duplicate II|Easy
Hashmap|Longest Consecutive Sequence|Medium
Intervals|Summary Ranges|Easy
Intervals|Merge Intervals|Medium
Intervals|Insert Interval|Medium
Intervals|Minimum Number of Arrows to Burst Balloons|Medium
Stack|Valid Parentheses|Easy
Stack|Simplify Path|Medium
Stack|Min Stack|Medium
Stack|Evaluate Reverse Polish Notation|Medium
Stack|Basic Calculator|Hard
Linked List|Linked List Cycle|Easy
Linked List|Add Two Numbers|Medium
Linked List|Merge Two Sorted Lists|Easy
Linked List|Copy List with Random Pointer|Medium
Linked List|Reverse Linked List II|Medium
Linked List|Reverse Nodes in k-Group|Hard
Linked List|Remove Nth Node From End of List|Medium
Linked List|Remove Duplicates from Sorted List II|Medium
Linked List|Rotate List|Medium
Linked List|Partition List|Medium
Linked List|LRU Cache|Medium
Binary Tree General|Maximum Depth of Binary Tree|Easy
Binary Tree General|Same Tree|Easy
Binary Tree General|Invert Binary Tree|Easy
Binary Tree General|Symmetric Tree|Easy
Binary Tree General|Construct Binary Tree from Preorder and Inorder Traversal|Medium
Binary Tree General|Construct Binary Tree from Inorder and Postorder Traversal|Medium
Binary Tree General|Populating Next Right Pointers in Each Node II|Medium
Binary Tree General|Flatten Binary Tree to Linked List|Medium
Binary Tree General|Path Sum|Easy
Binary Tree General|Sum Root to Leaf Numbers|Medium
Binary Tree General|Binary Tree Maximum Path Sum|Hard
Binary Tree General|Binary Search Tree Iterator|Medium
Binary Tree General|Count Complete Tree Nodes|Easy
Binary Tree General|Lowest Common Ancestor of a Binary Tree|Medium
Binary Tree BFS|Binary Tree Right Side View|Medium
Binary Tree BFS|Average of Levels in Binary Tree|Easy
Binary Tree BFS|Binary Tree Level Order Traversal|Medium
Binary Tree BFS|Binary Tree Zigzag Level Order Traversal|Medium
Binary Search Tree|Minimum Absolute Difference in BST|Easy
Binary Search Tree|Kth Smallest Element in a BST|Medium
Binary Search Tree|Validate Binary Search Tree|Medium
Graph General|Number of Islands|Medium
Graph General|Surrounded Regions|Medium
Graph General|Clone Graph|Medium
Graph General|Evaluate Division|Medium
Graph General|Course Schedule|Medium
Graph General|Course Schedule II|Medium
Graph BFS|Snakes and Ladders|Medium
Graph BFS|Minimum Genetic Mutation|Medium
Graph BFS|Word Ladder|Hard
Trie|Implement Trie (Prefix Tree)|Medium
Trie|Design Add and Search Words Data Structure|Medium
Trie|Word Search II|Hard
Backtracking|Letter Combinations of a Phone Number|Medium
Backtracking|Combinations|Medium
Backtracking|Permutations|Medium
Backtracking|Combination Sum|Medium
Backtracking|N-Queens II|Hard
Backtracking|Generate Parentheses|Medium
Backtracking|Word Search|Medium
Divide & Conquer|Convert Sorted Array to Binary Search Tree|Easy
Divide & Conquer|Sort List|Medium
Divide & Conquer|Construct Quad Tree|Medium
Divide & Conquer|Merge k Sorted Lists|Hard
Kadane's Algorithm|Maximum Subarray|Medium
Kadane's Algorithm|Maximum Sum Circular Subarray|Medium
Binary Search|Search Insert Position|Easy
Binary Search|Search a 2D Matrix|Medium
Binary Search|Find Peak Element|Medium
Binary Search|Search in Rotated Sorted Array|Medium
Binary Search|Find First and Last Position of Element in Sorted Array|Medium
Binary Search|Find Minimum in Rotated Sorted Array|Medium
Binary Search|Median of Two Sorted Arrays|Hard
Heap|Kth Largest Element in an Array|Medium
Heap|IPO|Hard
Heap|Find K Pairs with Smallest Sums|Medium
Heap|Find Median from Data Stream|Hard
Bit Manipulation|Add Binary|Easy
Bit Manipulation|Reverse Bits|Easy
Bit Manipulation|Number of 1 Bits|Easy
Bit Manipulation|Single Number|Easy
Bit Manipulation|Single Number II|Medium
Bit Manipulation|Bitwise AND of Numbers Range|Medium
Math|Palindrome Number|Easy
Math|Plus One|Easy
Math|Factorial Trailing Zeroes|Medium
Math|Sqrt(x)|Easy
Math|Pow(x, n)|Medium
Math|Max Points on a Line|Hard
1D DP|Climbing Stairs|Easy
1D DP|House Robber|Medium
1D DP|Word Break|Medium
1D DP|Coin Change|Medium
1D DP|Longest Increasing Subsequence|Medium
Multidimensional DP|Triangle|Medium
Multidimensional DP|Minimum Path Sum|Medium
Multidimensional DP|Unique Paths II|Medium
Multidimensional DP|Longest Palindromic Substring|Medium
Multidimensional DP|Interleaving String|Medium
Multidimensional DP|Edit Distance|Medium
Multidimensional DP|Best Time to Buy and Sell Stock III|Hard
Multidimensional DP|Best Time to Buy and Sell Stock IV|Hard
Multidimensional DP|Maximal Square|Medium
`.trim();

const slugOverrides = {
  'Insert Delete GetRandom O(1)': 'insert-delete-getrandom-o1',
  'H-Index': 'h-index',
  'Zigzag Conversion': 'zigzag-conversion',
  'Find the Index of the First Occurrence in a String': 'find-the-index-of-the-first-occurrence-in-a-string',
  'Two Sum II - Input Array Is Sorted': 'two-sum-ii-input-array-is-sorted',
  '3Sum': '3sum',
  'Game of Life': 'game-of-life',
  'Basic Calculator': 'basic-calculator',
  'Reverse Nodes in k-Group': 'reverse-nodes-in-k-group',
  'Sum Root to Leaf Numbers': 'sum-root-to-leaf-numbers',
  'N-Queens II': 'n-queens-ii',
  'Merge k Sorted Lists': 'merge-k-sorted-lists',
  'Sqrt(x)': 'sqrtx',
  'Pow(x, n)': 'powx-n',
};

function slugify(title) {
  return slugOverrides[title] ?? title
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const problemCatalog = rows.split('\n').map((row, index) => {
  const [category, title, difficulty] = row.split('|');
  const slug = slugify(title);
  return {
    id: index + 1,
    slug,
    title,
    category,
    difficulty,
    signal: difficulty === 'Easy' ? '🟢' : difficulty === 'Medium' ? '🟡' : '🔴',
    collectionStatus: '✅',
    sourceUrl: `https://leetcode.com/problems/${slug}/`,
  };
});
