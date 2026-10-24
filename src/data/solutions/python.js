export const pythonSolutions = {
  'merge-sorted-array': String.raw`class Solution:
    def merge(self, nums1, m, nums2, n):
        i, j, k = m - 1, n - 1, m + n - 1
        while j >= 0:
            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1`,
  'remove-element': String.raw`class Solution:
    def removeElement(self, nums, val):
        k = 0
        for x in nums:
            if x != val:
                nums[k] = x
                k += 1
        return k`,
  'remove-duplicates-from-sorted-array': String.raw`class Solution:
    def removeDuplicates(self, nums):
        k = 0
        for x in nums:
            if k == 0 or x != nums[k - 1]:
                nums[k] = x
                k += 1
        return k`,
  'remove-duplicates-from-sorted-array-ii': String.raw`class Solution:
    def removeDuplicates(self, nums):
        k = 0
        for x in nums:
            if k < 2 or x != nums[k - 2]:
                nums[k] = x
                k += 1
        return k`,
  'majority-element': String.raw`class Solution:
    def majorityElement(self, nums):
        candidate, count = None, 0
        for x in nums:
            if count == 0:
                candidate = x
            count += 1 if x == candidate else -1
        return candidate`,
  'rotate-array': String.raw`class Solution:
    def rotate(self, nums, k):
        n = len(nums)
        if n:
            k %= n
            nums[:] = nums[-k:] + nums[:-k] if k else nums[:]`,
  'best-time-to-buy-and-sell-stock': String.raw`class Solution:
    def maxProfit(self, prices):
        low, profit = float('inf'), 0
        for price in prices:
            low = min(low, price)
            profit = max(profit, price - low)
        return profit`,
  'best-time-to-buy-and-sell-stock-ii': String.raw`class Solution:
    def maxProfit(self, prices):
        return sum(max(0, b - a) for a, b in zip(prices, prices[1:]))`,
  'jump-game': String.raw`class Solution:
    def canJump(self, nums):
        reach = 0
        for i, jump in enumerate(nums):
            if i > reach:
                return False
            reach = max(reach, i + jump)
        return True`,
  'jump-game-ii': String.raw`class Solution:
    def jump(self, nums):
        jumps = end = farthest = 0
        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == end:
                jumps += 1
                end = farthest
        return jumps`,
  'h-index': String.raw`class Solution:
    def hIndex(self, citations):
        citations.sort(reverse=True)
        return max((i for i, c in enumerate(citations, 1) if c >= i), default=0)`,
  'insert-delete-getrandom-o1': String.raw`import random

class RandomizedSet:
    def __init__(self):
        self.values = []
        self.index = {}

    def insert(self, val):
        if val in self.index:
            return False
        self.index[val] = len(self.values)
        self.values.append(val)
        return True

    def remove(self, val):
        if val not in self.index:
            return False
        i = self.index.pop(val)
        last = self.values.pop()
        if i < len(self.values):
            self.values[i] = last
            self.index[last] = i
        return True

    def getRandom(self):
        return random.choice(self.values)`,
  'product-of-array-except-self': String.raw`class Solution:
    def productExceptSelf(self, nums):
        out, prefix = [1] * len(nums), 1
        for i, x in enumerate(nums):
            out[i] = prefix
            prefix *= x
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            out[i] *= suffix
            suffix *= nums[i]
        return out`,
  'gas-station': String.raw`class Solution:
    def canCompleteCircuit(self, gas, cost):
        if sum(gas) < sum(cost):
            return -1
        start = tank = 0
        for i, (g, c) in enumerate(zip(gas, cost)):
            tank += g - c
            if tank < 0:
                start, tank = i + 1, 0
        return start`,
  'candy': String.raw`class Solution:
    def candy(self, ratings):
        candies = [1] * len(ratings)
        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1
        for i in range(len(ratings) - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i], candies[i + 1] + 1)
        return sum(candies)`,
  'trapping-rain-water': String.raw`class Solution:
    def trap(self, height):
        left, right, lm, rm, water = 0, len(height) - 1, 0, 0, 0
        while left < right:
            if height[left] < height[right]:
                lm = max(lm, height[left])
                water += lm - height[left]
                left += 1
            else:
                rm = max(rm, height[right])
                water += rm - height[right]
                right -= 1
        return water`,
  'roman-to-integer': String.raw`class Solution:
    def romanToInt(self, s):
        values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        for i, ch in enumerate(s):
            total += -values[ch] if i + 1 < len(s) and values[ch] < values[s[i + 1]] else values[ch]
        return total`,
  'integer-to-roman': String.raw`class Solution:
    def intToRoman(self, num):
        pairs = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'),
                 (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'),
                 (5, 'V'), (4, 'IV'), (1, 'I')]
        out = []
        for value, symbol in pairs:
            count, num = divmod(num, value)
            out.append(symbol * count)
        return ''.join(out)`,
  'length-of-last-word': String.raw`class Solution:
    def lengthOfLastWord(self, s):
        return len(s.rstrip().split()[-1])`,
  'longest-common-prefix': String.raw`class Solution:
    def longestCommonPrefix(self, strs):
        if not strs:
            return ''
        prefix = strs[0]
        for word in strs[1:]:
            while not word.startswith(prefix):
                prefix = prefix[:-1]
        return prefix`,
  'reverse-words-in-a-string': String.raw`class Solution:
    def reverseWords(self, s):
        return ' '.join(s.split()[::-1])`,
  'zigzag-conversion': String.raw`class Solution:
    def convert(self, s, numRows):
        if numRows == 1 or numRows >= len(s):
            return s
        rows, row, step = [''] * numRows, 0, 1
        for ch in s:
            rows[row] += ch
            if row == 0:
                step = 1
            elif row == numRows - 1:
                step = -1
            row += step
        return ''.join(rows)`,
  'find-the-index-of-the-first-occurrence-in-a-string': String.raw`class Solution:
    def strStr(self, haystack, needle):
        return haystack.find(needle)`,
  'text-justification': String.raw`class Solution:
    def fullJustify(self, words, maxWidth):
        result, i, n = [], 0, len(words)
        while i < n:
            j, letters = i, 0
            while j < n and letters + len(words[j]) + (j - i) <= maxWidth:
                letters += len(words[j])
                j += 1
            count = j - i
            if j == n or count == 1:
                line = ' '.join(words[i:j])
                result.append(line + ' ' * (maxWidth - len(line)))
            else:
                spaces = maxWidth - letters
                gaps = count - 1
                base, extra = divmod(spaces, gaps)
                line = ''
                for k in range(gaps):
                    line += words[i + k] + ' ' * (base + (k < extra))
                result.append(line + words[j - 1])
            i = j
        return result`,
  'valid-palindrome': String.raw`class Solution:
    def isPalindrome(self, s):
        chars = [c.lower() for c in s if c.isalnum()]
        return chars == chars[::-1]`,
  'is-subsequence': String.raw`class Solution:
    def isSubsequence(self, s, t):
        it = iter(t)
        return all(any(c == x for x in it) for c in s)`,
  'two-sum-ii-input-array-is-sorted': String.raw`class Solution:
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
  'container-with-most-water': String.raw`class Solution:
    def maxArea(self, height):
        left, right, best = 0, len(height) - 1, 0
        while left < right:
            best = max(best, (right - left) * min(height[left], height[right]))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return best`,
  '3sum': String.raw`class Solution:
    def threeSum(self, nums):
        nums.sort()
        result = []
        for i in range(len(nums) - 2):
            if i and nums[i] == nums[i - 1]:
                continue
            left, right = i + 1, len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif total < 0:
                    left += 1
                else:
                    right -= 1
        return result`,
  'minimum-size-subarray-sum': String.raw`class Solution:
    def minSubArrayLen(self, target, nums):
        left = total = 0
        best = len(nums) + 1
        for right, value in enumerate(nums):
            total += value
            while total >= target:
                best = min(best, right - left + 1)
                total -= nums[left]
                left += 1
        return best if best <= len(nums) else 0`,
  'longest-substring-without-repeating-characters': String.raw`class Solution:
    def lengthOfLongestSubstring(self, s):
        last, left, best = {}, 0, 0
        for right, ch in enumerate(s):
            if ch in last:
                left = max(left, last[ch] + 1)
            last[ch] = right
            best = max(best, right - left + 1)
        return best`,
  'substring-with-concatenation-of-all-words': String.raw`from collections import Counter

class Solution:
    def findSubstring(self, s, words):
        if not words:
            return []
        width, count = len(words[0]), len(words)
        need, result = Counter(words), []
        for offset in range(width):
            left, seen, used = offset, Counter(), 0
            for right in range(offset, len(s) - width + 1, width):
                word = s[right:right + width]
                if word not in need:
                    seen.clear()
                    used = 0
                    left = right + width
                    continue
                seen[word] += 1
                used += 1
                while seen[word] > need[word]:
                    old = s[left:left + width]
                    seen[old] -= 1
                    used -= 1
                    left += width
                if used == count:
                    result.append(left)
        return result`,
  'minimum-window-substring': String.raw`from collections import Counter

class Solution:
    def minWindow(self, s, t):
        need = Counter(t)
        missing, left, best = len(t), 0, (0, float('inf'))
        for right, ch in enumerate(s):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            while missing == 0:
                if right - left + 1 < best[1] - best[0]:
                    best = (left, right + 1)
                need[s[left]] += 1
                if need[s[left]] > 0:
                    missing += 1
                left += 1
        return s[best[0]:best[1]] if best[1] != float('inf') else ''`,
  'valid-sudoku': String.raw`class Solution:
    def isValidSudoku(self, board):
        rows, cols, boxes = set(), set(), set()
        for r in range(9):
            for c in range(9):
                value = board[r][c]
                if value == '.':
                    continue
                box = (r // 3, c // 3, value)
                if (r, value) in rows or (c, value) in cols or box in boxes:
                    return False
                rows.add((r, value))
                cols.add((c, value))
                boxes.add(box)
        return True`,
  'spiral-matrix': String.raw`class Solution:
    def spiralOrder(self, matrix):
        result = []
        top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
        while top <= bottom and left <= right:
            result.extend(matrix[top][left:right + 1])
            top += 1
            for r in range(top, bottom + 1):
                result.append(matrix[r][right])
            right -= 1
            if top <= bottom:
                result.extend(matrix[bottom][right:left - 1:-1])
                bottom -= 1
            if left <= right:
                for r in range(bottom, top - 1, -1):
                    result.append(matrix[r][left])
                left += 1
        return result`,
  'rotate-image': String.raw`class Solution:
    def rotate(self, matrix):
        matrix[:] = [list(row) for row in zip(*matrix[::-1])]`,
  'set-matrix-zeroes': String.raw`class Solution:
    def setZeroes(self, matrix):
        rows = {r for r, row in enumerate(matrix) if 0 in row}
        cols = {c for c in range(len(matrix[0])) if any(matrix[r][c] == 0 for r in range(len(matrix)))}
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if r in rows or c in cols:
                    matrix[r][c] = 0`,
  'game-of-life': String.raw`class Solution:
    def gameOfLife(self, board):
        rows, cols = len(board), len(board[0])
        for r in range(rows):
            for c in range(cols):
                live = sum(board[nr][nc] & 1
                           for nr in range(max(0, r - 1), min(rows, r + 2))
                           for nc in range(max(0, c - 1), min(cols, c + 2))
                           if (nr, nc) != (r, c))
                if live == 3 or (board[r][c] & 1 and live == 2):
                    board[r][c] |= 2
        for r in range(rows):
            for c in range(cols):
                board[r][c] >>= 1`,
  'ransom-note': String.raw`from collections import Counter

class Solution:
    def canConstruct(self, ransomNote, magazine):
        return not (Counter(ransomNote) - Counter(magazine))`,
  'isomorphic-strings': String.raw`class Solution:
    def isIsomorphic(self, s, t):
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))`,
  'word-pattern': String.raw`class Solution:
    def wordPattern(self, pattern, s):
        words = s.split()
        return len(words) == len(pattern) and len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words))`,
  'valid-anagram': String.raw`from collections import Counter

