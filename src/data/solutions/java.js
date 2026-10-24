export const javaSolutions = {
  'merge-sorted-array': String.raw`class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (j >= 0) nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
}`,
  'remove-element': String.raw`class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int x : nums) if (x != val) nums[k++] = x;
        return k;
    }
}`,
  'remove-duplicates-from-sorted-array': String.raw`class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        for (int x : nums) if (k == 0 || nums[k - 1] != x) nums[k++] = x;
        return k;
    }
}`,
  'remove-duplicates-from-sorted-array-ii': String.raw`class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        for (int x : nums) if (k < 2 || nums[k - 2] != x) nums[k++] = x;
        return k;
    }
}`,
  'majority-element': String.raw`class Solution {
    public int majorityElement(int[] nums) {
        int candidate = 0, count = 0;
        for (int x : nums) {
            if (count == 0) candidate = x;
            count += x == candidate ? 1 : -1;
        }
        return candidate;
    }
}`,
  'rotate-array': String.raw`class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k %= n;
        reverse(nums, 0, n - 1); reverse(nums, 0, k - 1); reverse(nums, k, n - 1);
    }
    private void reverse(int[] a, int l, int r) {
        while (l < r) { int t = a[l]; a[l++] = a[r]; a[r--] = t; }
    }
}`,
  'best-time-to-buy-and-sell-stock': String.raw`class Solution {
    public int maxProfit(int[] prices) {
        int low = Integer.MAX_VALUE, best = 0;
        for (int p : prices) { low = Math.min(low, p); best = Math.max(best, p - low); }
        return best;
    }
}`,
  'best-time-to-buy-and-sell-stock-ii': String.raw`class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        for (int i = 1; i < prices.length; i++) profit += Math.max(0, prices[i] - prices[i - 1]);
        return profit;
    }
}`,
  'jump-game': String.raw`class Solution {
    public boolean canJump(int[] nums) {
        int reach = 0;
        for (int i = 0; i < nums.length && i <= reach; i++) {
            reach = Math.max(reach, i + nums[i]);
            if (reach >= nums.length - 1) return true;
        }
        return nums.length == 1;
    }
}`,
  'jump-game-ii': String.raw`class Solution {
    public int jump(int[] nums) {
        int jumps = 0, end = 0, farthest = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
            if (i == end) { jumps++; end = farthest; }
        }
        return jumps;
    }
}`,
  'h-index': String.raw`class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length, h = 0;
        int[] buckets = new int[n + 1];
        for (int c : citations) buckets[Math.min(c, n)]++;
        for (int i = n; i >= 0; i--) { h += buckets[i]; if (h >= i) return i; }
        return 0;
    }
}`,
  'insert-delete-getrandom-o1': String.raw`import java.util.*;
class RandomizedSet {
    private final List<Integer> values = new ArrayList<>();
    private final Map<Integer, Integer> index = new HashMap<>();
    private final Random random = new Random();
    public boolean insert(int val) {
        if (index.containsKey(val)) return false;
        index.put(val, values.size()); values.add(val); return true;
    }
    public boolean remove(int val) {
        Integer i = index.remove(val);
        if (i == null) return false;
        int last = values.remove(values.size() - 1);
        if (i < values.size()) { values.set(i, last); index.put(last, i); }
        return true;
    }
    public int getRandom() { return values.get(random.nextInt(values.size())); }
}`,
  'product-of-array-except-self': String.raw`class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] out = new int[nums.length];
        int p = 1;
        for (int i = 0; i < nums.length; i++) { out[i] = p; p *= nums[i]; }
        p = 1;
        for (int i = nums.length - 1; i >= 0; i--) { out[i] *= p; p *= nums[i]; }
        return out;
    }
}`,
  'gas-station': String.raw`class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0, tank = 0, start = 0;
        for (int i = 0; i < gas.length; i++) {
            int d = gas[i] - cost[i]; total += d; tank += d;
            if (tank < 0) { start = i + 1; tank = 0; }
        }
        return total < 0 ? -1 : start;
    }
}`,
  'candy': String.raw`class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] c = new int[n]; java.util.Arrays.fill(c, 1);
        for (int i = 1; i < n; i++) if (ratings[i] > ratings[i - 1]) c[i] = c[i - 1] + 1;
        for (int i = n - 2; i >= 0; i--) if (ratings[i] > ratings[i + 1]) c[i] = Math.max(c[i], c[i + 1] + 1);
        int sum = 0; for (int x : c) sum += x; return sum;
    }
}`,
  'trapping-rain-water': String.raw`class Solution {
    public int trap(int[] height) {
        int l = 0, r = height.length - 1, left = 0, right = 0, water = 0;
        while (l < r) {
            if (height[l] < height[r]) { left = Math.max(left, height[l]); water += left - height[l++]; }
            else { right = Math.max(right, height[r]); water += right - height[r--]; }
        }
        return water;
    }
}`,
  'roman-to-integer': String.raw`class Solution {
    public int romanToInt(String s) {
        int total = 0, prev = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            int v = switch (s.charAt(i)) { case 'I' -> 1; case 'V' -> 5; case 'X' -> 10; case 'L' -> 50; case 'C' -> 100; case 'D' -> 500; default -> 1000; };
            total += v < prev ? -v : v; prev = v;
        }
        return total;
    }
}`,
  'integer-to-roman': String.raw`class Solution {
    public String intToRoman(int num) {
        int[] v = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
        String[] s = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
        StringBuilder out = new StringBuilder();
        for (int i = 0; i < v.length; i++) while (num >= v[i]) { num -= v[i]; out.append(s[i]); }
        return out.toString();
    }
}`,
  'length-of-last-word': String.raw`class Solution {
    public int lengthOfLastWord(String s) {
        int i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == ' ') i--;
        int end = i;
        while (i >= 0 && s.charAt(i) != ' ') i--;
        return end - i;
    }
}`,
  'longest-common-prefix': String.raw`class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String p = strs[0];
        for (int i = 1; i < strs.length; i++) while (!strs[i].startsWith(p)) p = p.substring(0, p.length() - 1);
        return p;
    }
}`,
  'reverse-words-in-a-string': String.raw`class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");
        StringBuilder out = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) { if (out.length() > 0) out.append(' '); out.append(words[i]); }
        return out.toString();
    }
}`,
  'zigzag-conversion': String.raw`class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1 || numRows >= s.length()) return s;
        StringBuilder[] rows = new StringBuilder[numRows];
        for (int i = 0; i < numRows; i++) rows[i] = new StringBuilder();
        int r = 0, step = 1;
        for (char c : s.toCharArray()) {
            rows[r].append(c); if (r == 0) step = 1; else if (r == numRows - 1) step = -1; r += step;
        }
        StringBuilder out = new StringBuilder(); for (StringBuilder row : rows) out.append(row);
        return out.toString();
    }
}`,
  'find-the-index-of-the-first-occurrence-in-a-string': String.raw`class Solution {
    public int strStr(String haystack, String needle) {
        return haystack.indexOf(needle);
    }
}`,
  'text-justification': String.raw`import java.util.*;
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> out = new ArrayList<>();
        for (int i = 0; i < words.length;) {
            int j = i + 1, letters = words[i].length();
            while (j < words.length && letters + words[j].length() + (j - i) <= maxWidth) letters += words[j++].length();
            int gaps = j - i - 1;
            StringBuilder line = new StringBuilder(words[i]);
            if (j == words.length || gaps == 0) {
                while (++i < j) line.append(' ').append(words[i]);
                while (line.length() < maxWidth) line.append(' ');
            } else {
                int spaces = maxWidth - letters, each = spaces / gaps, extra = spaces % gaps;
                for (int k = i + 1; k < j; k++) { line.append(" ".repeat(each + (k - i <= extra ? 1 : 0))).append(words[k]); }
                i = j;
            }
            out.add(line.toString());
        }
        return out;
    }
}`,
  'valid-palindrome': String.raw`class Solution {
    public boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
            if (Character.toLowerCase(s.charAt(l++)) != Character.toLowerCase(s.charAt(r--))) return false;
        }
        return true;
    }
}`,
  'is-subsequence': String.raw`class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0;
        for (int j = 0; i < s.length() && j < t.length(); j++) if (s.charAt(i) == t.charAt(j)) i++;
        return i == s.length();
    }
}`,
  'two-sum-ii-input-array-is-sorted': String.raw`class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0, r = numbers.length - 1;
        while (l < r) { int sum = numbers[l] + numbers[r]; if (sum == target) return new int[]{l + 1, r + 1}; if (sum < target) l++; else r--; }
        return new int[0];
    }
}`,
  'container-with-most-water': String.raw`class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1, best = 0;
        while (l < r) { best = Math.max(best, Math.min(height[l], height[r]) * (r - l)); if (height[l] < height[r]) l++; else r--; }
        return best;
    }
}`,
  '3sum': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums); List<List<Integer>> out = new ArrayList<>();
        for (int i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) { out.add(Arrays.asList(nums[i], nums[l], nums[r])); int a = nums[l], b = nums[r]; while (l < r && nums[l] == a) l++; while (l < r && nums[r] == b) r--; }
                else if (sum < 0) l++; else r--;
            }
        }
        return out;
    }
}`,
  'minimum-size-subarray-sum': String.raw`class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l = 0, sum = 0, best = nums.length + 1;
        for (int r = 0; r < nums.length; r++) {
            sum += nums[r];
            while (sum >= target) { best = Math.min(best, r - l + 1); sum -= nums[l++]; }
        }
        return best == nums.length + 1 ? 0 : best;
    }
}`,
  'longest-substring-without-repeating-characters': String.raw`class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] last = new int[128]; java.util.Arrays.fill(last, -1);
        int left = 0, best = 0;
        for (int i = 0; i < s.length(); i++) { char c = s.charAt(i); left = Math.max(left, last[c] + 1); last[c] = i; best = Math.max(best, i - left + 1); }
        return best;
    }
}`,
  'substring-with-concatenation-of-all-words': String.raw`import java.util.*;
