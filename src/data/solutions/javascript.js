export const javascriptSolutions = {
  'merge-sorted-array': `function merge(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
}`,
  'remove-element': `function removeElement(nums, val) {
  let k = 0;
  for (const x of nums) if (x !== val) nums[k++] = x;
  return k;
}`,
  'remove-duplicates-from-sorted-array': `function removeDuplicates(nums) {
  let k = 0;
  for (const x of nums) if (!k || x !== nums[k - 1]) nums[k++] = x;
  return k;
}`,
  'remove-duplicates-from-sorted-array-ii': `function removeDuplicates(nums) {
  let k = 0;
  for (const x of nums) if (k < 2 || x !== nums[k - 2]) nums[k++] = x;
  return k;
}`,
  'majority-element': `function majorityElement(nums) {
  let candidate, count = 0;
  for (const x of nums) { if (!count) candidate = x; count += x === candidate ? 1 : -1; }
  return candidate;
}`,
  'rotate-array': `function rotate(nums, k) {
  const n = nums.length; k %= n;
  const rev = (l, r) => { while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]]; };
  rev(0, n - 1); rev(0, k - 1); rev(k, n - 1);
}`,
  'best-time-to-buy-and-sell-stock': `function maxProfit(prices) {
  let min = Infinity, best = 0;
  for (const p of prices) { min = Math.min(min, p); best = Math.max(best, p - min); }
  return best;
}`,
  'best-time-to-buy-and-sell-stock-ii': `function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) profit += Math.max(0, prices[i] - prices[i - 1]);
  return profit;
}`,
  'jump-game': `function canJump(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length && i <= reach; i++) { reach = Math.max(reach, i + nums[i]); if (reach >= nums.length - 1) return true; }
  return nums.length <= 1;
}`,
  'jump-game-ii': `function jump(nums) {
  let jumps = 0, end = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) { farthest = Math.max(farthest, i + nums[i]); if (i === end) { jumps++; end = farthest; } }
  return jumps;
}`,
  'h-index': `function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  while (h < citations.length && citations[h] > h) h++;
  return h;
}`,
  'insert-delete-getrandom-o1': `class RandomizedSet {
  constructor() { this.values = []; this.index = new Map(); }
  insert(val) { if (this.index.has(val)) return false; this.index.set(val, this.values.length); this.values.push(val); return true; }
  remove(val) { if (!this.index.has(val)) return false; const i = this.index.get(val), last = this.values.pop(); if (i < this.values.length) { this.values[i] = last; this.index.set(last, i); } this.index.delete(val); return true; }
  getRandom() { return this.values[Math.floor(Math.random() * this.values.length)]; }
}`,
  'product-of-array-except-self': `function productExceptSelf(nums) {
  const out = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) out[i] = out[i - 1] * nums[i - 1];
  for (let i = nums.length - 2, suffix = 1; i >= 0; i--) { suffix *= nums[i + 1]; out[i] *= suffix; }
  return out;
}`,
  'gas-station': `function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) { const d = gas[i] - cost[i]; total += d; tank += d; if (tank < 0) { start = i + 1; tank = 0; } }
  return total < 0 ? -1 : start;
}`,
  'candy': `function candy(ratings) {
  const candies = Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
  for (let i = ratings.length - 2; i >= 0; i--) if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);
  return candies.reduce((a, b) => a + b, 0);
}`,
  'trapping-rain-water': `function trap(height) {
  let l = 0, r = height.length - 1, left = 0, right = 0, water = 0;
  while (l < r) { if (height[l] < height[r]) { left = Math.max(left, height[l]); water += left - height[l++]; } else { right = Math.max(right, height[r]); water += right - height[r--]; } }
  return water;
}`,
  'roman-to-integer': `function romanToInt(s) {
  const v = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let n = 0;
  for (let i = 0; i < s.length; i++) n += v[s[i]] < v[s[i + 1]] ? -v[s[i]] : v[s[i]];
  return n;
}`,
  'integer-to-roman': `function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let out = '';
  for (let i = 0; i < values.length; i++) while (num >= values[i]) { out += symbols[i]; num -= values[i]; }
  return out;
}`,
  'length-of-last-word': `function lengthOfLastWord(s) {
  let i = s.length - 1;
  while (s[i] === ' ') i--;
  let n = 0;
  while (i >= 0 && s[i] !== ' ') { n++; i--; }
  return n;
}`,
  'longest-common-prefix': `function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (const s of strs) while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}`,
  'reverse-words-in-a-string': `function reverseWords(s) {
  return s.trim().split(/\\s+/).reverse().join(' ');
}`,
  'zigzag-conversion': `function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;
  const rows = Array.from({ length: numRows }, () => '');
  let row = 0, dir = 1;
  for (const ch of s) { rows[row] += ch; if (row === 0) dir = 1; else if (row === numRows - 1) dir = -1; row += dir; }
  return rows.join('');
}`,
  'find-the-index-of-the-first-occurrence-in-a-string': `function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}`,
  'text-justification': `function fullJustify(words, maxWidth) {
  const out = [];
  for (let i = 0; i < words.length;) {
    let j = i + 1, letters = words[i].length;
    while (j < words.length && letters + words[j].length + (j - i) <= maxWidth) letters += words[j++].length;
    const count = j - i, gaps = count - 1;
    let line;
    if (j === words.length || gaps === 0) line = words.slice(i, j).join(' ') + ' '.repeat(maxWidth - letters - gaps);
    else {
      const space = Math.floor((maxWidth - letters) / gaps), extra = (maxWidth - letters) % gaps;
      line = '';
      for (let k = i; k < j; k++) line += words[k] + (k < j - 1 ? ' '.repeat(space + (k - i < extra ? 1 : 0)) : '');
    }
    out.push(line); i = j;
  }
  return out;
}`,
  'valid-palindrome': `function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) { while (l < r && !/[a-z0-9]/i.test(s[l])) l++; while (l < r && !/[a-z0-9]/i.test(s[r])) r--; if (s[l++].toLowerCase() !== s[r--].toLowerCase()) return false; }
  return true;
}`,
  'is-subsequence': `function isSubsequence(s, t) {
  let i = 0;
  for (const ch of t) if (ch === s[i]) i++;
  return i === s.length;
}`,
  'two-sum-ii-input-array-is-sorted': `function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) { const sum = numbers[l] + numbers[r]; if (sum === target) return [l + 1, r + 1]; if (sum < target) l++; else r--; }
}`,
  'container-with-most-water': `function maxArea(height) {
  let l = 0, r = height.length - 1, best = 0;
  while (l < r) { best = Math.max(best, Math.min(height[l], height[r]) * (r - l)); if (height[l] < height[r]) l++; else r--; }
  return best;
}`,
  '3sum': `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) { const sum = nums[i] + nums[l] + nums[r]; if (!sum) { out.push([nums[i], nums[l], nums[r]]); while (l < r && nums[l] === nums[l + 1]) l++; while (l < r && nums[r] === nums[r - 1]) r--; l++; r--; } else if (sum < 0) l++; else r--; }
  }
  return out;
}`,
  'minimum-size-subarray-sum': `function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, best = Infinity;
  for (let right = 0; right < nums.length; right++) { sum += nums[right]; while (sum >= target) { best = Math.min(best, right - left + 1); sum -= nums[left++]; } }
  return best === Infinity ? 0 : best;
}`,
  'longest-substring-without-repeating-characters': `function lengthOfLongestSubstring(s) {
  const last = new Map(); let left = 0, best = 0;
  for (let right = 0; right < s.length; right++) { if (last.has(s[right])) left = Math.max(left, last.get(s[right]) + 1); last.set(s[right], right); best = Math.max(best, right - left + 1); }
  return best;
}`,
  'substring-with-concatenation-of-all-words': `function findSubstring(s, words) {
  if (!words.length) return [];
  const width = words[0].length, need = new Map(), out = [];
  for (const w of words) need.set(w, (need.get(w) || 0) + 1);
  for (let offset = 0; offset < width; offset++) {
    let left = offset, count = 0; const seen = new Map();
    for (let right = offset; right + width <= s.length; right += width) {
      const word = s.slice(right, right + width);
      if (!need.has(word)) { seen.clear(); count = 0; left = right + width; continue; }
      seen.set(word, (seen.get(word) || 0) + 1); count++;
      while (seen.get(word) > need.get(word)) { const first = s.slice(left, left + width); seen.set(first, seen.get(first) - 1); left += width; count--; }
      if (count === words.length) { out.push(left); const first = s.slice(left, left + width); seen.set(first, seen.get(first) - 1); left += width; count--; }
    }
  }
  return out;
}`,
  'minimum-window-substring': `function minWindow(s, t) {
  const need = new Map(); for (const c of t) need.set(c, (need.get(c) || 0) + 1);
  let missing = t.length, left = 0, start = 0, best = Infinity;
  for (let right = 0; right < s.length; right++) { if (need.has(s[right])) { if (need.get(s[right]) > 0) missing--; need.set(s[right], need.get(s[right]) - 1); }
    while (!missing) { if (right - left + 1 < best) { best = right - left + 1; start = left; } if (need.has(s[left])) { need.set(s[left], need.get(s[left]) + 1); if (need.get(s[left]) > 0) missing++; } left++; }
  }
  return best === Infinity ? '' : s.slice(start, start + best);
}`,
  'valid-sudoku': `function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set()), cols = Array.from({ length: 9 }, () => new Set()), boxes = Array.from({ length: 9 }, () => new Set());
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) { const x = board[r][c]; if (x === '.') continue; const b = Math.floor(r / 3) * 3 + Math.floor(c / 3); if (rows[r].has(x) || cols[c].has(x) || boxes[b].has(x)) return false; rows[r].add(x); cols[c].add(x); boxes[b].add(x); }
  return true;
}`,
  'spiral-matrix': `function spiralOrder(matrix) {
  const out = []; let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
  while (top <= bottom && left <= right) { for (let c = left; c <= right; c++) out.push(matrix[top][c]); top++; for (let r = top; r <= bottom; r++) out.push(matrix[r][right]); right--; if (top <= bottom) { for (let c = right; c >= left; c--) out.push(matrix[bottom][c]); bottom--; } if (left <= right) { for (let r = bottom; r >= top; r--) out.push(matrix[r][left]); left++; } }
  return out;
}`,
  'rotate-image': `function rotate(matrix) {
  const n = matrix.length;
  for (let r = 0; r < n; r++) for (let c = r + 1; c < n; c++) [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
  for (const row of matrix) row.reverse();
}`,
  'set-matrix-zeroes': `function setZeroes(matrix) {
  const m = matrix.length, n = matrix[0].length, firstRow = matrix[0].includes(0); let firstCol = false;
  for (let r = 0; r < m; r++) if (matrix[r][0] === 0) firstCol = true;
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) if (matrix[r][c] === 0) matrix[r][0] = matrix[0][c] = 0;
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) if (matrix[r][0] === 0 || matrix[0][c] === 0) matrix[r][c] = 0;
  if (firstRow) matrix[0].fill(0); if (firstCol) for (let r = 0; r < m; r++) matrix[r][0] = 0;
}`,
  'game-of-life': `function gameOfLife(board) {
  const m = board.length, n = board[0].length;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) { let live = 0; for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) if ((dr || dc) && board[r + dr]?.[c + dc] % 2 === 1) live++; if (board[r][c] === 1 && (live === 2 || live === 3) || board[r][c] === 0 && live === 3) board[r][c] += 2; }
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) board[r][c] >>= 1;
}`,
  'ransom-note': `function canConstruct(ransomNote, magazine) {
  const counts = new Map(); for (const c of magazine) counts.set(c, (counts.get(c) || 0) + 1);
  for (const c of ransomNote) { if (!counts.get(c)) return false; counts.set(c, counts.get(c) - 1); }
  return true;
}`,
  'isomorphic-strings': `function isIsomorphic(s, t) {
  const a = new Map(), b = new Map();
  for (let i = 0; i < s.length; i++) { if (a.has(s[i]) && a.get(s[i]) !== t[i] || b.has(t[i]) && b.get(t[i]) !== s[i]) return false; a.set(s[i], t[i]); b.set(t[i], s[i]); }
  return true;
}`,
  'word-pattern': `function wordPattern(pattern, s) {
  const words = s.split(' '); if (words.length !== pattern.length) return false;
  const a = new Map(), b = new Map();
  for (let i = 0; i < pattern.length; i++) { if (a.has(pattern[i]) && a.get(pattern[i]) !== words[i] || b.has(words[i]) && b.get(words[i]) !== pattern[i]) return false; a.set(pattern[i], words[i]); b.set(words[i], pattern[i]); }
  return true;
}`,
  'valid-anagram': `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Map(); for (const c of s) count.set(c, (count.get(c) || 0) + 1);
  for (const c of t) { if (!count.has(c)) return false; const remaining = count.get(c) - 1; if (remaining) count.set(c, remaining); else count.delete(c); }
  return count.size === 0;
}`,
  'group-anagrams': `function groupAnagrams(strs) {
  const groups = new Map();
  for (const s of strs) { const key = [...s].sort().join(''); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(s); }
  return [...groups.values()];
}`,
  'two-sum': `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) { const j = seen.get(target - nums[i]); if (j !== undefined) return [j, i]; seen.set(nums[i], i); }
}`,
  'happy-number': `function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) { seen.add(n); n = [...String(n)].reduce((sum, d) => sum + Number(d) ** 2, 0); }
  return n === 1;
}`,
  'contains-duplicate-ii': `function containsNearbyDuplicate(nums, k) {
  const last = new Map();
  for (let i = 0; i < nums.length; i++) { if (last.has(nums[i]) && i - last.get(nums[i]) <= k) return true; last.set(nums[i], i); }
  return false;
}`,
  'longest-consecutive-sequence': `function longestConsecutive(nums) {
  const set = new Set(nums); let best = 0;
  for (const x of set) if (!set.has(x - 1)) { let y = x; while (set.has(y)) y++; best = Math.max(best, y - x); }
  return best;
}`,
  'summary-ranges': `function summaryRanges(nums) {
  const out = [];
  for (let i = 0; i < nums.length;) { const start = nums[i]; while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) i++; out.push(start === nums[i] ? String(start) : start + '->' + nums[i]); i++; }
  return out;
}`,
  'merge-intervals': `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); const out = [];
  for (const interval of intervals) { const last = out[out.length - 1]; if (!last || interval[0] > last[1]) out.push(interval.slice()); else last[1] = Math.max(last[1], interval[1]); }
  return out;
}`,
  'insert-interval': `function insert(intervals, newInterval) {
  const out = []; let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) out.push(intervals[i++]);
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) { newInterval[0] = Math.min(newInterval[0], intervals[i][0]); newInterval[1] = Math.max(newInterval[1], intervals[i++][1]); }
  out.push(newInterval); return out.concat(intervals.slice(i));
}`,
  'minimum-number-of-arrows-to-burst-balloons': `function findMinArrowShots(points) {
  if (!points.length) return 0;
  points.sort((a, b) => a[1] - b[1]); let arrows = 1, end = points[0][1];
  for (const [start, finish] of points.slice(1)) if (start > end) { arrows++; end = finish; }
  return arrows;
}`,
  'valid-parentheses': `function isValid(s) {
  const stack = [], pairs = { ')': '(', ']': '[', '}': '{' };
  for (const c of s) { if (c in pairs) { if (stack.pop() !== pairs[c]) return false; } else stack.push(c); }
  return stack.length === 0;
}`,
  'simplify-path': `function simplifyPath(path) {
  const stack = [];
  for (const part of path.split('/')) { if (!part || part === '.') continue; if (part === '..') stack.pop(); else stack.push(part); }
  return '/' + stack.join('/');
}`,
  'min-stack': `class MinStack {
  constructor() { this.items = []; this.mins = []; }
  push(val) { this.items.push(val); this.mins.push(Math.min(val, this.getMin())); }
  pop() { this.items.pop(); this.mins.pop(); }
  top() { return this.items[this.items.length - 1]; }
  getMin() { return this.mins.length ? this.mins[this.mins.length - 1] : Infinity; }
}`,
  'evaluate-reverse-polish-notation': `function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) { if (['+', '-', '*', '/'].includes(t)) { const b = stack.pop(), a = stack.pop(); stack.push(t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : Math.trunc(a / b)); } else stack.push(Number(t)); }
  return stack.pop();
}`,
  'basic-calculator': `function calculate(s) {
  let result = 0, sign = 1, number = 0; const stack = [];
  for (const c of s) { if (c >= '0' && c <= '9') number = number * 10 + Number(c); else if (c === '+' || c === '-') { result += sign * number; number = 0; sign = c === '+' ? 1 : -1; } else if (c === '(') { stack.push(result, sign); result = 0; sign = 1; } else if (c === ')') { result += sign * number; number = 0; result = stack.pop() * result + stack.pop(); } }
  return result + sign * number;
}`,
  'linked-list-cycle': `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; if (slow === fast) return true; }
  return false;
}`,
  'add-two-numbers': `function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0); let tail = dummy, carry = 0;
  while (l1 || l2 || carry) { const sum = (l1?.val || 0) + (l2?.val || 0) + carry; carry = Math.floor(sum / 10); tail.next = new ListNode(sum % 10); tail = tail.next; l1 = l1?.next; l2 = l2?.next; }
  return dummy.next;
}`,
  'merge-two-sorted-lists': `function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0); let tail = dummy;
  while (list1 && list2) { if (list1.val < list2.val) { tail.next = list1; list1 = list1.next; } else { tail.next = list2; list2 = list2.next; } tail = tail.next; }
  tail.next = list1 || list2; return dummy.next;
}`,
  'copy-list-with-random-pointer': `function copyRandomList(head) {
  const copies = new Map([[null, null]]);
  for (let node = head; node; node = node.next) copies.set(node, new Node(node.val));
  for (let node = head; node; node = node.next) { copies.get(node).next = copies.get(node.next); copies.get(node).random = copies.get(node.random); }
  return copies.get(head);
}`,
  'reverse-linked-list-ii': `function reverseBetween(head, left, right) {
  const dummy = new ListNode(0, head); let before = dummy;
  for (let i = 1; i < left; i++) before = before.next;
  let current = before.next;
  for (let i = 0; i < right - left; i++) { const move = current.next; current.next = move.next; move.next = before.next; before.next = move; }
  return dummy.next;
}`,
  'reverse-nodes-in-k-group': `function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head); let groupPrev = dummy;
  while (true) { let kth = groupPrev; for (let i = 0; i < k && kth; i++) kth = kth.next; if (!kth) break; const groupNext = kth.next; let prev = groupNext, cur = groupPrev.next;
    while (cur !== groupNext) { const next = cur.next; cur.next = prev; prev = cur; cur = next; }
    const oldHead = groupPrev.next; groupPrev.next = kth; groupPrev = oldHead;
  }
  return dummy.next;
}`,
  'remove-nth-node-from-end-of-list': `function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head); let fast = dummy, slow = dummy;
  for (let i = 0; i < n; i++) fast = fast.next;
  while (fast.next) { fast = fast.next; slow = slow.next; }
  slow.next = slow.next.next; return dummy.next;
}`,
  'remove-duplicates-from-sorted-list-ii': `function deleteDuplicates(head) {
  const dummy = new ListNode(0, head); let prev = dummy, node = head;
  while (node) { if (node.next && node.val === node.next.val) { const value = node.val; while (node && node.val === value) node = node.next; prev.next = node; } else { prev = node; node = node.next; } }
  return dummy.next;
}`,
  'rotate-list': `function rotateRight(head, k) {
  if (!head || !head.next || !k) return head;
  let tail = head, n = 1; while (tail.next) { tail = tail.next; n++; }
  k %= n; if (!k) return head;
  tail.next = head; for (let i = 0; i < n - k; i++) tail = tail.next;
  const newHead = tail.next; tail.next = null; return newHead;
}`,
  'partition-list': `function partition(head, x) {
  const small = new ListNode(0), large = new ListNode(0); let a = small, b = large;
  while (head) { if (head.val < x) { a.next = head; a = a.next; } else { b.next = head; b = b.next; } head = head.next; }
  b.next = null; a.next = large.next; return small.next;
}`,
  'lru-cache': `class LRUCache {
  constructor(capacity) { this.capacity = capacity; this.map = new Map(); }
  get(key) { if (!this.map.has(key)) return -1; const value = this.map.get(key); this.map.delete(key); this.map.set(key, value); return value; }
  put(key, value) { if (this.map.has(key)) this.map.delete(key); this.map.set(key, value); if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value); }
}`,
  'maximum-depth-of-binary-tree': `function maxDepth(root) {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
}`,
  'same-tree': `function isSameTree(p, q) {
  if (!p || !q) return p === q;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
  'invert-binary-tree': `function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}`,
  'symmetric-tree': `function isSymmetric(root) {
  const mirror = (a, b) => !a || !b ? a === b : a.val === b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
  return mirror(root, root);
}`,
  'construct-binary-tree-from-preorder-and-inorder-traversal': `function buildTree(preorder, inorder) {
  const index = new Map(inorder.map((x, i) => [x, i])); let p = 0;
  const build = (l, r) => { if (l > r) return null; const val = preorder[p++], root = new TreeNode(val), m = index.get(val); root.left = build(l, m - 1); root.right = build(m + 1, r); return root; };
  return build(0, inorder.length - 1);
}`,
  'construct-binary-tree-from-inorder-and-postorder-traversal': `function buildTree(inorder, postorder) {
  const index = new Map(inorder.map((x, i) => [x, i])); let p = postorder.length - 1;
  const build = (l, r) => { if (l > r) return null; const val = postorder[p--], root = new TreeNode(val), m = index.get(val); root.right = build(m + 1, r); root.left = build(l, m - 1); return root; };
  return build(0, inorder.length - 1);
}`,
  'populating-next-right-pointers-in-each-node-ii': `function connect(root) {
  if (!root) return root;
  const queue = [root];
  for (let i = 0; i < queue.length;) { const end = queue.length; let prev = null; while (i < end) { const node = queue[i++]; if (prev) prev.next = node; prev = node; if (node.left) queue.push(node.left); if (node.right) queue.push(node.right); } prev.next = null; }
  return root;
}`,
  'flatten-binary-tree-to-linked-list': `function flatten(root) {
  let prev = null;
  const visit = node => { if (!node) return; visit(node.right); visit(node.left); node.right = prev; node.left = null; prev = node; };
  visit(root);
}`,
  'path-sum': `function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}`,
  'sum-root-to-leaf-numbers': `function sumNumbers(root) {
  const visit = (node, n) => { if (!node) return 0; n = n * 10 + node.val; return !node.left && !node.right ? n : visit(node.left, n) + visit(node.right, n); };
  return visit(root, 0);
}`,
  'binary-tree-maximum-path-sum': `function maxPathSum(root) {
  let best = -Infinity;
  const gain = node => { if (!node) return 0; const l = Math.max(0, gain(node.left)), r = Math.max(0, gain(node.right)); best = Math.max(best, node.val + l + r); return node.val + Math.max(l, r); };
  gain(root); return best;
}`,
  'binary-search-tree-iterator': `class BSTIterator {
  constructor(root) { this.stack = []; this.pushLeft(root); }
  pushLeft(node) { while (node) { this.stack.push(node); node = node.left; } }
  next() { const node = this.stack.pop(); this.pushLeft(node.right); return node.val; }
  hasNext() { return this.stack.length > 0; }
}`,
  'count-complete-tree-nodes': `function countNodes(root) {
  if (!root) return 0;
  const height = node => { let h = 0; while (node) { h++; node = node.left; } return h; };
  const l = height(root.left), r = height(root.right);
  return l === r ? (1 << l) + countNodes(root.right) : (1 << r) + countNodes(root.left);
}`,
  'lowest-common-ancestor-of-a-binary-tree': `function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q), right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}`,
  'binary-tree-right-side-view': `function rightSideView(root) {
  if (!root) return [];
  const out = [], queue = [root];
  for (let i = 0; i < queue.length;) { const end = queue.length; out.push(queue[end - 1].val); while (i < end) { const n = queue[i++]; if (n.left) queue.push(n.left); if (n.right) queue.push(n.right); } }
  return out;
}`,
  'average-of-levels-in-binary-tree': `function averageOfLevels(root) {
  const out = [], queue = [root];
  for (let i = 0; i < queue.length;) { const end = queue.length, count = end - i; let sum = 0; for (; i < end; i++) { const n = queue[i]; sum += n.val; if (n.left) queue.push(n.left); if (n.right) queue.push(n.right); } out.push(sum / count); }
  return out;
}`,
  'binary-tree-level-order-traversal': `function levelOrder(root) {
  if (!root) return [];
  const out = [], queue = [root];
  for (let i = 0; i < queue.length;) { const end = queue.length, level = []; while (i < end) { const n = queue[i++]; level.push(n.val); if (n.left) queue.push(n.left); if (n.right) queue.push(n.right); } out.push(level); }
  return out;
}`,
  'binary-tree-zigzag-level-order-traversal': `function zigzagLevelOrder(root) {
  if (!root) return [];
  const out = [], queue = [root]; let leftToRight = true;
  for (let i = 0; i < queue.length;) { const end = queue.length, level = []; while (i < end) { const n = queue[i++]; level.push(n.val); if (n.left) queue.push(n.left); if (n.right) queue.push(n.right); } if (!leftToRight) level.reverse(); out.push(level); leftToRight = !leftToRight; }
  return out;
}`,
  'minimum-absolute-difference-in-bst': `function getMinimumDifference(root) {
  let prev = -Infinity, best = Infinity;
  const inorder = node => { if (!node) return; inorder(node.left); best = Math.min(best, node.val - prev); prev = node.val; inorder(node.right); };
  inorder(root); return best;
}`,
  'kth-smallest-element-in-a-bst': `function kthSmallest(root, k) {
  const stack = []; let node = root;
  while (node || stack.length) { while (node) { stack.push(node); node = node.left; } node = stack.pop(); if (--k === 0) return node.val; node = node.right; }
}`,
  'validate-binary-search-tree': `function isValidBST(root) {
  const valid = (node, low, high) => !node || node.val > low && node.val < high && valid(node.left, low, node.val) && valid(node.right, node.val, high);
  return valid(root, -Infinity, Infinity);
}`,
  'number-of-islands': `function numIslands(grid) {
  const m = grid.length, n = grid[0].length; let count = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (grid[r][c] === '1') { count++; const stack = [[r, c]]; grid[r][c] = '0'; while (stack.length) { const [x, y] = stack.pop(); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = x + dx, b = y + dy; if (a >= 0 && b >= 0 && a < m && b < n && grid[a][b] === '1') { grid[a][b] = '0'; stack.push([a, b]); } } } }
  return count;
}`,
  'surrounded-regions': `function solve(board) {
  const m = board.length, n = board[0].length, mark = (r, c) => { const stack = [[r, c]]; while (stack.length) { const [x, y] = stack.pop(); if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') continue; board[x][y] = '#'; stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]); } };
  for (let r = 0; r < m; r++) { mark(r, 0); mark(r, n - 1); } for (let c = 0; c < n; c++) { mark(0, c); mark(m - 1, c); }
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) board[r][c] = board[r][c] === '#' ? 'O' : 'X';
}`,
  'clone-graph': `function cloneGraph(node) {
  if (!node) return null;
  const copies = new Map();
  const clone = n => { if (copies.has(n)) return copies.get(n); const copy = new Node(n.val); copies.set(n, copy); copy.neighbors = n.neighbors.map(clone); return copy; };
  return clone(node);
}`,
  'evaluate-division': `function calcEquation(equations, values, queries) {
  const graph = new Map();
  const add = (a, b, w) => { if (!graph.has(a)) graph.set(a, []); graph.get(a).push([b, w]); };
  equations.forEach(([a, b], i) => { add(a, b, values[i]); add(b, a, 1 / values[i]); });
  const divide = (a, b, seen) => { if (!graph.has(a) || !graph.has(b)) return -1; if (a === b) return 1; seen.add(a); for (const [next, w] of graph.get(a)) if (!seen.has(next)) { const rest = divide(next, b, seen); if (rest !== -1) return w * rest; } return -1; };
  return queries.map(([a, b]) => divide(a, b, new Set()));
}`,
  'course-schedule': `function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []), indegree = Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) { graph[b].push(a); indegree[a]++; }
  const queue = []; indegree.forEach((d, i) => { if (!d) queue.push(i); });
  for (let i = 0; i < queue.length; i++) for (const next of graph[queue[i]]) if (--indegree[next] === 0) queue.push(next);
  return queue.length === numCourses;
}`,
  'course-schedule-ii': `function findOrder(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []), indegree = Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) { graph[b].push(a); indegree[a]++; }
  const queue = []; indegree.forEach((d, i) => { if (!d) queue.push(i); });
  for (let i = 0; i < queue.length; i++) for (const next of graph[queue[i]]) if (--indegree[next] === 0) queue.push(next);
  return queue.length === numCourses ? queue : [];
}`,
  'snakes-and-ladders': `function snakesAndLadders(board) {
  const n = board.length, dest = n * n, queue = [[1, 0]], seen = new Set([1]);
  const square = x => { const r = n - 1 - Math.floor((x - 1) / n), c0 = (x - 1) % n; return [r, (Math.floor((x - 1) / n) % 2) ? n - 1 - c0 : c0]; };
  for (let i = 0; i < queue.length; i++) { const [x, d] = queue[i]; if (x === dest) return d; for (let y = x + 1; y <= Math.min(x + 6, dest); y++) { const [r, c] = square(y), next = board[r][c] === -1 ? y : board[r][c]; if (!seen.has(next)) { seen.add(next); queue.push([next, d + 1]); } } }
  return -1;
}`,
  'minimum-genetic-mutation': `function minMutation(startGene, endGene, bank) {
  const allowed = new Set(bank), queue = [[startGene, 0]], seen = new Set([startGene]), chars = ['A', 'C', 'G', 'T'];
  for (let i = 0; i < queue.length; i++) { const [gene, steps] = queue[i]; if (gene === endGene) return steps; for (let p = 0; p < gene.length; p++) for (const c of chars) { const next = gene.slice(0, p) + c + gene.slice(p + 1); if (allowed.has(next) && !seen.has(next)) { seen.add(next); queue.push([next, steps + 1]); } } }
  return -1;
}`,
  'word-ladder': `function ladderLength(beginWord, endWord, wordList) {
  const words = new Set(wordList); if (!words.has(endWord)) return 0;
  const queue = [[beginWord, 1]], seen = new Set([beginWord]);
  for (let i = 0; i < queue.length; i++) { const [word, level] = queue[i]; if (word === endWord) return level; for (let p = 0; p < word.length; p++) for (let c = 97; c <= 122; c++) { const next = word.slice(0, p) + String.fromCharCode(c) + word.slice(p + 1); if (words.has(next) && !seen.has(next)) { seen.add(next); queue.push([next, level + 1]); } } }
  return 0;
}`,
  'implement-trie-prefix-tree': `class Trie {
  constructor() { this.root = {}; }
  insert(word) { let node = this.root; for (const c of word) node = node[c] ||= {}; node.end = true; }
  search(word) { let node = this.root; for (const c of word) { if (!node[c]) return false; node = node[c]; } return !!node.end; }
  startsWith(prefix) { let node = this.root; for (const c of prefix) { if (!node[c]) return false; node = node[c]; } return true; }
}`,
  'design-add-and-search-words-data-structure': `class WordDictionary {
  constructor() { this.root = {}; }
  addWord(word) { let node = this.root; for (const c of word) node = node[c] ||= {}; node.end = true; }
  search(word) {
    const visit = (node, i) => { if (i === word.length) return !!node.end; if (word[i] !== '.') return !!node[word[i]] && visit(node[word[i]], i + 1); return Object.keys(node).some(c => c !== 'end' && visit(node[c], i + 1)); };
    return visit(this.root, 0);
  }
}`,
  'word-search-ii': `function findWords(board, words) {
  const root = {};
  for (const word of words) { let n = root; for (const c of word) n = n[c] ||= {}; n.word = word; }
  const out = [], m = board.length, n = board[0].length;
  const visit = (r, c, node) => { const ch = board[r][c], next = node[ch]; if (!next) return; if (next.word) { out.push(next.word); delete next.word; } board[r][c] = '#'; for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) if (r + dr >= 0 && c + dc >= 0 && r + dr < m && c + dc < n && board[r + dr][c + dc] !== '#') visit(r + dr, c + dc, next); board[r][c] = ch; if (!Object.keys(next).length) delete node[ch]; };
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) visit(r, c, root);
  return out;
}`,
  'letter-combinations-of-a-phone-number': `function letterCombinations(digits) {
  if (!digits) return [];
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'], out = [];
  const build = (i, s) => { if (i === digits.length) { out.push(s); return; } for (const c of map[Number(digits[i])]) build(i + 1, s + c); };
  build(0, ''); return out;
}`,
  'combinations': `function combine(n, k) {
  const out = [], path = [];
  const build = start => { if (path.length === k) { out.push(path.slice()); return; } for (let i = start; i <= n - (k - path.length) + 1; i++) { path.push(i); build(i + 1); path.pop(); } };
  build(1); return out;
}`,
  'permutations': `function permute(nums) {
  const out = [], path = [], used = Array(nums.length).fill(false);
  const build = () => { if (path.length === nums.length) { out.push(path.slice()); return; } for (let i = 0; i < nums.length; i++) if (!used[i]) { used[i] = true; path.push(nums[i]); build(); path.pop(); used[i] = false; } };
  build(); return out;
}`,
  'combination-sum': `function combinationSum(candidates, target) {
  const out = [], path = [];
  const build = (start, remain) => { if (!remain) { out.push(path.slice()); return; } for (let i = start; i < candidates.length && candidates[i] <= remain; i++) { path.push(candidates[i]); build(i, remain - candidates[i]); path.pop(); } };
  candidates.sort((a, b) => a - b); build(0, target); return out;
}`,
  'n-queens-ii': `function totalNQueens(n) {
  let count = 0; const cols = new Set(), diag1 = new Set(), diag2 = new Set();
  const place = r => { if (r === n) { count++; return; } for (let c = 0; c < n; c++) if (!cols.has(c) && !diag1.has(r - c) && !diag2.has(r + c)) { cols.add(c); diag1.add(r - c); diag2.add(r + c); place(r + 1); cols.delete(c); diag1.delete(r - c); diag2.delete(r + c); } };
  place(0); return count;
}`,
  'generate-parentheses': `function generateParenthesis(n) {
  const out = [];
  const build = (s, open, close) => { if (s.length === 2 * n) { out.push(s); return; } if (open < n) build(s + '(', open + 1, close); if (close < open) build(s + ')', open, close + 1); };
  build('', 0, 0); return out;
}`,
  'word-search': `function exist(board, word) {
  const m = board.length, n = board[0].length;
  const visit = (r, c, i) => { if (i === word.length) return true; if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== word[i]) return false; const ch = board[r][c]; board[r][c] = '#'; const found = visit(r + 1, c, i + 1) || visit(r - 1, c, i + 1) || visit(r, c + 1, i + 1) || visit(r, c - 1, i + 1); board[r][c] = ch; return found; };
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (visit(r, c, 0)) return true;
  return false;
}`,
  'convert-sorted-array-to-binary-search-tree': `function sortedArrayToBST(nums) {
  const build = (l, r) => { if (l > r) return null; const m = (l + r) >> 1, node = new TreeNode(nums[m]); node.left = build(l, m - 1); node.right = build(m + 1, r); return node; };
  return build(0, nums.length - 1);
}`,
  'sort-list': `function sortList(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head.next; while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  let right = slow.next; slow.next = null;
  const merge = (a, b) => { const dummy = new ListNode(0); let t = dummy; while (a && b) { if (a.val < b.val) { t.next = a; a = a.next; } else { t.next = b; b = b.next; } t = t.next; } t.next = a || b; return dummy.next; };
  return merge(sortList(head), sortList(right));
}`,
  'construct-quad-tree': `function construct(grid) {
  const build = (r, c, size) => {
    let same = true; const first = grid[r][c];
    for (let i = r; i < r + size && same; i++) for (let j = c; j < c + size; j++) if (grid[i][j] !== first) { same = false; break; }
    if (same) return new Node(!!first, true);
    const half = size / 2, node = new Node(true, false);
    node.topLeft = build(r, c, half); node.topRight = build(r, c + half, half); node.bottomLeft = build(r + half, c, half); node.bottomRight = build(r + half, c + half, half); return node;
  };
  return build(0, 0, grid.length);
}`,
  'merge-k-sorted-lists': `function mergeKLists(lists) {
  const merge = (a, b) => { const dummy = new ListNode(0); let t = dummy; while (a && b) { if (a.val < b.val) { t.next = a; a = a.next; } else { t.next = b; b = b.next; } t = t.next; } t.next = a || b; return dummy.next; };
  const divide = (l, r) => l > r ? null : l === r ? lists[l] : merge(divide(l, (l + r) >> 1), divide(((l + r) >> 1) + 1, r));
  return divide(0, lists.length - 1);
}`,
  'maximum-subarray': `function maxSubArray(nums) {
  let current = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) { current = Math.max(nums[i], current + nums[i]); best = Math.max(best, current); }
  return best;
}`,
  'maximum-sum-circular-subarray': `function maxSubarraySumCircular(nums) {
  let total = 0, maxEnd = 0, minEnd = 0, maxSum = -Infinity, minSum = Infinity;
  for (const x of nums) { maxEnd = Math.max(x, maxEnd + x); maxSum = Math.max(maxSum, maxEnd); minEnd = Math.min(x, minEnd + x); minSum = Math.min(minSum, minEnd); total += x; }
  return maxSum < 0 ? maxSum : Math.max(maxSum, total - minSum);
}`,
  'search-insert-position': `function searchInsert(nums, target) {
  let l = 0, r = nums.length;
  while (l < r) { const m = (l + r) >> 1; if (nums[m] < target) l = m + 1; else r = m; }
  return l;
}`,
  'search-a-2d-matrix': `function searchMatrix(matrix, target) {
  const n = matrix[0].length; let l = 0, r = matrix.length * n - 1;
  while (l <= r) { const m = (l + r) >> 1, x = matrix[Math.floor(m / n)][m % n]; if (x === target) return true; if (x < target) l = m + 1; else r = m - 1; }
  return false;
}`,
  'find-peak-element': `function findPeakElement(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) { const m = (l + r) >> 1; if (nums[m] > nums[m + 1]) r = m; else l = m + 1; }
  return l;
}`,
  'search-in-rotated-sorted-array': `function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) { const m = (l + r) >> 1; if (nums[m] === target) return m; if (nums[l] <= nums[m]) { if (nums[l] <= target && target < nums[m]) r = m - 1; else l = m + 1; } else { if (nums[m] < target && target <= nums[r]) l = m + 1; else r = m - 1; } }
  return -1;
}`,
  'find-first-and-last-position-of-element-in-sorted-array': `function searchRange(nums, target) {
  const lower = x => { let l = 0, r = nums.length; while (l < r) { const m = (l + r) >> 1; if (nums[m] < x) l = m + 1; else r = m; } return l; };
  const first = lower(target); return first === nums.length || nums[first] !== target ? [-1, -1] : [first, lower(target + 1) - 1];
}`,
  'find-minimum-in-rotated-sorted-array': `function findMin(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) { const m = (l + r) >> 1; if (nums[m] > nums[r]) l = m + 1; else r = m; }
  return nums[l];
}`,
  'median-of-two-sorted-arrays': `function findMedianSortedArrays(a, b) {
  if (a.length > b.length) return findMedianSortedArrays(b, a);
  let l = 0, r = a.length; const half = Math.floor((a.length + b.length + 1) / 2);
  while (l <= r) { const i = (l + r) >> 1, j = half - i, al = i ? a[i - 1] : -Infinity, ar = i < a.length ? a[i] : Infinity, bl = j ? b[j - 1] : -Infinity, br = j < b.length ? b[j] : Infinity;
    if (al <= br && bl <= ar) return (a.length + b.length) % 2 ? Math.max(al, bl) : (Math.max(al, bl) + Math.min(ar, br)) / 2;
    if (al > br) r = i - 1; else l = i + 1;
  }
}`,
  'kth-largest-element-in-an-array': `function findKthLargest(nums, k) {
  const heap = [];
  const push = x => { heap.push(x); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p] <= heap[i]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const min = heap[0], x = heap.pop(); if (heap.length) { heap[0] = x; let i = 0; while (true) { let c = i * 2 + 1; if (c >= heap.length) break; if (c + 1 < heap.length && heap[c + 1] < heap[c]) c++; if (heap[i] <= heap[c]) break; [heap[i], heap[c]] = [heap[c], heap[i]]; i = c; } } return min; };
  for (const x of nums) { push(x); if (heap.length > k) pop(); } return heap[0];
}`,
  'ipo': `function findMaximizedCapital(k, w, profits, capital) {
  const projects = profits.map((p, i) => [capital[i], p]).sort((a, b) => a[0] - b[0]), heap = [];
  const push = x => { heap.push(x); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p] >= heap[i]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], x = heap.pop(); if (heap.length) { heap[0] = x; let i = 0; while (true) { let c = i * 2 + 1; if (c >= heap.length) break; if (c + 1 < heap.length && heap[c + 1] > heap[c]) c++; if (heap[i] >= heap[c]) break; [heap[i], heap[c]] = [heap[c], heap[i]]; i = c; } } return top; };
  let i = 0; while (k--) { while (i < projects.length && projects[i][0] <= w) push(projects[i++][1]); if (!heap.length) break; w += pop(); } return w;
}`,
  'find-k-pairs-with-smallest-sums': `function kSmallestPairs(nums1, nums2, k) {
  const heap = [], out = [];
  const push = item => { heap.push(item); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], x = heap.pop(); if (heap.length) { heap[0] = x; let i = 0; while (true) { let c = i * 2 + 1; if (c >= heap.length) break; if (c + 1 < heap.length && heap[c + 1][0] < heap[c][0]) c++; if (heap[i][0] <= heap[c][0]) break; [heap[i], heap[c]] = [heap[c], heap[i]]; i = c; } } return top; };
  for (let i = 0; i < Math.min(nums1.length, k); i++) push([nums1[i] + nums2[0], i, 0]);
  while (k-- && heap.length) { const [, i, j] = pop(); out.push([nums1[i], nums2[j]]); if (j + 1 < nums2.length) push([nums1[i] + nums2[j + 1], i, j + 1]); }
  return out;
}`,
  'find-median-from-data-stream': `class MedianFinder {
  constructor() { this.low = []; this.high = []; }
  push(heap, value, max) { heap.push(value); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (max ? heap[p] >= heap[i] : heap[p] <= heap[i]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } }
  pop(heap, max) { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; while (true) { let c = i * 2 + 1; if (c >= heap.length) break; if (c + 1 < heap.length && (max ? heap[c + 1] > heap[c] : heap[c + 1] < heap[c])) c++; if (max ? heap[i] >= heap[c] : heap[i] <= heap[c]) break; [heap[i], heap[c]] = [heap[c], heap[i]]; i = c; } } return top; }
  addNum(num) { this.push(this.low, num, true); this.push(this.high, this.pop(this.low, true), false); if (this.high.length > this.low.length + 1) this.push(this.low, this.pop(this.high, false), true); }
  findMedian() { return this.high.length > this.low.length ? this.high[0] : (this.low[0] + this.high[0]) / 2; }
}`,
  'add-binary': `function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, out = '';
  while (i >= 0 || j >= 0 || carry) { const sum = (i >= 0 ? Number(a[i--]) : 0) + (j >= 0 ? Number(b[j--]) : 0) + carry; out = (sum % 2) + out; carry = Math.floor(sum / 2); }
  return out;
}`,
  'reverse-bits': `function reverseBits(n) {
  let out = 0;
  for (let i = 0; i < 32; i++) { out = (out << 1) | (n & 1); n >>>= 1; }
  return out >>> 0;
}`,
  'number-of-1-bits': `function hammingWeight(n) {
  let count = 0;
  while (n) { n &= n - 1; count++; }
  return count;
}`,
  'single-number': `function singleNumber(nums) {
  return nums.reduce((x, n) => x ^ n, 0);
}`,
  'single-number-ii': `function singleNumber(nums) {
  let ones = 0, twos = 0;
  for (const x of nums) { ones = (ones ^ x) & ~twos; twos = (twos ^ x) & ~ones; }
  return ones;
}`,
  'bitwise-and-of-numbers-range': `function rangeBitwiseAnd(left, right) {
  let shift = 0;
  while (left < right) { left >>>= 1; right >>>= 1; shift++; }
  return left << shift;
}`,
  'palindrome-number': `function isPalindrome(x) {
  if (x < 0 || x % 10 === 0 && x !== 0) return false;
  let reversed = 0;
  while (x > reversed) { reversed = reversed * 10 + x % 10; x = Math.floor(x / 10); }
  return x === reversed || x === Math.floor(reversed / 10);
}`,
  'plus-one': `function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) { if (digits[i] < 9) { digits[i]++; return digits; } digits[i] = 0; }
  digits.unshift(1); return digits;
}`,
  'factorial-trailing-zeroes': `function trailingZeroes(n) {
  let count = 0;
  while (n) { n = Math.floor(n / 5); count += n; }
  return count;
}`,
  'sqrtx': `function mySqrt(x) {
  let l = 0, r = x;
  while (l <= r) { const m = Math.floor((l + r) / 2); if (m <= x / Math.max(m, 1)) l = m + 1; else r = m - 1; }
  return r;
}`,
  'powx-n': `function myPow(x, n) {
  if (n < 0) { x = 1 / x; n = -n; }
  let result = 1;
  while (n > 0) { if (n % 2) result *= x; x *= x; n = Math.floor(n / 2); }
  return result;
}`,
  'max-points-on-a-line': `function maxPoints(points) {
  let best = 0;
  for (let i = 0; i < points.length; i++) { const slopes = new Map(); let same = 1, local = 0;
    for (let j = i + 1; j < points.length; j++) { let dx = points[j][0] - points[i][0], dy = points[j][1] - points[i][1]; if (!dx && !dy) { same++; continue; } const g = (a, b) => b ? g(b, a % b) : Math.abs(a); const d = g(dx, dy); dx /= d; dy /= d; if (dx < 0 || dx === 0 && dy < 0) { dx = -dx; dy = -dy; } const key = dx + ',' + dy; slopes.set(key, (slopes.get(key) || 0) + 1); local = Math.max(local, slopes.get(key)); }
    best = Math.max(best, local + same);
  }
  return best;
}`,
  'climbing-stairs': `function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}`,
  'house-robber': `function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (const n of nums) [prev2, prev1] = [prev1, Math.max(prev1, prev2 + n)];
  return prev1;
}`,
  'word-break': `function wordBreak(s, wordDict) {
  const words = new Set(wordDict), dp = Array(s.length + 1).fill(false); dp[0] = true;
  for (let i = 1; i <= s.length; i++) for (let j = 0; j < i; j++) if (dp[j] && words.has(s.slice(j, i))) { dp[i] = true; break; }
  return dp[s.length];
}`,
  'coin-change': `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity); dp[0] = 0;
  for (let a = 1; a <= amount; a++) for (const coin of coins) if (coin <= a) dp[a] = Math.min(dp[a], dp[a - coin] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
  'longest-increasing-subsequence': `function lengthOfLIS(nums) {
  const tails = [];
  for (const x of nums) { let l = 0, r = tails.length; while (l < r) { const m = (l + r) >> 1; if (tails[m] < x) l = m + 1; else r = m; } tails[l] = x; }
  return tails.length;
}`,
  'triangle': `function minimumTotal(triangle) {
  const dp = triangle[triangle.length - 1].slice();
  for (let r = triangle.length - 2; r >= 0; r--) for (let c = 0; c <= r; c++) dp[c] = triangle[r][c] + Math.min(dp[c], dp[c + 1]);
  return dp[0];
}`,
  'minimum-path-sum': `function minPathSum(grid) {
  const m = grid.length, n = grid[0].length, dp = Array(n).fill(Infinity); dp[0] = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) dp[c] = grid[r][c] + Math.min(dp[c], c ? dp[c - 1] : Infinity);
  return dp[n - 1];
}`,
  'unique-paths-ii': `function uniquePathsWithObstacles(grid) {
  const dp = Array(grid[0].length).fill(0); dp[0] = grid[0][0] ? 0 : 1;
  for (const row of grid) for (let c = 0; c < row.length; c++) { if (row[c]) dp[c] = 0; else if (c) dp[c] += dp[c - 1]; }
  return dp[dp.length - 1];
}`,
  'longest-palindromic-substring': `function longestPalindrome(s) {
  let start = 0, length = 0;
  const expand = (l, r) => { while (l >= 0 && r < s.length && s[l] === s[r]) { if (r - l + 1 > length) { start = l; length = r - l + 1; } l--; r++; } };
  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }
  return s.slice(start, start + length);
}`,
  'interleaving-string': `function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = Array(s2.length + 1).fill(false); dp[0] = true;
  for (let j = 1; j <= s2.length; j++) dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  for (let i = 1; i <= s1.length; i++) { dp[0] = dp[0] && s1[i - 1] === s3[i - 1]; for (let j = 1; j <= s2.length; j++) dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1] || dp[j - 1] && s2[j - 1] === s3[i + j - 1]; }
  return dp[s2.length];
}`,
  'edit-distance': `function minDistance(word1, word2) {
  let dp = Array.from({ length: word2.length + 1 }, (_, i) => i);
  for (let i = 1; i <= word1.length; i++) { const next = [i]; for (let j = 1; j <= word2.length; j++) next[j] = word1[i - 1] === word2[j - 1] ? dp[j - 1] : 1 + Math.min(dp[j - 1], dp[j], next[j - 1]); dp = next; }
  return dp[word2.length];
}`,
  'best-time-to-buy-and-sell-stock-iii': `function maxProfit(prices) {
  let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;
  for (const p of prices) { buy1 = Math.max(buy1, -p); sell1 = Math.max(sell1, buy1 + p); buy2 = Math.max(buy2, sell1 - p); sell2 = Math.max(sell2, buy2 + p); }
  return sell2;
}`,
  'best-time-to-buy-and-sell-stock-iv': `function maxProfit(k, prices) {
  if (k >= prices.length / 2) { let profit = 0; for (let i = 1; i < prices.length; i++) profit += Math.max(0, prices[i] - prices[i - 1]); return profit; }
  const buy = Array(k + 1).fill(-Infinity), sell = Array(k + 1).fill(0);
  for (const p of prices) for (let t = 1; t <= k; t++) { buy[t] = Math.max(buy[t], sell[t - 1] - p); sell[t] = Math.max(sell[t], buy[t] + p); }
  return sell[k];
}`,
  'maximal-square': `function maximalSquare(matrix) {
  const cols = matrix[0].length, dp = Array(cols + 1).fill(0); let best = 0, prev = 0;
  for (const row of matrix) { prev = 0; for (let c = 1; c <= cols; c++) { const old = dp[c]; dp[c] = row[c - 1] === '1' ? 1 + Math.min(dp[c], dp[c - 1], prev) : 0; best = Math.max(best, dp[c]); prev = old; } }
  return best * best;
}`,
};