class Solution:
    def isAnagram(self, s, t):
        return Counter(s) == Counter(t)`,
  'group-anagrams': String.raw`from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):
        groups = defaultdict(list)
        for word in strs:
            groups[tuple(sorted(word))].append(word)
        return list(groups.values())`,
  'two-sum': String.raw`class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, value in enumerate(nums):
            if target - value in seen:
                return [seen[target - value], i]
            seen[value] = i`,
  'happy-number': String.raw`class Solution:
    def isHappy(self, n):
        def digit_sum(x):
            return sum(int(d) ** 2 for d in str(x))
        slow, fast = n, digit_sum(n)
        while fast != 1 and slow != fast:
            slow = digit_sum(slow)
            fast = digit_sum(digit_sum(fast))
        return fast == 1`,
  'contains-duplicate-ii': String.raw`class Solution:
    def containsNearbyDuplicate(self, nums, k):
        last = {}
        for i, value in enumerate(nums):
            if value in last and i - last[value] <= k:
                return True
            last[value] = i
        return False`,
  'longest-consecutive-sequence': String.raw`class Solution:
    def longestConsecutive(self, nums):
        values, best = set(nums), 0
        for x in values:
            if x - 1 not in values:
                y = x
                while y in values:
                    y += 1
                best = max(best, y - x)
        return best`,
  'summary-ranges': String.raw`class Solution:
    def summaryRanges(self, nums):
        result, i = [], 0
        while i < len(nums):
            start = nums[i]
            while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:
                i += 1
            result.append(str(start) if start == nums[i] else f'{start}->{nums[i]}')
            i += 1
        return result`,
  'merge-intervals': String.raw`class Solution:
    def merge(self, intervals):
        result = []
        for start, end in sorted(intervals):
            if not result or start > result[-1][1]:
                result.append([start, end])
            else:
                result[-1][1] = max(result[-1][1], end)
        return result`,
  'insert-interval': String.raw`class Solution:
    def insert(self, intervals, newInterval):
        result, i = [], 0
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        result.append(newInterval)
        return result + intervals[i:]`,
  'minimum-number-of-arrows-to-burst-balloons': String.raw`class Solution:
    def findMinArrowShots(self, points):
        if not points:
            return 0
        points.sort(key=lambda p: p[1])
        arrows, end = 1, points[0][1]
        for start, finish in points[1:]:
            if start > end:
                arrows += 1
                end = finish
        return arrows`,
  'valid-parentheses': String.raw`class Solution:
    def isValid(self, s):
        stack, pairs = [], {')': '(', ']': '[', '}': '{'}
        for ch in s:
            if ch in pairs:
                if not stack or stack.pop() != pairs[ch]:
                    return False
            else:
                stack.append(ch)
        return not stack`,
  'simplify-path': String.raw`class Solution:
    def simplifyPath(self, path):
        stack = []
        for part in path.split('/'):
            if part == '..':
                if stack:
                    stack.pop()
            elif part and part != '.':
                stack.append(part)
        return '/' + '/'.join(stack)`,
  'min-stack': String.raw`class MinStack:
    def __init__(self):
        self.stack = []
        self.mins = []

    def push(self, val):
        self.stack.append(val)
        self.mins.append(val if not self.mins else min(val, self.mins[-1]))

    def pop(self):
        self.stack.pop()
        self.mins.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.mins[-1]`,
  'evaluate-reverse-polish-notation': String.raw`class Solution:
    def evalRPN(self, tokens):
        stack = []
        for token in tokens:
            if token in '+-*/':
                b, a = stack.pop(), stack.pop()
                if token == '+':
                    stack.append(a + b)
                elif token == '-':
                    stack.append(a - b)
                elif token == '*':
                    stack.append(a * b)
                else:
                    stack.append(int(a / b))
            else:
                stack.append(int(token))
        return stack[-1]`,
  'basic-calculator': String.raw`class Solution:
    def calculate(self, s):
        stack, result, number, sign = [], 0, 0, 1
        for ch in s + '+':
            if ch.isdigit():
                number = number * 10 + int(ch)
            elif ch in '+-':
                result += sign * number
                number, sign = 0, 1 if ch == '+' else -1
            elif ch == '(':
                stack.append((result, sign))
                result, sign = 0, 1
            elif ch == ')':
                result += sign * number
                number = 0
                previous, outer_sign = stack.pop()
                result = previous + outer_sign * result
        return result`,
  'linked-list-cycle': String.raw`class Solution:
    def hasCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow is fast:
                return True
        return False`,
  'add-two-numbers': String.raw`class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = ListNode()
        tail, carry = dummy, 0
        while l1 or l2 or carry:
            total = carry + (l1.val if l1 else 0) + (l2.val if l2 else 0)
            carry, digit = divmod(total, 10)
            tail.next = ListNode(digit)
            tail = tail.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next`,
  'merge-two-sorted-lists': String.raw`class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode()
        tail = dummy
        while list1 and list2:
            if list1.val < list2.val:
                tail.next, list1 = list1, list1.next
            else:
                tail.next, list2 = list2, list2.next
            tail = tail.next
        tail.next = list1 or list2
        return dummy.next`,
  'copy-list-with-random-pointer': String.raw`class Solution:
    def copyRandomList(self, head):
        copies = {}
        node = head
        while node:
            copies[node] = Node(node.val)
            node = node.next
        node = head
        while node:
            copies[node].next = copies.get(node.next)
            copies[node].random = copies.get(node.random)
            node = node.next
        return copies.get(head)`,
  'reverse-linked-list-ii': String.raw`class Solution:
    def reverseBetween(self, head, left, right):
        dummy = ListNode(0, head)
        before = dummy
        for _ in range(left - 1):
            before = before.next
        current = before.next
        for _ in range(right - left):
            moving = current.next
            current.next = moving.next
            moving.next = before.next
            before.next = moving
        return dummy.next`,
  'reverse-nodes-in-k-group': String.raw`class Solution:
    def reverseKGroup(self, head, k):
        dummy = ListNode(0, head)
        group_prev = dummy
        while True:
            kth = group_prev
            for _ in range(k):
                kth = kth.next
                if not kth:
                    return dummy.next
            group_next = kth.next
            prev, current = group_next, group_prev.next
            while current is not group_next:
                nxt = current.next
                current.next = prev
                prev, current = current, nxt
            old_head = group_prev.next
            group_prev.next = kth
            group_prev = old_head`,
  'remove-nth-node-from-end-of-list': String.raw`class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0, head)
        fast = slow = dummy
        for _ in range(n):
            fast = fast.next
        while fast.next:
            fast, slow = fast.next, slow.next
        slow.next = slow.next.next
        return dummy.next`,
  'remove-duplicates-from-sorted-list-ii': String.raw`class Solution:
    def deleteDuplicates(self, head):
        dummy = ListNode(0, head)
        prev = dummy
        while head:
            if head.next and head.val == head.next.val:
                value = head.val
                while head and head.val == value:
                    head = head.next
                prev.next = head
            else:
                prev, head = head, head.next
        return dummy.next`,
  'rotate-list': String.raw`class Solution:
    def rotateRight(self, head, k):
        if not head or not head.next:
            return head
        tail, length = head, 1
        while tail.next:
            tail = tail.next
            length += 1
        k %= length
        if not k:
            return head
        tail.next = head
        for _ in range(length - k):
            tail = tail.next
        new_head = tail.next
        tail.next = None
        return new_head`,
  'partition-list': String.raw`class Solution:
    def partition(self, head, x):
        before, after = ListNode(), ListNode()
        low, high = before, after
        while head:
            if head.val < x:
                low.next = head
                low = low.next
            else:
                high.next = head
                high = high.next
            head = head.next
        high.next = None
        low.next = after.next
        return before.next`,
  'lru-cache': String.raw`from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = OrderedDict()

    def get(self, key):
        if key not in self.items:
            return -1
        self.items.move_to_end(key)
        return self.items[key]

    def put(self, key, value):
        if key in self.items:
            self.items.move_to_end(key)
        self.items[key] = value
        if len(self.items) > self.capacity:
            self.items.popitem(last=False)`,
  'maximum-depth-of-binary-tree': String.raw`class Solution:
    def maxDepth(self, root):
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`,
  'same-tree': String.raw`class Solution:
    def isSameTree(self, p, q):
        if not p or not q:
            return p is q
        return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)`,
  'invert-binary-tree': String.raw`class Solution:
    def invertTree(self, root):
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`,
  'symmetric-tree': String.raw`class Solution:
    def isSymmetric(self, root):
        def mirror(a, b):
            if not a or not b:
                return a is b
            return a.val == b.val and mirror(a.left, b.right) and mirror(a.right, b.left)
        return mirror(root, root)`,
  'construct-binary-tree-from-preorder-and-inorder-traversal': String.raw`class Solution:
    def buildTree(self, preorder, inorder):
        positions = {value: i for i, value in enumerate(inorder)}
        self.index = 0
        def build(left, right):
            if left > right:
                return None
            value = preorder[self.index]
            self.index += 1
            root = TreeNode(value)
            mid = positions[value]
            root.left = build(left, mid - 1)
            root.right = build(mid + 1, right)
            return root
        return build(0, len(inorder) - 1)`,
  'construct-binary-tree-from-inorder-and-postorder-traversal': String.raw`class Solution:
    def buildTree(self, inorder, postorder):
        positions = {value: i for i, value in enumerate(inorder)}
        self.index = len(postorder) - 1
        def build(left, right):
            if left > right:
                return None
            value = postorder[self.index]
            self.index -= 1
            root = TreeNode(value)
            mid = positions[value]
            root.right = build(mid + 1, right)
            root.left = build(left, mid - 1)
            return root
        return build(0, len(inorder) - 1)`,
  'populating-next-right-pointers-in-each-node-ii': String.raw`class Solution:
    def connect(self, root):
        if not root:
            return None
        level = [root]
        while level:
            next_level = []
            for i, node in enumerate(level):
                node.next = level[i + 1] if i + 1 < len(level) else None
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            level = next_level
        return root`,
  'flatten-binary-tree-to-linked-list': String.raw`class Solution:
    def flatten(self, root):
        node = root
        while node:
            if node.left:
                tail = node.left
                while tail.right:
                    tail = tail.right
                tail.right = node.right
                node.right = node.left
                node.left = None
            node = node.right`,
  'path-sum': String.raw`class Solution:
    def hasPathSum(self, root, targetSum):
        if not root:
            return False
        if not root.left and not root.right:
            return root.val == targetSum
        remain = targetSum - root.val
        return self.hasPathSum(root.left, remain) or self.hasPathSum(root.right, remain)`,
  'sum-root-to-leaf-numbers': String.raw`class Solution:
    def sumNumbers(self, root):
        def visit(node, value):
            if not node:
                return 0
            value = value * 10 + node.val
            if not node.left and not node.right:
                return value
            return visit(node.left, value) + visit(node.right, value)
        return visit(root, 0)`,
  'binary-tree-maximum-path-sum': String.raw`class Solution:
    def maxPathSum(self, root):
        best = float('-inf')
        def gain(node):
            nonlocal best
            if not node:
                return 0
            left = max(0, gain(node.left))
            right = max(0, gain(node.right))
            best = max(best, node.val + left + right)
            return node.val + max(left, right)
        gain(root)
        return best`,
  'binary-search-tree-iterator': String.raw`class BSTIterator:
    def __init__(self, root):
        self.stack = []
        self._push_left(root)

    def _push_left(self, node):
        while node:
            self.stack.append(node)
            node = node.left

    def next(self):
        node = self.stack.pop()
        self._push_left(node.right)
        return node.val

    def hasNext(self):
        return bool(self.stack)`,
  'count-complete-tree-nodes': String.raw`class Solution:
    def countNodes(self, root):
        if not root:
            return 0
        left, right = root, root
        lh = rh = 0
        while left:
            lh += 1
            left = left.left
        while right:
            rh += 1
            right = right.right
        if lh == rh:
            return (1 << lh) - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)`,
  'lowest-common-ancestor-of-a-binary-tree': String.raw`class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root or root is p or root is q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        return root if left and right else left or right`,
  'binary-tree-right-side-view': String.raw`from collections import deque