class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> out = new ArrayList<>(); if (words.length == 0) return out;
        int w = words[0].length(), total = w * words.length; if (s.length() < total) return out;
        Map<String,Integer> need = new HashMap<>(); for (String x : words) need.merge(x, 1, Integer::sum);
        for (int off = 0; off < w; off++) {
            Map<String,Integer> have = new HashMap<>(); int left = off, count = 0;
            for (int right = off; right + w <= s.length(); right += w) {
                String x = s.substring(right, right + w);
                if (!need.containsKey(x)) { have.clear(); count = 0; left = right + w; continue; }
                have.merge(x, 1, Integer::sum); count++;
                while (have.get(x) > need.get(x)) { String y = s.substring(left, left + w); have.put(y, have.get(y) - 1); left += w; count--; }
                if (count == words.length) { out.add(left); String y = s.substring(left, left + w); have.put(y, have.get(y) - 1); left += w; count--; }
            }
        }
        return out;
    }
}`,
  'minimum-window-substring': String.raw`class Solution {
    public String minWindow(String s, String t) {
        int[] need = new int[128]; for (char c : t.toCharArray()) need[c]++;
        int missing = t.length(), left = 0, start = 0, best = Integer.MAX_VALUE;
        for (int right = 0; right < s.length(); right++) {
            if (need[s.charAt(right)]-- > 0) missing--;
            while (missing == 0) {
                if (right - left + 1 < best) { best = right - left + 1; start = left; }
                if (++need[s.charAt(left++)] > 0) missing++;
            }
        }
        return best == Integer.MAX_VALUE ? "" : s.substring(start, start + best);
    }
}`,
  'valid-sudoku': String.raw`class Solution {
    public boolean isValidSudoku(char[][] board) {
        boolean[][] row = new boolean[9][9], col = new boolean[9][9], box = new boolean[9][9];
        for (int r = 0; r < 9; r++) for (int c = 0; c < 9; c++) if (board[r][c] != '.') {
            int d = board[r][c] - '1', b = r / 3 * 3 + c / 3;
            if (row[r][d] || col[c][d] || box[b][d]) return false;
            row[r][d] = col[c][d] = box[b][d] = true;
        }
        return true;
    }
}`,
  'spiral-matrix': String.raw`import java.util.*;
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> out = new ArrayList<>(); int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
        while (top <= bottom && left <= right) {
            for (int c = left; c <= right; c++) out.add(matrix[top][c]); top++;
            for (int r = top; r <= bottom; r++) out.add(matrix[r][right]); right--;
            if (top <= bottom) { for (int c = right; c >= left; c--) out.add(matrix[bottom][c]); bottom--; }
            if (left <= right) { for (int r = bottom; r >= top; r--) out.add(matrix[r][left]); left++; }
        }
        return out;
    }
}`,
  'rotate-image': String.raw`class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int r = 0; r < n; r++) for (int c = r + 1; c < n; c++) { int t = matrix[r][c]; matrix[r][c] = matrix[c][r]; matrix[c][r] = t; }
        for (int[] row : matrix) for (int l = 0, r = n - 1; l < r; l++, r--) { int t = row[l]; row[l] = row[r]; row[r] = t; }
    }
}`,
  'set-matrix-zeroes': String.raw`class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length; boolean firstRow = false, firstCol = false;
        for (int c = 0; c < n; c++) if (matrix[0][c] == 0) firstRow = true;
        for (int r = 0; r < m; r++) if (matrix[r][0] == 0) firstCol = true;
        for (int r = 1; r < m; r++) for (int c = 1; c < n; c++) if (matrix[r][c] == 0) matrix[r][0] = matrix[0][c] = 0;
        for (int r = 1; r < m; r++) for (int c = 1; c < n; c++) if (matrix[r][0] == 0 || matrix[0][c] == 0) matrix[r][c] = 0;
        if (firstRow) java.util.Arrays.fill(matrix[0], 0);
        if (firstCol) for (int[] row : matrix) row[0] = 0;
    }
}`,
  'game-of-life': String.raw`class Solution {
    public void gameOfLife(int[][] board) {
        int m = board.length, n = board[0].length;
        for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {
            int live = 0;
            for (int dr = -1; dr <= 1; dr++) for (int dc = -1; dc <= 1; dc++) if (dr != 0 || dc != 0) {
                int y = r + dr, x = c + dc; if (y >= 0 && y < m && x >= 0 && x < n && (board[y][x] & 1) == 1) live++;
            }
            if ((board[r][c] & 1) == 1 ? live == 2 || live == 3 : live == 3) board[r][c] |= 2;
        }
        for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) board[r][c] >>= 1;
    }
}`,
  'ransom-note': String.raw`class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] count = new int[26]; for (char c : magazine.toCharArray()) count[c - 'a']++;
        for (char c : ransomNote.toCharArray()) if (--count[c - 'a'] < 0) return false;
        return true;
    }
}`,
  'isomorphic-strings': String.raw`class Solution {
    public boolean isIsomorphic(String s, String t) {
        int[] a = new int[256], b = new int[256];
        for (int i = 0; i < s.length(); i++) { char x = s.charAt(i), y = t.charAt(i); if (a[x] != b[y]) return false; a[x] = b[y] = i + 1; }
        return true;
    }
}`,
  'word-pattern': String.raw`import java.util.*;