class Solution:
    def rightSideView(self, root):
        if not root:
            return []
        result, queue = [], deque([root])
        while queue:
            level_size = len(queue)
            for i in range(level_size):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                if i == level_size - 1:
                    rightmost = node.val
            result.append(rightmost)
        return result`,
  'average-of-levels-in-binary-tree': String.raw`from collections import deque

class Solution:
    def averageOfLevels(self, root):
        if not root:
            return []
        result, queue = [], deque([root])
        while queue:
            total, count = 0, len(queue)
            for _ in range(count):
                node = queue.popleft()
                total += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(total / count)
        return result`,
  'binary-tree-level-order-traversal': String.raw`from collections import deque

class Solution:
    def levelOrder(self, root):
        if not root:
            return []
        result, queue = [], deque([root])
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result`,
  'binary-tree-zigzag-level-order-traversal': String.raw`from collections import deque

class Solution:
    def zigzagLevelOrder(self, root):
        if not root:
            return []
        result, queue, left_to_right = [], deque([root]), True
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level if left_to_right else level[::-1])
            left_to_right = not left_to_right
        return result`,
  'minimum-absolute-difference-in-bst': String.raw`class Solution:
    def getMinimumDifference(self, root):
        self.previous, self.best = None, float('inf')
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            if self.previous is not None:
                self.best = min(self.best, node.val - self.previous)
            self.previous = node.val
            inorder(node.right)
        inorder(root)
        return self.best`,
  'kth-smallest-element-in-a-bst': String.raw`class Solution:
    def kthSmallest(self, root, k):
        stack, node = [], root
        while True:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            k -= 1
            if k == 0:
                return node.val
            node = node.right`,
  'validate-binary-search-tree': String.raw`class Solution:
    def isValidBST(self, root):
        def valid(node, low, high):
            if not node:
                return True
            if not low < node.val < high:
                return False
            return valid(node.left, low, node.val) and valid(node.right, node.val, high)
        return valid(root, float('-inf'), float('inf'))`,
  'number-of-islands': String.raw`class Solution:
    def numIslands(self, grid):
        rows, cols, count = len(grid), len(grid[0]), 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    count += 1
                    stack = [(r, c)]
                    grid[r][c] = '0'
                    while stack:
                        x, y = stack.pop()
                        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                            if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == '1':
                                grid[nx][ny] = '0'
                                stack.append((nx, ny))
        return count`,
  'surrounded-regions': String.raw`class Solution:
    def solve(self, board):
        if not board:
            return
        rows, cols = len(board), len(board[0])
        stack = [(r, c) for r in range(rows) for c in range(cols)
                 if (r in (0, rows - 1) or c in (0, cols - 1)) and board[r][c] == 'O']
        while stack:
            r, c = stack.pop()
            if 0 <= r < rows and 0 <= c < cols and board[r][c] == 'O':
                board[r][c] = '#'
                stack.extend(((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)))
        for r in range(rows):
            for c in range(cols):
                board[r][c] = 'O' if board[r][c] == '#' else 'X'`,
  'clone-graph': String.raw`class Solution:
    def cloneGraph(self, node):
        if not node:
            return None
        copies = {node: Node(node.val)}
        stack = [node]
        while stack:
            current = stack.pop()
            for neighbor in current.neighbors:
                if neighbor not in copies:
                    copies[neighbor] = Node(neighbor.val)
                    stack.append(neighbor)
                copies[current].neighbors.append(copies[neighbor])
        return copies[node]`,
  'evaluate-division': String.raw`from collections import defaultdict, deque

class Solution:
    def calcEquation(self, equations, values, queries):
        graph = defaultdict(list)
        for (a, b), value in zip(equations, values):
            graph[a].append((b, value))
            graph[b].append((a, 1 / value))
        result = []
        for start, end in queries:
            if start not in graph or end not in graph:
                result.append(-1.0)
                continue
            queue, seen, answer = deque([(start, 1.0)]), {start}, -1.0
            while queue:
                node, product = queue.popleft()
                if node == end:
                    answer = product
                    break
                for neighbor, weight in graph[node]:
                    if neighbor not in seen:
                        seen.add(neighbor)
                        queue.append((neighbor, product * weight))
            result.append(answer)
        return result`,
  'course-schedule': String.raw`from collections import deque

class Solution:
    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            indegree[course] += 1
        queue = deque(i for i, degree in enumerate(indegree) if degree == 0)
        done = 0
        while queue:
            node = queue.popleft()
            done += 1
            for neighbor in graph[node]:
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)
        return done == numCourses`,
  'course-schedule-ii': String.raw`from collections import deque

class Solution:
    def findOrder(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses
        for course, prereq in prerequisites:
            graph[prereq].append(course)
            indegree[course] += 1
        queue = deque(i for i, d in enumerate(indegree) if d == 0)
        order = []
        while queue:
            node = queue.popleft()
            order.append(node)
            for neighbor in graph[node]:
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)
        return order if len(order) == numCourses else []`,
  'snakes-and-ladders': String.raw`from collections import deque