class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] words = s.split(" "); if (words.length != pattern.length()) return false;
        Map<Character,String> a = new HashMap<>(); Map<String,Character> b = new HashMap<>();
        for (int i = 0; i < words.length; i++) {
            char c = pattern.charAt(i);
            if (a.containsKey(c) && !a.get(c).equals(words[i]) || b.containsKey(words[i]) && b.get(words[i]) != c) return false;
            a.put(c, words[i]); b.put(words[i], c);
        }
        return true;
    }
}`,
  'valid-anagram': String.raw`class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26]; for (char c : s.toCharArray()) count[c - 'a']++;
        for (char c : t.toCharArray()) if (--count[c - 'a'] < 0) return false;
        return true;
    }
}`,
  'group-anagrams': String.raw`import java.util.*;
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String,List<String>> groups = new HashMap<>();
        for (String s : strs) { char[] a = s.toCharArray(); Arrays.sort(a); groups.computeIfAbsent(new String(a), k -> new ArrayList<>()).add(s); }
        return new ArrayList<>(groups.values());
    }
}`,
  'two-sum': String.raw`import java.util.*;
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) { if (seen.containsKey(target - nums[i])) return new int[]{seen.get(target - nums[i]), i}; seen.put(nums[i], i); }
        return new int[0];
    }
}`,
  'happy-number': String.raw`class Solution {
    public boolean isHappy(int n) {
        int slow = n, fast = n;
        do { slow = next(slow); fast = next(next(fast)); } while (slow != fast);
        return slow == 1;
    }
    private int next(int n) { int sum = 0; while (n > 0) { int d = n % 10; sum += d * d; n /= 10; } return sum; }
}`,
  'contains-duplicate-ii': String.raw`import java.util.*;
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer,Integer> last = new HashMap<>();
        for (int i = 0; i < nums.length; i++) { if (last.containsKey(nums[i]) && i - last.get(nums[i]) <= k) return true; last.put(nums[i], i); }
        return false;
    }
}`,
  'longest-consecutive-sequence': String.raw`import java.util.*;
class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>(); for (int x : nums) set.add(x);
        int best = 0;
        for (int x : set) if (!set.contains(x - 1)) { int y = x; while (set.contains(y)) y++; best = Math.max(best, y - x); }
        return best;
    }
}`,
  'summary-ranges': String.raw`import java.util.*;
class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> out = new ArrayList<>();
        for (int i = 0; i < nums.length;) {
            int start = nums[i], j = i;
            while (j + 1 < nums.length && (long) nums[j + 1] == (long) nums[j] + 1) j++;
            out.add(start == nums[j] ? String.valueOf(start) : start + "->" + nums[j]); i = j + 1;
        }
        return out;
    }
}`,
  'merge-intervals': String.raw`import java.util.*;
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> out = new ArrayList<>();
        for (int[] x : intervals) {
            if (out.isEmpty() || out.get(out.size() - 1)[1] < x[0]) out.add(x.clone());
            else out.get(out.size() - 1)[1] = Math.max(out.get(out.size() - 1)[1], x[1]);
        }
        return out.toArray(new int[out.size()][]);
    }
}`,
  'insert-interval': String.raw`import java.util.*;
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> out = new ArrayList<>(); int i = 0, n = intervals.length;
        while (i < n && intervals[i][1] < newInterval[0]) out.add(intervals[i++]);
        while (i < n && intervals[i][0] <= newInterval[1]) { newInterval[0] = Math.min(newInterval[0], intervals[i][0]); newInterval[1] = Math.max(newInterval[1], intervals[i][1]); i++; }
        out.add(newInterval); while (i < n) out.add(intervals[i++]);
        return out.toArray(new int[out.size()][]);
    }
}`,
  'minimum-number-of-arrows-to-burst-balloons': String.raw`import java.util.*;
class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length == 0) return 0;
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        int arrows = 1; long end = points[0][1];
        for (int[] p : points) if (p[0] > end) { arrows++; end = p[1]; }
        return arrows;
    }
}`,
  'valid-parentheses': String.raw`import java.util.*;
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') stack.push(c);
            else if (stack.isEmpty() || c == ')' && stack.pop() != '(' || c == ']' && stack.pop() != '[' || c == '}' && stack.pop() != '{') return false;
        }
        return stack.isEmpty();
    }
}`,
  'simplify-path': String.raw`import java.util.*;
class Solution {
    public String simplifyPath(String path) {
        Deque<String> stack = new ArrayDeque<>();
        for (String part : path.split("/")) {
            if (part.isEmpty() || part.equals(".")) continue;
            if (part.equals("..")) { if (!stack.isEmpty()) stack.removeLast(); }
            else stack.addLast(part);
        }
        return "/" + String.join("/", stack);
    }
}`,
  'min-stack': String.raw`import java.util.*;
class MinStack {
    private final Deque<int[]> stack = new ArrayDeque<>();
    public void push(int val) { stack.push(new int[]{val, stack.isEmpty() ? val : Math.min(val, stack.peek()[1])}); }
    public void pop() { stack.pop(); }
    public int top() { return stack.peek()[0]; }
    public int getMin() { return stack.peek()[1]; }
}`,
  'evaluate-reverse-polish-notation': String.raw`import java.util.*;
class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();
        for (String t : tokens) {
            if (t.equals("+") || t.equals("-") || t.equals("*") || t.equals("/")) {
                int b = stack.pop(), a = stack.pop();
                stack.push(t.equals("+") ? a + b : t.equals("-") ? a - b : t.equals("*") ? a * b : a / b);
            } else stack.push(Integer.parseInt(t));
        }
        return stack.pop();
    }
}`,
  'basic-calculator': String.raw`class Solution {
    public int calculate(String s) {
        int result = 0, sign = 1, number = 0; java.util.Deque<Integer> stack = new java.util.ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) number = number * 10 + c - '0';
            else if (c == '+' || c == '-') { result += sign * number; number = 0; sign = c == '+' ? 1 : -1; }
            else if (c == '(') { stack.push(result); stack.push(sign); result = 0; sign = 1; }
            else if (c == ')') { result += sign * number; number = 0; result = stack.pop() * result + stack.pop(); }
        }
        return result + sign * number;
    }
}`,
  'linked-list-cycle': String.raw`public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; if (slow == fast) return true; }
        return false;
    }
}`,
  'add-two-numbers': String.raw`public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), tail = dummy; int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry + (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val);
            tail.next = new ListNode(sum % 10); tail = tail.next; carry = sum / 10;
            if (l1 != null) l1 = l1.next; if (l2 != null) l2 = l2.next;
        }
        return dummy.next;
    }
}`,
  'merge-two-sorted-lists': String.raw`public class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0), tail = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) { tail.next = list1; list1 = list1.next; }
            else { tail.next = list2; list2 = list2.next; }
            tail = tail.next;
        }
        tail.next = list1 == null ? list2 : list1;
        return dummy.next;
    }
}`,
  'copy-list-with-random-pointer': String.raw`import java.util.*;
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        Map<Node,Node> copy = new HashMap<>();
        for (Node p = head; p != null; p = p.next) copy.put(p, new Node(p.val));
        for (Node p = head; p != null; p = p.next) { copy.get(p).next = copy.get(p.next); copy.get(p).random = copy.get(p.random); }
        return copy.get(head);
    }
}`,
  'reverse-linked-list-ii': String.raw`public class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head), before = dummy;
        for (int i = 1; i < left; i++) before = before.next;
        ListNode curr = before.next;
        for (int i = 0; i < right - left; i++) { ListNode move = curr.next; curr.next = move.next; move.next = before.next; before.next = move; }
        return dummy.next;
    }
}`,
  'reverse-nodes-in-k-group': String.raw`public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0, head), groupPrev = dummy;
        while (true) {
            ListNode kth = groupPrev; for (int i = 0; i < k && kth != null; i++) kth = kth.next;
            if (kth == null) break;
            ListNode next = kth.next, prev = next, curr = groupPrev.next;
            while (curr != next) { ListNode temp = curr.next; curr.next = prev; prev = curr; curr = temp; }
            ListNode oldHead = groupPrev.next; groupPrev.next = kth; groupPrev = oldHead;
        }
        return dummy.next;
    }
}`,
  'remove-nth-node-from-end-of-list': String.raw`public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head), fast = dummy, slow = dummy;
        for (int i = 0; i < n; i++) fast = fast.next;
        while (fast.next != null) { fast = fast.next; slow = slow.next; }
        slow.next = slow.next.next; return dummy.next;
    }
}`,
  'remove-duplicates-from-sorted-list-ii': String.raw`public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0, head), prev = dummy;
        while (head != null) {
            if (head.next != null && head.val == head.next.val) {
                int value = head.val; while (head != null && head.val == value) head = head.next; prev.next = head;
            } else { prev = head; head = head.next; }
        }
        return dummy.next;
    }
}`,
  'rotate-list': String.raw`public class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) return head;
        int n = 1; ListNode tail = head; while (tail.next != null) { tail = tail.next; n++; }
        k %= n; if (k == 0) return head;
        tail.next = head; for (int i = 0; i < n - k; i++) tail = tail.next;
        ListNode newHead = tail.next; tail.next = null; return newHead;
    }
}`,
  'partition-list': String.raw`public class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode low = new ListNode(0), high = new ListNode(0), a = low, b = high;
        while (head != null) { if (head.val < x) { a.next = head; a = a.next; } else { b.next = head; b = b.next; } head = head.next; }
        b.next = null; a.next = high.next; return low.next;
    }
}`,
  'lru-cache': String.raw`import java.util.*;