class Solution:
    def snakesAndLadders(self, board):
        n = len(board)
        def square(value):
            row_from_bottom, offset = divmod(value - 1, n)
            row = n - 1 - row_from_bottom
            col = offset if row_from_bottom % 2 == 0 else n - 1 - offset
            return row, col
        queue, seen, moves = deque([1]), {1}, 0
        while queue:
            for _ in range(len(queue)):
                value = queue.popleft()
                if value == n * n:
                    return moves
                for nxt in range(value + 1, min(value + 6, n * n) + 1):
                    r, c = square(nxt)
                    dest = board[r][c] if board[r][c] != -1 else nxt
                    if dest not in seen:
                        seen.add(dest)
                        queue.append(dest)
            moves += 1
        return -1`,
  'minimum-genetic-mutation': String.raw`from collections import deque

class Solution:
    def minMutation(self, startGene, endGene, bank):
        allowed = set(bank)
        queue, seen, steps = deque([startGene]), {startGene}, 0
        bases = 'ACGT'
        while queue:
            for _ in range(len(queue)):
                gene = queue.popleft()
                if gene == endGene:
                    return steps
                for i, old in enumerate(gene):
                    for base in bases:
                        candidate = gene[:i] + base + gene[i + 1:]
                        if candidate in allowed and candidate not in seen:
                            seen.add(candidate)
                            queue.append(candidate)
            steps += 1
        return -1`,
  'word-ladder': String.raw`from collections import defaultdict, deque

class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        words = set(wordList)
        if endWord not in words:
            return 0
        patterns = defaultdict(list)
        for word in words | {beginWord}:
            for i in range(len(word)):
                patterns[word[:i] + '*' + word[i + 1:]].append(word)
        queue, seen = deque([(beginWord, 1)]), {beginWord}
        while queue:
            word, length = queue.popleft()
            if word == endWord:
                return length
            for i in range(len(word)):
                key = word[:i] + '*' + word[i + 1:]
                for neighbor in patterns[key]:
                    if neighbor not in seen:
                        seen.add(neighbor)
                        queue.append((neighbor, length + 1))
                patterns[key].clear()
        return 0`,
  'implement-trie-prefix-tree': String.raw`class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node['#'] = True

    def search(self, word):
        node = self._find(word)
        return node is not None and '#' in node

    def startsWith(self, prefix):
        return self._find(prefix) is not None

    def _find(self, word):
        node = self.root
        for ch in word:
            if ch not in node:
                return None
            node = node[ch]
        return node`,
  'design-add-and-search-words-data-structure': String.raw`class WordDictionary:
    def __init__(self):
        self.root = {}

    def addWord(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node['#'] = True

    def search(self, word):
        def match(node, i):
            if i == len(word):
                return '#' in node
            if word[i] == '.':
                return any(match(child, i + 1) for key, child in node.items() if key != '#')
            return word[i] in node and match(node[word[i]], i + 1)
        return match(self.root, 0)`,
  'word-search-ii': String.raw`class Solution:
    def findWords(self, board, words):
        root = {}
        for word in words:
            node = root
            for ch in word:
                node = node.setdefault(ch, {})
            node['#'] = word
        rows, cols, result = len(board), len(board[0]), []
        def dfs(r, c, parent):
            ch = board[r][c]
            node = parent.get(ch)
            if not node:
                return
            word = node.pop('#', None)
            if word:
                result.append(word)
            board[r][c] = '!'
            for nr, nc in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
                if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '!':
                    dfs(nr, nc, node)
            board[r][c] = ch
            if not node:
                parent.pop(ch)
        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)
        return result`,
  'letter-combinations-of-a-phone-number': String.raw`class Solution:
    def letterCombinations(self, digits):
        if not digits:
            return []
        letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        result = ['']
        for digit in digits:
            result = [prefix + ch for prefix in result for ch in letters[int(digit)]]
        return result`,
  'combinations': String.raw`class Solution:
    def combine(self, n, k):
        result = []
        def backtrack(start, path):
            if len(path) == k:
                result.append(path[:])
                return
            for value in range(start, n - (k - len(path)) + 2):
                path.append(value)
                backtrack(value + 1, path)
                path.pop()
        backtrack(1, [])
        return result`,
  'permutations': String.raw`class Solution:
    def permute(self, nums):
        result = []
        def backtrack(path, remaining):
            if not remaining:
                result.append(path)
                return
            for i, value in enumerate(remaining):
                backtrack(path + [value], remaining[:i] + remaining[i + 1:])
        backtrack([], nums)
        return result`,
  'combination-sum': String.raw`class Solution:
    def combinationSum(self, candidates, target):
        result = []
        def search(start, remain, path):
            if remain == 0:
                result.append(path[:])
                return
            for i in range(start, len(candidates)):
                value = candidates[i]
                if value > remain:
                    continue
                search(i, remain - value, path + [value])
        search(0, target, [])
        return result`,
  'n-queens-ii': String.raw`class Solution:
    def totalNQueens(self, n):
        cols, diag1, diag2 = set(), set(), set()
        def place(row):
            if row == n:
                return 1
            total = 0
            for col in range(n):
                if col in cols or row - col in diag1 or row + col in diag2:
                    continue
                cols.add(col)
                diag1.add(row - col)
                diag2.add(row + col)
                total += place(row + 1)
                cols.remove(col)
                diag1.remove(row - col)
                diag2.remove(row + col)
            return total
        return place(0)`,
  'generate-parentheses': String.raw`class Solution:
    def generateParenthesis(self, n):
        result = []
        def build(path, opened, closed):
            if len(path) == 2 * n:
                result.append(path)
                return
            if opened < n:
                build(path + '(', opened + 1, closed)
            if closed < opened:
                build(path + ')', opened, closed + 1)
        build('', 0, 0)
        return result`,
  'word-search': String.raw`class Solution:
    def exist(self, board, word):
        rows, cols = len(board), len(board[0])
        def search(r, c, i):
            if i == len(word):
                return True
            if r < 0 or r == rows or c < 0 or c == cols or board[r][c] != word[i]:
                return False
            ch = board[r][c]
            board[r][c] = '#'
            found = (search(r + 1, c, i + 1) or search(r - 1, c, i + 1)
                     or search(r, c + 1, i + 1) or search(r, c - 1, i + 1))
            board[r][c] = ch
            return found
        return any(search(r, c, 0) for r in range(rows) for c in range(cols))`,
  'convert-sorted-array-to-binary-search-tree': String.raw`class Solution:
    def sortedArrayToBST(self, nums):
        def build(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            node = TreeNode(nums[mid])
            node.left = build(left, mid - 1)
            node.right = build(mid + 1, right)
            return node
        return build(0, len(nums) - 1)`,
  'sort-list': String.raw`class Solution:
    def sortList(self, head):
        if not head or not head.next:
            return head
        slow, fast = head, head.next
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        right = slow.next
        slow.next = None
        left, right = self.sortList(head), self.sortList(right)
        dummy = tail = ListNode()
        while left and right:
            if left.val < right.val:
                tail.next, left = left, left.next
            else:
                tail.next, right = right, right.next
            tail = tail.next
        tail.next = left or right
        return dummy.next`,
  'construct-quad-tree': String.raw`class Solution:
    def construct(self, grid):
        def build(r0, c0, size):
            first = grid[r0][c0]
            uniform = all(grid[r][c] == first
                          for r in range(r0, r0 + size)
                          for c in range(c0, c0 + size))
            if uniform:
                return Node(first == 1, True, None, None, None, None)
            half = size // 2
            return Node(True, False,
                        build(r0, c0, half),
                        build(r0, c0 + half, half),
                        build(r0 + half, c0, half),
                        build(r0 + half, c0 + half, half))
        return build(0, 0, len(grid))`,
  'merge-k-sorted-lists': String.raw`import heapq
import itertools

class Solution:
    def mergeKLists(self, lists):
        heap, counter = [], itertools.count()
        for node in lists:
            if node:
                heapq.heappush(heap, (node.val, next(counter), node))
        dummy = tail = ListNode()
        while heap:
            _, _, node = heapq.heappop(heap)
            tail.next = node
            tail = node
            if node.next:
                heapq.heappush(heap, (node.next.val, next(counter), node.next))
        tail.next = None
        return dummy.next`,
  'maximum-subarray': String.raw`class Solution:
    def maxSubArray(self, nums):
        current = best = nums[0]
        for value in nums[1:]:
            current = max(value, current + value)
            best = max(best, current)
        return best`,
  'maximum-sum-circular-subarray': String.raw`class Solution:
    def maxSubarraySumCircular(self, nums):
        total = sum(nums)
        max_here = max_sum = min_here = min_sum = nums[0]
        for value in nums[1:]:
            max_here = max(value, max_here + value)
            max_sum = max(max_sum, max_here)
            min_here = min(value, min_here + value)
            min_sum = min(min_sum, min_here)
        return max_sum if max_sum < 0 else max(max_sum, total - min_sum)`,
  'search-insert-position': String.raw`class Solution:
    def searchInsert(self, nums, target):
        left, right = 0, len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left`,
  'search-a-2d-matrix': String.raw`class Solution:
    def searchMatrix(self, matrix, target):
        rows, cols = len(matrix), len(matrix[0])
        left, right = 0, rows * cols - 1
        while left <= right:
            mid = (left + right) // 2
            value = matrix[mid // cols][mid % cols]
            if value == target:
                return True
            if value < target:
                left = mid + 1
            else:
                right = mid - 1
        return False`,
  'find-peak-element': String.raw`class Solution:
    def findPeakElement(self, nums):
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return left`,
  'search-in-rotated-sorted-array': String.raw`class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
        return -1`,
  'find-first-and-last-position-of-element-in-sorted-array': String.raw`class Solution:
    def searchRange(self, nums, target):
        def lower(value):
            left, right = 0, len(nums)
            while left < right:
                mid = (left + right) // 2
                if nums[mid] < value:
                    left = mid + 1
                else:
                    right = mid
            return left
        start = lower(target)
        if start == len(nums) or nums[start] != target:
            return [-1, -1]
        return [start, lower(target + 1) - 1]`,
  'find-minimum-in-rotated-sorted-array': String.raw`class Solution:
    def findMin(self, nums):
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        return nums[left]`,
  'median-of-two-sorted-arrays': String.raw`class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        a, b = nums1, nums2
        if len(a) > len(b):
            a, b = b, a
        m, n = len(a), len(b)
        half = (m + n + 1) // 2
        left, right = 0, m
        while left <= right:
            i = (left + right) // 2
            j = half - i
            if i < m and b[j - 1] > a[i]:
                left = i + 1
            elif i > 0 and a[i - 1] > b[j]:
                right = i - 1
            else:
                low = max(a[i - 1] if i else float('-inf'),
                          b[j - 1] if j else float('-inf'))
                if (m + n) % 2:
                    return low
                high = min(a[i] if i < m else float('inf'),
                           b[j] if j < n else float('inf'))
                return (low + high) / 2`,
  'kth-largest-element-in-an-array': String.raw`import heapq

class Solution:
    def findKthLargest(self, nums, k):
        return heapq.nlargest(k, nums)[-1]`,
  'ipo': String.raw`import heapq

class Solution:
    def findMaximizedCapital(self, k, w, profits, capital):
        projects = sorted(zip(capital, profits))
        available, i = [], 0
        for _ in range(k):
            while i < len(projects) and projects[i][0] <= w:
                heapq.heappush(available, -projects[i][1])
                i += 1
            if not available:
                break
            w -= heapq.heappop(available)
        return w`,
  'find-k-pairs-with-smallest-sums': String.raw`import heapq

class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        if not nums1 or not nums2 or k == 0:
            return []
        heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(k, len(nums1)))]
        heapq.heapify(heap)
        result = []
        while heap and len(result) < k:
            _, i, j = heapq.heappop(heap)
            result.append([nums1[i], nums2[j]])
            if j + 1 < len(nums2):
                heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
        return result`,
  'find-median-from-data-stream': String.raw`import heapq