class LRUCache {
    private final int capacity;
    private final LinkedHashMap<Integer,Integer> map;
    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new LinkedHashMap<>(16, 0.75f, true) {
            protected boolean removeEldestEntry(Map.Entry<Integer,Integer> e) { return size() > LRUCache.this.capacity; }
        };
    }
    public int get(int key) { return map.getOrDefault(key, -1); }
    public void put(int key, int value) { map.put(key, value); }
}`,
  'maximum-depth-of-binary-tree': String.raw`public class Solution {
    public int maxDepth(TreeNode root) {
        return root == null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}`,
  'same-tree': String.raw`public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null || q == null) return p == q;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}`,
  'invert-binary-tree': String.raw`public class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        TreeNode t = root.left; root.left = invertTree(root.right); root.right = invertTree(t); return root;
    }
}`,
  'symmetric-tree': String.raw`public class Solution {
    public boolean isSymmetric(TreeNode root) { return root == null || mirror(root.left, root.right); }
    private boolean mirror(TreeNode a, TreeNode b) {
        if (a == null || b == null) return a == b;
        return a.val == b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
    }
}`,
  'construct-binary-tree-from-preorder-and-inorder-traversal': String.raw`import java.util.*;
class Solution {
    private int pre;
    private Map<Integer,Integer> index;
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        pre = 0; index = new HashMap<>(); for (int i = 0; i < inorder.length; i++) index.put(inorder[i], i);
        return build(preorder, 0, inorder.length - 1);
    }
    private TreeNode build(int[] p, int l, int r) {
        if (l > r) return null;
        int v = p[pre++], m = index.get(v); TreeNode n = new TreeNode(v);
        n.left = build(p, l, m - 1); n.right = build(p, m + 1, r); return n;
    }
}`,
  'construct-binary-tree-from-inorder-and-postorder-traversal': String.raw`import java.util.*;
class Solution {
    private int post;
    private Map<Integer,Integer> index;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        post = postorder.length - 1; index = new HashMap<>(); for (int i = 0; i < inorder.length; i++) index.put(inorder[i], i);
        return build(postorder, 0, inorder.length - 1);
    }
    private TreeNode build(int[] p, int l, int r) {
        if (l > r) return null;
        int v = p[post--], m = index.get(v); TreeNode n = new TreeNode(v);
        n.right = build(p, m + 1, r); n.left = build(p, l, m - 1); return n;
    }
}`,
  'populating-next-right-pointers-in-each-node-ii': String.raw`public class Solution {
    public Node connect(Node root) {
        Node level = root;
        while (level != null) {
            Node dummy = new Node(0), tail = dummy;
            for (Node p = level; p != null; p = p.next) {
                if (p.left != null) { tail.next = p.left; tail = tail.next; }
                if (p.right != null) { tail.next = p.right; tail = tail.next; }
            }
            level = dummy.next;
        }
        return root;
    }
}`,
  'flatten-binary-tree-to-linked-list': String.raw`public class Solution {
    public void flatten(TreeNode root) {
        for (TreeNode p = root; p != null; p = p.right) if (p.left != null) {
            TreeNode tail = p.left; while (tail.right != null) tail = tail.right;
            tail.right = p.right; p.right = p.left; p.left = null;
        }
    }
}`,
  'path-sum': String.raw`public class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        if (root.left == null && root.right == null) return targetSum == root.val;
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
}`,
  'sum-root-to-leaf-numbers': String.raw`public class Solution {
    public int sumNumbers(TreeNode root) { return sum(root, 0); }
    private int sum(TreeNode n, int value) {
        if (n == null) return 0;
        value = value * 10 + n.val;
        if (n.left == null && n.right == null) return value;
        return sum(n.left, value) + sum(n.right, value);
    }
}`,
  'binary-tree-maximum-path-sum': String.raw`class Solution {
    private int best;
    public int maxPathSum(TreeNode root) { best = Integer.MIN_VALUE; gain(root); return best; }
    private int gain(TreeNode n) {
        if (n == null) return 0;
        int l = Math.max(0, gain(n.left)), r = Math.max(0, gain(n.right));
        best = Math.max(best, n.val + l + r); return n.val + Math.max(l, r);
    }
}`,
  'binary-search-tree-iterator': String.raw`import java.util.*;
class BSTIterator {
    private final Deque<TreeNode> stack = new ArrayDeque<>();
    public BSTIterator(TreeNode root) { pushLeft(root); }
    private void pushLeft(TreeNode n) { while (n != null) { stack.push(n); n = n.left; } }
    public int next() { TreeNode n = stack.pop(); pushLeft(n.right); return n.val; }
    public boolean hasNext() { return !stack.isEmpty(); }
}`,
  'count-complete-tree-nodes': String.raw`public class Solution {
    public int countNodes(TreeNode root) {
        if (root == null) return 0;
        int lh = 0, rh = 0; for (TreeNode n = root; n != null; n = n.left) lh++; for (TreeNode n = root; n != null; n = n.right) rh++;
        if (lh == rh) return (1 << lh) - 1;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}`,
  'lowest-common-ancestor-of-a-binary-tree': String.raw`public class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode l = lowestCommonAncestor(root.left, p, q), r = lowestCommonAncestor(root.right, p, q);
        return l == null ? r : r == null ? l : root;
    }
}`,
  'binary-tree-right-side-view': String.raw`import java.util.*;
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> out = new ArrayList<>(); if (root == null) return out;
        Queue<TreeNode> q = new ArrayDeque<>(); q.add(root);
        while (!q.isEmpty()) { int n = q.size(); for (int i = 0; i < n; i++) { TreeNode x = q.remove(); if (i == n - 1) out.add(x.val); if (x.left != null) q.add(x.left); if (x.right != null) q.add(x.right); } }
        return out;
    }
}`,
  'average-of-levels-in-binary-tree': String.raw`import java.util.*;