class MedianFinder:
    def __init__(self):
        self.low = []
        self.high = []

    def addNum(self, num):
        heapq.heappush(self.low, -num)
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.high) > len(self.low):
            heapq.heappush(self.low, -heapq.heappop(self.high))

    def findMedian(self):
        if len(self.low) > len(self.high):
            return -self.low[0]
        return (-self.low[0] + self.high[0]) / 2`,
  'add-binary': String.raw`class Solution:
    def addBinary(self, a, b):
        return format(int(a, 2) + int(b, 2), 'b')`,
  'reverse-bits': String.raw`class Solution:
    def reverseBits(self, n):
        result = 0
        for _ in range(32):
            result = (result << 1) | (n & 1)
            n >>= 1
        return result`,
  'number-of-1-bits': String.raw`class Solution:
    def hammingWeight(self, n):
        count = 0
        while n:
            n &= n - 1
            count += 1
        return count`,
  'single-number': String.raw`class Solution:
    def singleNumber(self, nums):
        result = 0
        for value in nums:
            result ^= value
        return result`,
  'single-number-ii': String.raw`class Solution:
    def singleNumber(self, nums):
        ones = twos = 0
        for value in nums:
            ones = (ones ^ value) & ~twos
            twos = (twos ^ value) & ~ones
        return ones`,
  'bitwise-and-of-numbers-range': String.raw`class Solution:
    def rangeBitwiseAnd(self, left, right):
        shifts = 0
        while left < right:
            left >>= 1
            right >>= 1
            shifts += 1
        return left << shifts`,
  'palindrome-number': String.raw`class Solution:
    def isPalindrome(self, x):
        return x >= 0 and str(x) == str(x)[::-1]`,
  'plus-one': String.raw`class Solution:
    def plusOne(self, digits):
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        return [1] + digits`,
  'factorial-trailing-zeroes': String.raw`class Solution:
    def trailingZeroes(self, n):
        count = 0
        while n:
            n //= 5
            count += n
        return count`,
  'sqrtx': String.raw`class Solution:
    def mySqrt(self, x):
        left, right = 0, x
        while left <= right:
            mid = (left + right) // 2
            if mid * mid <= x:
                left = mid + 1
            else:
                right = mid - 1
        return right`,
  'powx-n': String.raw`class Solution:
    def myPow(self, x, n):
        if n < 0:
            x, n = 1 / x, -n
        result = 1
        while n:
            if n & 1:
                result *= x
            x *= x
            n >>= 1
        return result`,
  'max-points-on-a-line': String.raw`from collections import defaultdict
from math import gcd

class Solution:
    def maxPoints(self, points):
        best = 0
        for i, (x1, y1) in enumerate(points):
            slopes, duplicates = defaultdict(int), 1
            local = 0
            for x2, y2 in points[i + 1:]:
                dx, dy = x2 - x1, y2 - y1
                if dx == 0 and dy == 0:
                    duplicates += 1
                    continue
                divisor = gcd(dx, dy)
                dx, dy = dx // divisor, dy // divisor
                if dx < 0:
                    dx, dy = -dx, -dy
                elif dx == 0:
                    dy = 1
                slopes[(dy, dx)] += 1
                local = max(local, slopes[(dy, dx)])
            best = max(best, local + duplicates)
        return best`,
  'climbing-stairs': String.raw`class Solution:
    def climbStairs(self, n):
        a, b = 1, 1
        for _ in range(n):
            a, b = b, a + b
        return a`,
  'house-robber': String.raw`class Solution:
    def rob(self, nums):
        two_back = one_back = 0
        for value in nums:
            two_back, one_back = one_back, max(one_back, two_back + value)
        return one_back`,
  'word-break': String.raw`class Solution:
    def wordBreak(self, s, wordDict):
        words = set(wordDict)
        reachable = [False] * (len(s) + 1)
        reachable[0] = True
        for end in range(1, len(s) + 1):
            reachable[end] = any(reachable[start] and s[start:end] in words
                                 for start in range(end))
        return reachable[-1]`,
  'coin-change': String.raw`class Solution:
    def coinChange(self, coins, amount):
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        for value in range(1, amount + 1):
            for coin in coins:
                if coin <= value:
                    dp[value] = min(dp[value], dp[value - coin] + 1)
        return dp[amount] if dp[amount] <= amount else -1`,
  'longest-increasing-subsequence': String.raw`from bisect import bisect_left

class Solution:
    def lengthOfLIS(self, nums):
        tails = []
        for value in nums:
            i = bisect_left(tails, value)
            if i == len(tails):
                tails.append(value)
            else:
                tails[i] = value
        return len(tails)`,
  'triangle': String.raw`class Solution:
    def minimumTotal(self, triangle):
        dp = triangle[-1][:]
        for row in range(len(triangle) - 2, -1, -1):
            for col, value in enumerate(triangle[row]):
                dp[col] = value + min(dp[col], dp[col + 1])
        return dp[0]`,
  'minimum-path-sum': String.raw`class Solution:
    def minPathSum(self, grid):
        rows, cols = len(grid), len(grid[0])
        dp = [float('inf')] * cols
        dp[0] = 0
        for r in range(rows):
            for c in range(cols):
                dp[c] = grid[r][c] + min(dp[c], dp[c - 1] if c else float('inf'))
        return dp[-1]`,
  'unique-paths-ii': String.raw`class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        cols = len(obstacleGrid[0])
        dp = [0] * cols
        dp[0] = 1
        for row in obstacleGrid:
            for c, blocked in enumerate(row):
                if blocked:
                    dp[c] = 0
                elif c:
                    dp[c] += dp[c - 1]
        return dp[-1]`,
  'longest-palindromic-substring': String.raw`class Solution:
    def longestPalindrome(self, s):
        start = end = 0
        for center in range(len(s)):
            for left, right in ((center, center), (center, center + 1)):
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    left -= 1
                    right += 1
                if right - left - 1 > end - start:
                    start, end = left + 1, right - 1
        return s[start:end + 1]`,
  'interleaving-string': String.raw`class Solution:
    def isInterleave(self, s1, s2, s3):
        if len(s1) + len(s2) != len(s3):
            return False
        dp = [False] * (len(s2) + 1)
        dp[0] = True
        for j in range(1, len(s2) + 1):
            dp[j] = dp[j - 1] and s2[j - 1] == s3[j - 1]
        for i in range(1, len(s1) + 1):
            dp[0] = dp[0] and s1[i - 1] == s3[i - 1]
            for j in range(1, len(s2) + 1):
                ch = s3[i + j - 1]
                dp[j] = (dp[j] and s1[i - 1] == ch) or (dp[j - 1] and s2[j - 1] == ch)
        return dp[-1]`,
  'edit-distance': String.raw`class Solution:
    def minDistance(self, word1, word2):
        dp = list(range(len(word2) + 1))
        for i, a in enumerate(word1, 1):
            current = [i]
            for j, b in enumerate(word2, 1):
                current.append(dp[j - 1] if a == b else 1 + min(dp[j], current[-1], dp[j - 1]))
            dp = current
        return dp[-1]`,
  'best-time-to-buy-and-sell-stock-iii': String.raw`class Solution:
    def maxProfit(self, prices):
        buy1 = buy2 = float('-inf')
        sell1 = sell2 = 0
        for price in prices:
            buy1 = max(buy1, -price)
            sell1 = max(sell1, buy1 + price)
            buy2 = max(buy2, sell1 - price)
            sell2 = max(sell2, buy2 + price)
        return sell2`,
  'best-time-to-buy-and-sell-stock-iv': String.raw`class Solution:
    def maxProfit(self, k, prices):
        if not prices or k == 0:
            return 0
        if k >= len(prices) // 2:
            return sum(max(0, b - a) for a, b in zip(prices, prices[1:]))
        buy = [float('-inf')] * (k + 1)
        sell = [0] * (k + 1)
        for price in prices:
            for t in range(1, k + 1):
                buy[t] = max(buy[t], sell[t - 1] - price)
                sell[t] = max(sell[t], buy[t] + price)
        return sell[k]`,
  'maximal-square': String.raw`class Solution:
    def maximalSquare(self, matrix):
        if not matrix:
            return 0
        cols = len(matrix[0])
        dp = [0] * (cols + 1)
        best = 0
        for row in matrix:
            diagonal = 0
            for c in range(1, cols + 1):
                old = dp[c]
                if row[c - 1] == '1':
                    dp[c] = 1 + min(dp[c], dp[c - 1], diagonal)
                    best = max(best, dp[c])
                else:
                    dp[c] = 0
                diagonal = old
        return best * best`,
};

export default pythonSolutions;