class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> out = new ArrayList<>(); Queue<TreeNode> q = new ArrayDeque<>(); q.add(root);
        while (!q.isEmpty()) {
            int n = q.size(); double sum = 0;
            for (int i = 0; i < n; i++) { TreeNode x = q.remove(); sum += x.val; if (x.left != null) q.add(x.left); if (x.right != null) q.add(x.right); }
            out.add(sum / n);
        }
        return out;
    }
}`,
  'binary-tree-level-order-traversal': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> out = new ArrayList<>(); if (root == null) return out;
        Queue<TreeNode> q = new ArrayDeque<>(); q.add(root);
        while (!q.isEmpty()) {
            int n = q.size(); List<Integer> level = new ArrayList<>();
            for (int i = 0; i < n; i++) { TreeNode x = q.remove(); level.add(x.val); if (x.left != null) q.add(x.left); if (x.right != null) q.add(x.right); }
            out.add(level);
        }
        return out;
    }
}`,
  'binary-tree-zigzag-level-order-traversal': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> out = new ArrayList<>(); if (root == null) return out;
        Queue<TreeNode> q = new ArrayDeque<>(); q.add(root); boolean reverse = false;
        while (!q.isEmpty()) {
            int n = q.size(); LinkedList<Integer> level = new LinkedList<>();
            for (int i = 0; i < n; i++) { TreeNode x = q.remove(); if (reverse) level.addFirst(x.val); else level.addLast(x.val); if (x.left != null) q.add(x.left); if (x.right != null) q.add(x.right); }
            out.add(level); reverse = !reverse;
        }
        return out;
    }
}`,
  'minimum-absolute-difference-in-bst': String.raw`class Solution {
    private int prev = -1, best = Integer.MAX_VALUE;
    public int getMinimumDifference(TreeNode root) { inorder(root); return best; }
    private void inorder(TreeNode n) { if (n == null) return; inorder(n.left); if (prev != -1) best = Math.min(best, n.val - prev); prev = n.val; inorder(n.right); }
}`,
  'kth-smallest-element-in-a-bst': String.raw`import java.util.*;
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        Deque<TreeNode> s = new ArrayDeque<>(); TreeNode n = root;
        while (n != null || !s.isEmpty()) { while (n != null) { s.push(n); n = n.left; } n = s.pop(); if (--k == 0) return n.val; n = n.right; }
        return -1;
    }
}`,
  'validate-binary-search-tree': String.raw`class Solution {
    public boolean isValidBST(TreeNode root) { return valid(root, Long.MIN_VALUE, Long.MAX_VALUE); }
    private boolean valid(TreeNode n, long low, long high) {
        if (n == null) return true;
        return n.val > low && n.val < high && valid(n.left, low, n.val) && valid(n.right, n.val, high);
    }
}`,
  'number-of-islands': String.raw`class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int r = 0; r < grid.length; r++) for (int c = 0; c < grid[0].length; c++) if (grid[r][c] == '1') { count++; sink(grid, r, c); }
        return count;
    }
    private void sink(char[][] g, int r, int c) {
        if (r < 0 || r == g.length || c < 0 || c == g[0].length || g[r][c] != '1') return;
        g[r][c] = '0'; sink(g, r + 1, c); sink(g, r - 1, c); sink(g, r, c + 1); sink(g, r, c - 1);
    }
}`,
  'surrounded-regions': String.raw`class Solution {
    public void solve(char[][] board) {
        int m = board.length, n = board[0].length;
        for (int r = 0; r < m; r++) { mark(board, r, 0); mark(board, r, n - 1); }
        for (int c = 0; c < n; c++) { mark(board, 0, c); mark(board, m - 1, c); }
        for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) board[r][c] = board[r][c] == '#' ? 'O' : 'X';
    }
    private void mark(char[][] b, int r, int c) {
        if (r < 0 || r == b.length || c < 0 || c == b[0].length || b[r][c] != 'O') return;
        b[r][c] = '#'; mark(b, r + 1, c); mark(b, r - 1, c); mark(b, r, c + 1); mark(b, r, c - 1);
    }
}`,
  'clone-graph': String.raw`import java.util.*;
class Solution {
    public Node cloneGraph(Node node) { return clone(node, new HashMap<>()); }
    private Node clone(Node n, Map<Node,Node> copies) {
        if (n == null) return null; if (copies.containsKey(n)) return copies.get(n);
        Node c = new Node(n.val); copies.put(n, c);
        for (Node neighbor : n.neighbors) c.neighbors.add(clone(neighbor, copies));
        return c;
    }
}`,
  'evaluate-division': String.raw`import java.util.*;
class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String,Map<String,Double>> graph = new HashMap<>();
        for (int i = 0; i < values.length; i++) {
            String a = equations.get(i).get(0), b = equations.get(i).get(1);
            graph.computeIfAbsent(a, k -> new HashMap<>()).put(b, values[i]);
            graph.computeIfAbsent(b, k -> new HashMap<>()).put(a, 1.0 / values[i]);
        }
        double[] out = new double[queries.size()];
        for (int i = 0; i < out.length; i++) out[i] = dfs(queries.get(i).get(0), queries.get(i).get(1), graph, new HashSet<>());
        return out;
    }
    private double dfs(String a, String b, Map<String,Map<String,Double>> g, Set<String> seen) {
        if (!g.containsKey(a) || !g.containsKey(b)) return -1.0; if (a.equals(b)) return 1.0; seen.add(a);
        for (Map.Entry<String,Double> e : g.get(a).entrySet()) if (!seen.contains(e.getKey())) { double x = dfs(e.getKey(), b, g, seen); if (x != -1.0) return e.getValue() * x; }
        return -1.0;
    }
}`,
  'course-schedule': String.raw`import java.util.*;
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> g = new ArrayList<>(); int[] in = new int[numCourses];
        for (int i = 0; i < numCourses; i++) g.add(new ArrayList<>());
        for (int[] p : prerequisites) { g.get(p[1]).add(p[0]); in[p[0]]++; }
        Queue<Integer> q = new ArrayDeque<>(); for (int i = 0; i < numCourses; i++) if (in[i] == 0) q.add(i);
        int done = 0; while (!q.isEmpty()) { int u = q.remove(); done++; for (int v : g.get(u)) if (--in[v] == 0) q.add(v); }
        return done == numCourses;
    }
}`,
  'course-schedule-ii': String.raw`import java.util.*;
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> g = new ArrayList<>(); int[] in = new int[numCourses], order = new int[numCourses];
        for (int i = 0; i < numCourses; i++) g.add(new ArrayList<>());
        for (int[] p : prerequisites) { g.get(p[1]).add(p[0]); in[p[0]]++; }
        Queue<Integer> q = new ArrayDeque<>(); for (int i = 0; i < numCourses; i++) if (in[i] == 0) q.add(i);
        int k = 0; while (!q.isEmpty()) { int u = q.remove(); order[k++] = u; for (int v : g.get(u)) if (--in[v] == 0) q.add(v); }
        return k == numCourses ? order : new int[0];
    }
}`,
  'snakes-and-ladders': String.raw`import java.util.*;
class Solution {
    public int snakesAndLadders(int[][] board) {
        int n = board.length, target = n * n; boolean[] seen = new boolean[target + 1]; Queue<Integer> q = new ArrayDeque<>(); q.add(1); seen[1] = true;
        for (int moves = 0; !q.isEmpty(); moves++) for (int size = q.size(); size > 0; size--) {
            int x = q.remove(); if (x == target) return moves;
            for (int y = x + 1; y <= Math.min(x + 6, target); y++) {
                int row = n - 1 - (y - 1) / n, col = (y - 1) % n; if (((n - 1 - row) & 1) == 1) col = n - 1 - col;
                int z = board[row][col] == -1 ? y : board[row][col]; if (!seen[z]) { seen[z] = true; q.add(z); }
            }
        }
        return -1;
    }
}`,
  'minimum-genetic-mutation': String.raw`import java.util.*;
class Solution {
    public int minMutation(String startGene, String endGene, String[] bank) {
        Set<String> allowed = new HashSet<>(Arrays.asList(bank)); if (!allowed.contains(endGene)) return -1;
        char[] alphabet = {'A','C','G','T'}; Queue<String> q = new ArrayDeque<>(); q.add(startGene); Set<String> seen = new HashSet<>(); seen.add(startGene);
        for (int steps = 0; !q.isEmpty(); steps++) for (int size = q.size(); size > 0; size--) {
            String s = q.remove(); if (s.equals(endGene)) return steps; char[] a = s.toCharArray();
            for (int i = 0; i < a.length; i++) { char old = a[i]; for (char c : alphabet) if (c != old) { a[i] = c; String t = new String(a); if (allowed.contains(t) && seen.add(t)) q.add(t); } a[i] = old; }
        }
        return -1;
    }
}`,
  'word-ladder': String.raw`import java.util.*;
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> words = new HashSet<>(wordList); if (!words.contains(endWord)) return 0;
        Queue<String> q = new ArrayDeque<>(); q.add(beginWord); Set<String> seen = new HashSet<>(); seen.add(beginWord);
        for (int len = 1; !q.isEmpty(); len++) for (int size = q.size(); size > 0; size--) {
            char[] a = q.remove().toCharArray(); String current = new String(a); if (current.equals(endWord)) return len;
            for (int i = 0; i < a.length; i++) { char old = a[i]; for (char c = 'a'; c <= 'z'; c++) { a[i] = c; String next = new String(a); if (words.contains(next) && seen.add(next)) q.add(next); } a[i] = old; }
        }
        return 0;
    }
}`,
  'implement-trie-prefix-tree': String.raw`class Trie {
    private static class Node { Node[] next = new Node[26]; boolean word; }
    private final Node root = new Node();
    public Trie() {}
    public void insert(String word) { Node n = root; for (char c : word.toCharArray()) { int i = c - 'a'; if (n.next[i] == null) n.next[i] = new Node(); n = n.next[i]; } n.word = true; }
    public boolean search(String word) { Node n = find(word); return n != null && n.word; }
    public boolean startsWith(String prefix) { return find(prefix) != null; }
    private Node find(String s) { Node n = root; for (char c : s.toCharArray()) { n = n.next[c - 'a']; if (n == null) return null; } return n; }
}`,
  'design-add-and-search-words-data-structure': String.raw`class WordDictionary {
    private static class Node { Node[] next = new Node[26]; boolean word; }
    private final Node root = new Node();
    public WordDictionary() {}
    public void addWord(String word) { Node n = root; for (char c : word.toCharArray()) { int i = c - 'a'; if (n.next[i] == null) n.next[i] = new Node(); n = n.next[i]; } n.word = true; }
    public boolean search(String word) { return search(word, 0, root); }
    private boolean search(String s, int i, Node n) {
        if (i == s.length()) return n.word;
        char c = s.charAt(i);
        if (c != '.') return n.next[c - 'a'] != null && search(s, i + 1, n.next[c - 'a']);
        for (Node child : n.next) if (child != null && search(s, i + 1, child)) return true;
        return false;
    }
}`,
  'word-search-ii': String.raw`import java.util.*;
class Solution {
    private static class Node { Node[] next = new Node[26]; String word; }
    private final Node root = new Node(); private final List<String> out = new ArrayList<>();
    public List<String> findWords(char[][] board, String[] words) {
        for (String w : words) { Node n = root; for (char c : w.toCharArray()) { int i = c - 'a'; if (n.next[i] == null) n.next[i] = new Node(); n = n.next[i]; } n.word = w; }
        for (int r = 0; r < board.length; r++) for (int c = 0; c < board[0].length; c++) dfs(board, r, c, root);
        return out;
    }
    private void dfs(char[][] b, int r, int c, Node n) {
        if (r < 0 || r == b.length || c < 0 || c == b[0].length || b[r][c] == '#') return;
        Node next = n.next[b[r][c] - 'a']; if (next == null) return;
        if (next.word != null) { out.add(next.word); next.word = null; }
        char ch = b[r][c]; b[r][c] = '#'; dfs(b, r+1,c,next); dfs(b,r-1,c,next); dfs(b,r,c+1,next); dfs(b,r,c-1,next); b[r][c] = ch;
    }
}`,
  'letter-combinations-of-a-phone-number': String.raw`import java.util.*;
class Solution {
    private static final String[] KEYS = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    public List<String> letterCombinations(String digits) {
        List<String> out = new ArrayList<>(); if (digits.isEmpty()) return out; build(digits, 0, new StringBuilder(), out); return out;
    }
    private void build(String d, int i, StringBuilder path, List<String> out) {
        if (i == d.length()) { out.add(path.toString()); return; }
        for (char c : KEYS[d.charAt(i) - '0'].toCharArray()) { path.append(c); build(d, i + 1, path, out); path.setLength(path.length() - 1); }
    }
}`,
  'combinations': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> combine(int n, int k) { List<List<Integer>> out = new ArrayList<>(); build(1, n, k, new ArrayList<>(), out); return out; }
    private void build(int start, int n, int k, List<Integer> path, List<List<Integer>> out) {
        if (path.size() == k) { out.add(new ArrayList<>(path)); return; }
        for (int i = start; i <= n - (k - path.size()) + 1; i++) { path.add(i); build(i + 1, n, k, path, out); path.remove(path.size() - 1); }
    }
}`,
  'permutations': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> permute(int[] nums) { List<List<Integer>> out = new ArrayList<>(); build(nums, new boolean[nums.length], new ArrayList<>(), out); return out; }
    private void build(int[] a, boolean[] used, List<Integer> path, List<List<Integer>> out) {
        if (path.size() == a.length) { out.add(new ArrayList<>(path)); return; }
        for (int i = 0; i < a.length; i++) if (!used[i]) { used[i] = true; path.add(a[i]); build(a, used, path, out); path.remove(path.size() - 1); used[i] = false; }
    }
}`,
  'combination-sum': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) { List<List<Integer>> out = new ArrayList<>(); build(candidates, target, 0, new ArrayList<>(), out); return out; }
    private void build(int[] a, int left, int start, List<Integer> path, List<List<Integer>> out) {
        if (left == 0) { out.add(new ArrayList<>(path)); return; }
        for (int i = start; i < a.length && a[i] <= left; i++) { path.add(a[i]); build(a, left - a[i], i, path, out); path.remove(path.size() - 1); }
    }
}`,
  'n-queens-ii': String.raw`class Solution {
    private int count;
    public int totalNQueens(int n) { count = 0; place(n, 0, 0, 0, 0); return count; }
    private void place(int n, int row, int cols, int diag1, int diag2) {
        if (row == n) { count++; return; }
        int available = ((1 << n) - 1) & ~(cols | diag1 | diag2);
        while (available != 0) { int bit = available & -available; available -= bit; place(n, row + 1, cols | bit, (diag1 | bit) << 1, (diag2 | bit) >> 1); }
    }
}`,
  'generate-parentheses': String.raw`import java.util.*;
class Solution {
    public List<String> generateParenthesis(int n) { List<String> out = new ArrayList<>(); build(n, 0, 0, new StringBuilder(), out); return out; }
    private void build(int n, int open, int close, StringBuilder s, List<String> out) {
        if (s.length() == 2 * n) { out.add(s.toString()); return; }
        if (open < n) { s.append('('); build(n, open + 1, close, s, out); s.setLength(s.length() - 1); }
        if (close < open) { s.append(')'); build(n, open, close + 1, s, out); s.setLength(s.length() - 1); }
    }
}`,
  'word-search': String.raw`class Solution {
    public boolean exist(char[][] board, String word) {
        for (int r = 0; r < board.length; r++) for (int c = 0; c < board[0].length; c++) if (dfs(board, word, 0, r, c)) return true;
        return false;
    }
    private boolean dfs(char[][] b, String w, int i, int r, int c) {
        if (i == w.length()) return true;
        if (r < 0 || r == b.length || c < 0 || c == b[0].length || b[r][c] != w.charAt(i)) return false;
        char ch = b[r][c]; b[r][c] = '#';
        boolean found = dfs(b,w,i+1,r+1,c) || dfs(b,w,i+1,r-1,c) || dfs(b,w,i+1,r,c+1) || dfs(b,w,i+1,r,c-1);
        b[r][c] = ch; return found;
    }
}`,
  'convert-sorted-array-to-binary-search-tree': String.raw`public class Solution {
    public TreeNode sortedArrayToBST(int[] nums) { return build(nums, 0, nums.length - 1); }
    private TreeNode build(int[] a, int l, int r) {
        if (l > r) return null; int m = l + (r - l) / 2; TreeNode n = new TreeNode(a[m]);
        n.left = build(a, l, m - 1); n.right = build(a, m + 1, r); return n;
    }
}`,
  'sort-list': String.raw`public class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode slow = head, fast = head.next; while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }
        ListNode right = slow.next; slow.next = null;
        return merge(sortList(head), sortList(right));
    }
    private ListNode merge(ListNode a, ListNode b) {
        ListNode dummy = new ListNode(0), t = dummy;
        while (a != null && b != null) { if (a.val <= b.val) { t.next = a; a = a.next; } else { t.next = b; b = b.next; } t = t.next; }
        t.next = a == null ? b : a; return dummy.next;
    }
}`,
  'construct-quad-tree': String.raw`class Solution {
    public Node construct(int[][] grid) { return build(grid, 0, 0, grid.length); }
    private Node build(int[][] g, int r, int c, int size) {
        int value = g[r][c]; boolean same = true;
        for (int i = r; i < r + size && same; i++) for (int j = c; j < c + size; j++) if (g[i][j] != value) { same = false; break; }
        if (same) return new Node(value == 1, true);
        int h = size / 2; Node n = new Node(true, false);
        n.topLeft = build(g,r,c,h); n.topRight = build(g,r,c+h,h); n.bottomLeft = build(g,r+h,c,h); n.bottomRight = build(g,r+h,c+h,h); return n;
    }
}`,
  'merge-k-sorted-lists': String.raw`import java.util.*;
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> q = new PriorityQueue<>(Comparator.comparingInt(n -> n.val));
        for (ListNode n : lists) if (n != null) q.add(n);
        ListNode dummy = new ListNode(0), tail = dummy;
        while (!q.isEmpty()) { ListNode n = q.remove(); tail.next = n; tail = n; if (n.next != null) q.add(n.next); }
        tail.next = null; return dummy.next;
    }
}`,
  'maximum-subarray': String.raw`class Solution {
    public int maxSubArray(int[] nums) {
        int best = nums[0], sum = 0;
        for (int x : nums) { sum = Math.max(x, sum + x); best = Math.max(best, sum); }
        return best;
    }
}`,
  'maximum-sum-circular-subarray': String.raw`class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int total = 0, max = nums[0], min = nums[0], curMax = 0, curMin = 0;
        for (int x : nums) { curMax = Math.max(x, curMax + x); max = Math.max(max, curMax); curMin = Math.min(x, curMin + x); min = Math.min(min, curMin); total += x; }
        return max < 0 ? max : Math.max(max, total - min);
    }
}`,
  'search-insert-position': String.raw`class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length;
        while (l < r) { int m = l + (r - l) / 2; if (nums[m] < target) l = m + 1; else r = m; }
        return l;
    }
}`,
  'search-a-2d-matrix': String.raw`class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;
        while (l <= r) { int mid = l + (r - l) / 2, x = matrix[mid / n][mid % n]; if (x == target) return true; if (x < target) l = mid + 1; else r = mid - 1; }
        return false;
    }
}`,
  'find-peak-element': String.raw`class Solution {
    public int findPeakElement(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) { int m = l + (r - l) / 2; if (nums[m] > nums[m + 1]) r = m; else l = m + 1; }
        return l;
    }
}`,
  'search-in-rotated-sorted-array': String.raw`class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2; if (nums[m] == target) return m;
            if (nums[l] <= nums[m]) { if (nums[l] <= target && target < nums[m]) r = m - 1; else l = m + 1; }
            else { if (nums[m] < target && target <= nums[r]) l = m + 1; else r = m - 1; }
        }
        return -1;
    }
}`,
  'find-first-and-last-position-of-element-in-sorted-array': String.raw`class Solution {
    public int[] searchRange(int[] nums, int target) {
        int l = lower(nums, target); if (l == nums.length || nums[l] != target) return new int[]{-1,-1};
        return new int[]{l, lower(nums, target + 1) - 1};
    }
    private int lower(int[] a, int x) { int l = 0, r = a.length; while (l < r) { int m = l + (r - l) / 2; if (a[m] < x) l = m + 1; else r = m; } return l; }
}`,
  'find-minimum-in-rotated-sorted-array': String.raw`class Solution {
    public int findMin(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) { int m = l + (r - l) / 2; if (nums[m] > nums[r]) l = m + 1; else r = m; }
        return nums[l];
    }
}`,
  'median-of-two-sorted-arrays': String.raw`class Solution {
    public double findMedianSortedArrays(int[] a, int[] b) {
        if (a.length > b.length) return findMedianSortedArrays(b, a);
        int m = a.length, n = b.length, l = 0, r = m;
        while (l <= r) {
            int i = l + (r - l) / 2, j = (m + n + 1) / 2 - i;
            int al = i == 0 ? Integer.MIN_VALUE : a[i - 1], ar = i == m ? Integer.MAX_VALUE : a[i];
            int bl = j == 0 ? Integer.MIN_VALUE : b[j - 1], br = j == n ? Integer.MAX_VALUE : b[j];
            if (al <= br && bl <= ar) return (m + n) % 2 == 1 ? Math.max(al, bl) : ((long)Math.max(al, bl) + Math.min(ar, br)) / 2.0;
            if (al > br) r = i - 1; else l = i + 1;
        }
        return 0;
    }
}`,
  'kth-largest-element-in-an-array': String.raw`import java.util.*;
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>();
        for (int x : nums) { q.add(x); if (q.size() > k) q.remove(); }
        return q.peek();
    }
}`,
  'ipo': String.raw`import java.util.*;
class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length; int[][] p = new int[n][2];
        for (int i = 0; i < n; i++) { p[i][0] = capital[i]; p[i][1] = profits[i]; }
        Arrays.sort(p, Comparator.comparingInt(a -> a[0])); PriorityQueue<Integer> available = new PriorityQueue<>(Comparator.reverseOrder()); int i = 0;
        while (k-- > 0) { while (i < n && p[i][0] <= w) available.add(p[i++][1]); if (available.isEmpty()) break; w += available.remove(); }
        return w;
    }
}`,
  'find-k-pairs-with-smallest-sums': String.raw`import java.util.*;
class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        List<List<Integer>> out = new ArrayList<>(); if (nums1.length == 0 || nums2.length == 0) return out;
        PriorityQueue<int[]> q = new PriorityQueue<>(Comparator.comparingLong(a -> (long)nums1[a[0]] + nums2[a[1]]));
        for (int i = 0; i < Math.min(nums1.length, k); i++) q.add(new int[]{i, 0});
        while (k-- > 0 && !q.isEmpty()) { int[] x = q.remove(); out.add(Arrays.asList(nums1[x[0]], nums2[x[1]])); if (x[1] + 1 < nums2.length) q.add(new int[]{x[0], x[1] + 1}); }
        return out;
    }
}`,
  'find-median-from-data-stream': String.raw`import java.util.*;
class MedianFinder {
    private final PriorityQueue<Integer> low = new PriorityQueue<>(Comparator.reverseOrder()), high = new PriorityQueue<>();
    public MedianFinder() {}
    public void addNum(int num) { low.add(num); high.add(low.remove()); if (high.size() > low.size()) low.add(high.remove()); }
    public double findMedian() { return low.size() > high.size() ? low.peek() : ((long)low.peek() + high.peek()) / 2.0; }
}`,
  'add-binary': String.raw`class Solution {
    public String addBinary(String a, String b) {
        StringBuilder out = new StringBuilder(); int i = a.length() - 1, j = b.length() - 1, carry = 0;
        while (i >= 0 || j >= 0 || carry != 0) { int sum = carry + (i >= 0 ? a.charAt(i--) - '0' : 0) + (j >= 0 ? b.charAt(j--) - '0' : 0); out.append(sum % 2); carry = sum / 2; }
        return out.reverse().toString();
    }
}`,
  'reverse-bits': String.raw`public class Solution {
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) { result = (result << 1) | (n & 1); n >>>= 1; }
        return result;
    }
}`,
  'number-of-1-bits': String.raw`public class Solution {
    public int hammingWeight(int n) {
        int count = 0; while (n != 0) { n &= n - 1; count++; } return count;
    }
}`,
  'single-number': String.raw`class Solution {
    public int singleNumber(int[] nums) { int x = 0; for (int n : nums) x ^= n; return x; }
}`,
  'single-number-ii': String.raw`class Solution {
    public int singleNumber(int[] nums) {
        int ones = 0, twos = 0;
        for (int x : nums) { ones = (ones ^ x) & ~twos; twos = (twos ^ x) & ~ones; }
        return ones;
    }
}`,
  'bitwise-and-of-numbers-range': String.raw`class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        int shift = 0; while (left < right) { left >>= 1; right >>= 1; shift++; } return left << shift;
    }
}`,
  'palindrome-number': String.raw`class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || x % 10 == 0 && x != 0) return false;
        int reversed = 0;
        while (x > reversed) { reversed = reversed * 10 + x % 10; x /= 10; }
        return x == reversed || x == reversed / 10;
    }
}`,
  'plus-one': String.raw`class Solution {
    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) { if (++digits[i] < 10) return digits; digits[i] = 0; }
        int[] out = new int[digits.length + 1]; out[0] = 1; return out;
    }
}`,
  'factorial-trailing-zeroes': String.raw`class Solution {
    public int trailingZeroes(int n) {
        int count = 0; while (n > 0) { n /= 5; count += n; } return count;
    }
}`,
  'sqrtx': String.raw`class Solution {
    public int mySqrt(int x) {
        long l = 0, r = x;
        while (l <= r) { long m = l + (r - l) / 2; if (m * m <= x) l = m + 1; else r = m - 1; }
        return (int) r;
    }
}`,
  'powx-n': String.raw`class Solution {
    public double myPow(double x, int n) {
        long e = n; if (e < 0) { x = 1 / x; e = -e; }
        double result = 1;
        while (e > 0) { if ((e & 1) == 1) result *= x; x *= x; e >>= 1; }
        return result;
    }
}`,
  'max-points-on-a-line': String.raw`import java.util.*;
class Solution {
    public int maxPoints(int[][] points) {
        int best = 0;
        for (int i = 0; i < points.length; i++) {
            Map<String,Integer> count = new HashMap<>(); int same = 1, local = 0;
            for (int j = i + 1; j < points.length; j++) {
                int dx = points[j][0] - points[i][0], dy = points[j][1] - points[i][1];
                if (dx == 0 && dy == 0) { same++; continue; }
                int g = gcd(dx, dy); dx /= g; dy /= g; if (dx < 0) { dx = -dx; dy = -dy; }
                String key = dx + "/" + dy; local = Math.max(local, count.merge(key, 1, Integer::sum));
            }
            best = Math.max(best, local + same);
        }
        return best;
    }
    private int gcd(int a, int b) { a = Math.abs(a); b = Math.abs(b); while (b != 0) { int t = a % b; a = b; b = t; } return a; }
}`,
  'climbing-stairs': String.raw`class Solution {
    public int climbStairs(int n) {
        int a = 1, b = 1; for (int i = 2; i <= n; i++) { int c = a + b; a = b; b = c; } return b;
    }
}`,
  'house-robber': String.raw`class Solution {
    public int rob(int[] nums) {
        int prev = 0, curr = 0;
        for (int x : nums) { int next = Math.max(curr, prev + x); prev = curr; curr = next; }
        return curr;
    }
}`,
  'word-break': String.raw`import java.util.*;
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> words = new HashSet<>(wordDict); boolean[] dp = new boolean[s.length() + 1]; dp[0] = true;
        for (int i = 1; i <= s.length(); i++) for (int j = 0; j < i; j++) if (dp[j] && words.contains(s.substring(j, i))) { dp[i] = true; break; }
        return dp[s.length()];
    }
}`,
  'coin-change': String.raw`class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1]; java.util.Arrays.fill(dp, amount + 1); dp[0] = 0;
        for (int a = 1; a <= amount; a++) for (int c : coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`,
  'longest-increasing-subsequence': String.raw`class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length]; int size = 0;
        for (int x : nums) { int l = 0, r = size; while (l < r) { int m = (l + r) / 2; if (tails[m] < x) l = m + 1; else r = m; } tails[l] = x; if (l == size) size++; }
        return size;
    }
}`,
  'triangle': String.raw`import java.util.*;
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int n = triangle.size(); int[] dp = new int[n];
        for (int r = n - 1; r >= 0; r--) for (int c = 0; c <= r; c++) {
            int x = triangle.get(r).get(c); dp[c] = r == n - 1 ? x : x + Math.min(dp[c], dp[c + 1]);
        }
        return dp[0];
    }
}`,
  'minimum-path-sum': String.raw`class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {
            if (r == 0 && c == 0) continue;
            grid[r][c] += Math.min(r == 0 ? Integer.MAX_VALUE : grid[r - 1][c], c == 0 ? Integer.MAX_VALUE : grid[r][c - 1]);
        }
        return grid[m - 1][n - 1];
    }
}`,
  'unique-paths-ii': String.raw`class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length, n = obstacleGrid[0].length; int[] dp = new int[n]; dp[0] = obstacleGrid[0][0] == 1 ? 0 : 1;
        for (int r = 0; r < m; r++) for (int c = 0; c < n; c++) {
            if (obstacleGrid[r][c] == 1) dp[c] = 0;
            else if (c > 0) dp[c] += dp[c - 1];
        }
        return dp[n - 1];
    }
}`,
  'longest-palindromic-substring': String.raw`class Solution {
    private int start, best;
    public String longestPalindrome(String s) {
        for (int i = 0; i < s.length(); i++) { expand(s, i, i); expand(s, i, i + 1); }
        return s.substring(start, start + best);
    }
    private void expand(String s, int l, int r) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }
        if (r - l - 1 > best) { start = l + 1; best = r - l - 1; }
    }
}`,
  'interleaving-string': String.raw`class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) return false;
        boolean[] dp = new boolean[s2.length() + 1]; dp[0] = true;
        for (int j = 1; j <= s2.length(); j++) dp[j] = dp[j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        for (int i = 1; i <= s1.length(); i++) {
            dp[0] = dp[0] && s1.charAt(i - 1) == s3.charAt(i - 1);
            for (int j = 1; j <= s2.length(); j++) dp[j] = dp[j] && s1.charAt(i - 1) == s3.charAt(i + j - 1) || dp[j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1);
        }
        return dp[s2.length()];
    }
}`,
  'edit-distance': String.raw`class Solution {
    public int minDistance(String word1, String word2) {
        int n = word2.length(); int[] dp = new int[n + 1]; for (int j = 0; j <= n; j++) dp[j] = j;
        for (int i = 1; i <= word1.length(); i++) {
            int diagonal = dp[0]; dp[0] = i;
            for (int j = 1; j <= n; j++) {
                int old = dp[j];
                dp[j] = word1.charAt(i - 1) == word2.charAt(j - 1) ? diagonal : 1 + Math.min(diagonal, Math.min(dp[j], dp[j - 1]));
                diagonal = old;
            }
        }
        return dp[n];
    }
}`,
  'best-time-to-buy-and-sell-stock-iii': String.raw`class Solution {
    public int maxProfit(int[] prices) {
        int buy1 = Integer.MIN_VALUE, sell1 = 0, buy2 = Integer.MIN_VALUE, sell2 = 0;
        for (int p : prices) { buy1 = Math.max(buy1, -p); sell1 = Math.max(sell1, buy1 + p); buy2 = Math.max(buy2, sell1 - p); sell2 = Math.max(sell2, buy2 + p); }
        return sell2;
    }
}`,
  'best-time-to-buy-and-sell-stock-iv': String.raw`class Solution {
    public int maxProfit(int k, int[] prices) {
        if (k >= prices.length / 2) { int p = 0; for (int i = 1; i < prices.length; i++) p += Math.max(0, prices[i] - prices[i - 1]); return p; }
        int[] buy = new int[k + 1], sell = new int[k + 1]; java.util.Arrays.fill(buy, Integer.MIN_VALUE);
        for (int p : prices) for (int t = 1; t <= k; t++) { buy[t] = Math.max(buy[t], sell[t - 1] - p); sell[t] = Math.max(sell[t], buy[t] + p); }
        return sell[k];
    }
}`,
  'maximal-square': String.raw`class Solution {
    public int maximalSquare(char[][] matrix) {
        int m = matrix.length, n = matrix[0].length, best = 0; int[] dp = new int[n + 1];
        for (int r = 1; r <= m; r++) { int diagonal = 0; for (int c = 1; c <= n; c++) {
            int old = dp[c];
            if (matrix[r - 1][c - 1] == '1') { dp[c] = 1 + Math.min(dp[c], Math.min(dp[c - 1], diagonal)); best = Math.max(best, dp[c]); }
            else dp[c] = 0;
            diagonal = old;
        } }
        return best * best;
    }
}`,
};
