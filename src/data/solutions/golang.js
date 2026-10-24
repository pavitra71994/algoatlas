export const golangSolutions = {
  "merge-sorted-array": `func merge(nums1 []int, m int, nums2 []int, n int) {
	i, j, k := m-1, n-1, m+n-1
	for j >= 0 {
		if i >= 0 && nums1[i] > nums2[j] { nums1[k] = nums1[i]; i-- } else { nums1[k] = nums2[j]; j-- }
		k--
	}
}`,
  "remove-element": `func removeElement(nums []int, val int) int {
	k := 0
	for _, x := range nums { if x != val { nums[k] = x; k++ } }
	return k
}`,
  "remove-duplicates-from-sorted-array": `func removeDuplicates(nums []int) int {
	k := 0
	for _, x := range nums { if k == 0 || nums[k-1] != x { nums[k] = x; k++ } }
	return k
}`,
  "remove-duplicates-from-sorted-array-ii": `func removeDuplicates(nums []int) int {
	k := 0
	for _, x := range nums { if k < 2 || nums[k-2] != x { nums[k] = x; k++ } }
	return k
}`,
  "majority-element": `func majorityElement(nums []int) int {
	candidate, count := 0, 0
	for _, x := range nums { if count == 0 { candidate = x }; if x == candidate { count++ } else { count-- } }
	return candidate
}`,
  "rotate-array": `func rotate(nums []int, k int) {
	n := len(nums); if n == 0 { return }; k %= n
	reverse := func(a []int, l, r int) { for l < r { a[l], a[r] = a[r], a[l]; l++; r-- } }
	reverse(nums, 0, n-1); reverse(nums, 0, k-1); reverse(nums, k, n-1)
}`,
  "best-time-to-buy-and-sell-stock": `func maxProfit(prices []int) int {
	minPrice, best := int(^uint(0)>>1), 0
	for _, p := range prices { if p < minPrice { minPrice = p }; if p-minPrice > best { best = p-minPrice } }
	return best
}`,
  "best-time-to-buy-and-sell-stock-ii": `func maxProfit(prices []int) int {
	profit := 0
	for i := 1; i < len(prices); i++ { if prices[i] > prices[i-1] { profit += prices[i]-prices[i-1] } }
	return profit
}`,
  "jump-game": `func canJump(nums []int) bool {
	reach := 0
	for i, jump := range nums { if i > reach { return false }; if i+jump > reach { reach = i+jump } }
	return true
}`,
  "jump-game-ii": `func jump(nums []int) int {
	steps, end, farthest := 0, 0, 0
	for i := 0; i < len(nums)-1; i++ { if i+nums[i] > farthest { farthest = i+nums[i] }; if i == end { steps++; end = farthest } }
	return steps
}`,
  "h-index": `func hIndex(citations []int) int {
	sort.Ints(citations); n := len(citations)
	for i, c := range citations { h := n-i; if c >= h { return h } }
	return 0
}`,
  "insert-delete-getrandom-o1": `type RandomizedSet struct { values []int; index map[int]int }
func Constructor() RandomizedSet { return RandomizedSet{index: map[int]int{}} }
func (s *RandomizedSet) Insert(val int) bool { if _, ok := s.index[val]; ok { return false }; s.index[val] = len(s.values); s.values = append(s.values, val); return true }
func (s *RandomizedSet) Remove(val int) bool { i, ok := s.index[val]; if !ok { return false }; last := s.values[len(s.values)-1]; s.values[i] = last; s.index[last] = i; s.values = s.values[:len(s.values)-1]; delete(s.index, val); return true }
func (s *RandomizedSet) GetRandom() int { return s.values[rand.Intn(len(s.values))] }`,
  "product-of-array-except-self": `func productExceptSelf(nums []int) []int {
	out, p := make([]int, len(nums)), 1
	for i := range nums { out[i] = p; p *= nums[i] }
	p = 1
	for i := len(nums)-1; i >= 0; i-- { out[i] *= p; p *= nums[i] }
	return out
}`,
  "gas-station": `func canCompleteCircuit(gas []int, cost []int) int {
	total, tank, start := 0, 0, 0
	for i := range gas { d := gas[i]-cost[i]; total += d; tank += d; if tank < 0 { start = i+1; tank = 0 } }
	if total < 0 { return -1 }; return start
}`,
  "candy": `func candy(ratings []int) int {
	n := len(ratings); c := make([]int, n); for i := range c { c[i] = 1 }
	for i := 1; i < n; i++ { if ratings[i] > ratings[i-1] { c[i] = c[i-1]+1 } }
	for i := n-2; i >= 0; i-- { if ratings[i] > ratings[i+1] && c[i] <= c[i+1] { c[i] = c[i+1]+1 } }
	sum := 0; for _, x := range c { sum += x }; return sum
}`,
  "trapping-rain-water": `func trap(height []int) int {
	l, r, left, right, water := 0, len(height)-1, 0, 0, 0
	for l < r { if height[l] < height[r] { if height[l] >= left { left = height[l] } else { water += left-height[l] }; l++ } else { if height[r] >= right { right = height[r] } else { water += right-height[r] }; r-- } }
	return water
}`,
  "roman-to-integer": `func romanToInt(s string) int {
	v := map[byte]int{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}; total := 0
	for i := range s { x := v[s[i]]; if i+1 < len(s) && x < v[s[i+1]] { total -= x } else { total += x } }
	return total
}`,
  "integer-to-roman": `func intToRoman(num int) string {
	values := []int{1000,900,500,400,100,90,50,40,10,9,5,4,1}; symbols := []string{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"}
	var b strings.Builder
	for i, v := range values { for num >= v { b.WriteString(symbols[i]); num -= v } }
	return b.String()
}`,
  "length-of-last-word": `func lengthOfLastWord(s string) int {
	i, n := len(s)-1, 0; for i >= 0 && s[i] == ' ' { i-- }; for i >= 0 && s[i] != ' ' { n++; i-- }; return n
}`,
  "longest-common-prefix": `func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 { return "" }; p := strs[0]
	for _, s := range strs[1:] { i := 0; for i < len(p) && i < len(s) && p[i] == s[i] { i++ }; p = p[:i] }
	return p
}`,
  "reverse-words-in-a-string": `func reverseWords(s string) string {
	words := strings.Fields(s)
	for l, r := 0, len(words)-1; l < r; l, r = l+1, r-1 { words[l], words[r] = words[r], words[l] }
	return strings.Join(words, " ")
}`,
  "zigzag-conversion": `func convert(s string, numRows int) string {
	if numRows == 1 || numRows >= len(s) { return s }; rows := make([]strings.Builder, numRows); row, dir := 0, 1
	for i := range s { rows[row].WriteByte(s[i]); if row == 0 { dir = 1 } else if row == numRows-1 { dir = -1 }; row += dir }
	var out strings.Builder; for i := range rows { out.WriteString(rows[i].String()) }; return out.String()
}`,
  "find-the-index-of-the-first-occurrence-in-a-string": `func strStr(haystack string, needle string) int { return strings.Index(haystack, needle) }`,
  "text-justification": `func fullJustify(words []string, maxWidth int) []string {
	out := []string{}
	for i := 0; i < len(words); {
		j, letters := i, 0
		for j < len(words) && letters+len(words[j])+j-i <= maxWidth { letters += len(words[j]); j++ }
		gaps := j-i-1; var line strings.Builder
		if j == len(words) || gaps == 0 { line.WriteString(strings.Join(words[i:j], " ")); line.WriteString(strings.Repeat(" ", maxWidth-line.Len())) } else {
			space := (maxWidth-letters)/gaps; extra := (maxWidth-letters)%gaps
			for k := i; k < j; k++ { line.WriteString(words[k]); if k < j-1 { n := space; if k-i < extra { n++ }; line.WriteString(strings.Repeat(" ", n)) } }
		}
		out = append(out, line.String()); i = j
	}
	return out
}`,
  "valid-palindrome": `func isPalindrome(s string) bool {
	r := []rune(strings.ToLower(s)); l, h := 0, len(r)-1
	for l < h { for l < h && !unicode.IsLetter(r[l]) && !unicode.IsDigit(r[l]) { l++ }; for l < h && !unicode.IsLetter(r[h]) && !unicode.IsDigit(r[h]) { h-- }; if r[l] != r[h] { return false }; l++; h-- }; return true
}`,
  "is-subsequence": `func isSubsequence(s string, t string) bool {
	i := 0; for _, c := range t { if i < len(s) && byte(c) == s[i] { i++ } }; return i == len(s)
}`,
  "two-sum-ii-input-array-is-sorted": `func twoSum(numbers []int, target int) []int {
	l, r := 0, len(numbers)-1
	for l < r { sum := numbers[l]+numbers[r]; if sum == target { return []int{l+1,r+1} }; if sum < target { l++ } else { r-- } }
	return nil
}`,
  "container-with-most-water": `func maxArea(height []int) int {
	l, r, best := 0, len(height)-1, 0
	for l < r { h := height[l]; if height[r] < h { h = height[r] }; if area := h*(r-l); area > best { best = area }; if height[l] < height[r] { l++ } else { r-- } }; return best
}`,
  "3sum": `func threeSum(nums []int) [][]int {
	sort.Ints(nums); out := [][]int{}
	for i := 0; i < len(nums)-2; i++ { if i > 0 && nums[i] == nums[i-1] { continue }; l,r := i+1,len(nums)-1
		for l < r { sum := nums[i]+nums[l]+nums[r]; if sum == 0 { out = append(out, []int{nums[i],nums[l],nums[r]}); l++; r--; for l<r && nums[l]==nums[l-1] { l++ }; for l<r && nums[r]==nums[r+1] { r-- } } else if sum < 0 { l++ } else { r-- } }
	}; return out
}`,
  "minimum-size-subarray-sum": `func minSubArrayLen(target int, nums []int) int {
	left, sum, best := 0, 0, len(nums)+1
	for right, x := range nums { sum += x; for sum >= target { if right-left+1 < best { best = right-left+1 }; sum -= nums[left]; left++ } }
	if best > len(nums) { return 0 }; return best
}`,
  "longest-substring-without-repeating-characters": `func lengthOfLongestSubstring(s string) int {
	last := map[byte]int{}; left, best := 0, 0
	for right := range s { if p, ok := last[s[right]]; ok && p >= left { left = p+1 }; last[s[right]] = right; if right-left+1 > best { best = right-left+1 } }; return best
}`,
  "substring-with-concatenation-of-all-words": `func findSubstring(s string, words []string) []int {
	if len(words)==0 || len(words[0])==0 { return nil }; size,total := len(words[0]),len(words)*len(words[0]); need:=map[string]int{}; for _,w:=range words { need[w]++ }; out:=[]int{}
	for off:=0; off<size; off++ { left,count:=off,0; have:=map[string]int{}; for right:=off; right+size<=len(s); right+=size { w:=s[right:right+size]; if need[w]==0 { have=map[string]int{}; count=0; left=right+size; continue }; have[w]++; count++; for have[w]>need[w] { old:=s[left:left+size]; have[old]--; count--; left+=size }; if count==len(words) { out=append(out,left); old:=s[left:left+size]; have[old]--; count--; left+=size } } }
	_ = total; sort.Ints(out); return out
}`,
  "minimum-window-substring": `func minWindow(s string, t string) string {
	need:=map[byte]int{}; for i:=range t { need[t[i]]++ }; missing,left,bestL,bestLen:=len(t),0,0,len(s)+1
	for right:=range s { if need[s[right]]>0 { missing-- }; need[s[right]]--; for missing==0 { if right-left+1<bestLen { bestL,bestLen=left,right-left+1 }; need[s[left]]++; if need[s[left]]>0 { missing++ }; left++ } }
	if bestLen>len(s) { return "" }; return s[bestL:bestL+bestLen]
}`,
  "valid-sudoku": `func isValidSudoku(board [][]byte) bool {
	rows,cols,boxes:=[9][9]bool{},[9][9]bool{},[9][9]bool{}
	for r:=0;r<9;r++ { for c:=0;c<9;c++ { x:=board[r][c]; if x=='.' { continue }; n:=int(x-'1'); b:=(r/3)*3+c/3; if rows[r][n]||cols[c][n]||boxes[b][n] { return false }; rows[r][n],cols[c][n],boxes[b][n]=true,true,true } }; return true
}`,
  "spiral-matrix": `func spiralOrder(matrix [][]int) []int {
	if len(matrix)==0 { return nil }; top,bottom,left,right:=0,len(matrix)-1,0,len(matrix[0])-1; out:=[]int{}
	for top<=bottom && left<=right { for c:=left;c<=right;c++ { out=append(out,matrix[top][c]) }; top++; for r:=top;r<=bottom;r++ { out=append(out,matrix[r][right]) }; right--; if top<=bottom { for c:=right;c>=left;c-- { out=append(out,matrix[bottom][c]) }; bottom-- }; if left<=right { for r:=bottom;r>=top;r-- { out=append(out,matrix[r][left]) }; left++ } }; return out
}`,
  "rotate-image": `func rotate(matrix [][]int) {
	n:=len(matrix); for i:=0;i<n;i++ { for j:=i+1;j<n;j++ { matrix[i][j],matrix[j][i]=matrix[j][i],matrix[i][j] } }
	for _,row:=range matrix { for l,r:=0,n-1;l<r;l,r=l+1,r-1 { row[l],row[r]=row[r],row[l] } }
}`,
  "set-matrix-zeroes": `func setZeroes(matrix [][]int) {
	m,n:=len(matrix),len(matrix[0]); firstRow,firstCol:=false,false
	for c:=0;c<n;c++ { if matrix[0][c]==0 { firstRow=true } }; for r:=0;r<m;r++ { if matrix[r][0]==0 { firstCol=true } }
	for r:=1;r<m;r++ { for c:=1;c<n;c++ { if matrix[r][c]==0 { matrix[r][0],matrix[0][c]=0,0 } } }
	for r:=1;r<m;r++ { for c:=1;c<n;c++ { if matrix[r][0]==0||matrix[0][c]==0 { matrix[r][c]=0 } } }
	if firstRow { for c:=0;c<n;c++ { matrix[0][c]=0 } }; if firstCol { for r:=0;r<m;r++ { matrix[r][0]=0 } }
}`,
  "game-of-life": `func gameOfLife(board [][]int) {
	m,n:=len(board),len(board[0]); dirs:=[][2]int{{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}}
	for r:=0;r<m;r++ { for c:=0;c<n;c++ { live:=0; for _,d:=range dirs { x,y:=r+d[0],c+d[1]; if x>=0&&x<m&&y>=0&&y<n&&board[x][y]%2==1 { live++ } }; if board[r][c]==1&&(live==2||live==3)||board[r][c]==0&&live==3 { board[r][c]|=2 } } }
	for r:=range board { for c:=range board[r] { board[r][c]>>=1 } }
}`,
  "ransom-note": `func canConstruct(ransomNote string, magazine string) bool {
	count:=map[rune]int{}; for _,c:=range magazine { count[c]++ }; for _,c:=range ransomNote { if count[c]==0 { return false }; count[c]-- }; return true
}`,
  "isomorphic-strings": `func isIsomorphic(s string, t string) bool {
	if len(s)!=len(t) { return false }; a,b:=map[byte]byte{},map[byte]byte{}
	for i:=range s { x,y:=s[i],t[i]; if a[x]!=0&&a[x]!=y||b[y]!=0&&b[y]!=x { return false }; a[x],b[y]=y,x }; return true
}`,
  "word-pattern": `func wordPattern(pattern string, s string) bool {
	words:=strings.Fields(s); if len(pattern)!=len(words) { return false }; a,b:=map[byte]string{},map[string]byte{}
	for i,p:=range pattern { w:=words[i]; if a[p]!=""&&a[p]!=w||b[w]!=0&&b[w]!=p { return false }; a[p],b[w]=w,p }; return true
}`,
  "valid-anagram": `func isAnagram(s string, t string) bool {
	if len(s)!=len(t) { return false }; count:=map[rune]int{}; for _,c:=range s { count[c]++ }; for _,c:=range t { count[c]--; if count[c]<0 { return false } }; return true
}`,
  "group-anagrams": `func groupAnagrams(strs []string) [][]string {
	groups:=map[[26]int][]string{}
	for _,s:=range strs { var key [26]int; for _,c:=range s { key[c-'a']++ }; groups[key]=append(groups[key],s) }
	out:=make([][]string,0,len(groups)); for _,g:=range groups { out=append(out,g) }; return out
}`,
  "two-sum": `func twoSum(nums []int, target int) []int {
	seen:=map[int]int{}; for i,x:=range nums { if j,ok:=seen[target-x]; ok { return []int{j,i} }; seen[x]=i }; return nil
}`,
  "happy-number": `func isHappy(n int) bool {
	next:=func(x int) int { sum:=0; for x>0 { d:=x%10; sum+=d*d; x/=10 }; return sum }
	slow,fast:=n,next(n); for fast!=1&&slow!=fast { slow=next(slow); fast=next(next(fast)) }; return fast==1
}`,
  "contains-duplicate-ii": `func containsNearbyDuplicate(nums []int, k int) bool {
	last:=map[int]int{}; for i,x:=range nums { if j,ok:=last[x]; ok&&i-j<=k { return true }; last[x]=i }; return false
}`,
  "longest-consecutive-sequence": `func longestConsecutive(nums []int) int {
	set:=map[int]bool{}; for _,x:=range nums { set[x]=true }; best:=0
	for x:=range set { if !set[x-1] { n:=1; for set[x+n] { n++ }; if n>best { best=n } } }; return best
}`,
  "summary-ranges": `func summaryRanges(nums []int) []string {
	out:=[]string{}; for i:=0;i<len(nums); { start:=nums[i]; j:=i; for j+1<len(nums)&&nums[j+1]==nums[j]+1 { j++ }; if j==i { out=append(out,strconv.Itoa(start)) } else { out=append(out,strconv.Itoa(start)+"->"+strconv.Itoa(nums[j])) }; i=j+1 }; return out
}`,
  "merge-intervals": `func merge(intervals [][]int) [][]int {
	if len(intervals)==0 { return nil }; sort.Slice(intervals,func(i,j int)bool{return intervals[i][0]<intervals[j][0]}); out:=[][]int{intervals[0]}
	for _,in:=range intervals[1:] { last:=out[len(out)-1]; if in[0]<=last[1] { if in[1]>last[1] { last[1]=in[1] } } else { out=append(out,in) } }; return out
}`,
  "insert-interval": `func insert(intervals [][]int, newInterval []int) [][]int {
	out:=[][]int{}; i:=0; for i<len(intervals)&&intervals[i][1]<newInterval[0] { out=append(out,intervals[i]); i++ }
	for i<len(intervals)&&intervals[i][0]<=newInterval[1] { if intervals[i][0]<newInterval[0] { newInterval[0]=intervals[i][0] }; if intervals[i][1]>newInterval[1] { newInterval[1]=intervals[i][1] }; i++ }
	out=append(out,newInterval); return append(out,intervals[i:]...)
}`,
  "minimum-number-of-arrows-to-burst-balloons": `func findMinArrowShots(points [][]int) int {
	if len(points)==0 { return 0 }; sort.Slice(points,func(i,j int)bool{return points[i][1]<points[j][1]}); arrows,end:=1,points[0][1]
	for _,p:=range points[1:] { if p[0]>end { arrows++; end=p[1] } }; return arrows
}`,
  "valid-parentheses": `func isValid(s string) bool {
	stack:=[]byte{}; pairs:=map[byte]byte{')':'(',']':'[','}':'{'}
	for i:=range s { c:=s[i]; if open,ok:=pairs[c]; ok { if len(stack)==0||stack[len(stack)-1]!=open { return false }; stack=stack[:len(stack)-1] } else { stack=append(stack,c) } }; return len(stack)==0
}`,
  "simplify-path": `func simplifyPath(path string) string {
	stack:=[]string{}; for _,part:=range strings.Split(path,"/") { if part==""||part=="." { continue }; if part==".." { if len(stack)>0 { stack=stack[:len(stack)-1] } } else { stack=append(stack,part) } }; return "/"+strings.Join(stack,"/")
}`,
  "min-stack": `type MinStack struct { values []int; mins []int }
func Constructor() MinStack { return MinStack{} }
func (s *MinStack) Push(val int) { s.values=append(s.values,val); if len(s.mins)==0||val<=s.GetMin() { s.mins=append(s.mins,val) } }
func (s *MinStack) Pop() { v:=s.values[len(s.values)-1]; s.values=s.values[:len(s.values)-1]; if v==s.GetMin() { s.mins=s.mins[:len(s.mins)-1] } }
func (s *MinStack) Top() int { return s.values[len(s.values)-1] }
func (s *MinStack) GetMin() int { return s.mins[len(s.mins)-1] }`,
  "evaluate-reverse-polish-notation": `func evalRPN(tokens []string) int {
	stack:=[]int{}; for _,t:=range tokens { if t=="+"||t=="-"||t=="*"||t=="/" { b,a:=stack[len(stack)-1],stack[len(stack)-2]; stack=stack[:len(stack)-2]; v:=0; switch t { case "+":v=a+b; case "-":v=a-b; case "*":v=a*b; case "/":v=a/b }; stack=append(stack,v) } else { v,_:=strconv.Atoi(t); stack=append(stack,v) } }; return stack[0]
}`,
  "basic-calculator": `func calculate(s string) int {
	result,sign,num:=0,1,0; stack:=[]int{}
	for _,c:=range s { if c>='0'&&c<='9' { num=num*10+int(c-'0') } else if c=='+'||c=='-' { result+=sign*num; num=0; if c=='+' { sign=1 } else { sign=-1 } } else if c=='(' { stack=append(stack,result,sign); result,sign=0,1 } else if c==')' { result+=sign*num; num=0; result*=stack[len(stack)-1]; sign=stack[len(stack)-2]; stack=stack[:len(stack)-2] } }; return result+sign*num
}`,
  "linked-list-cycle": `func hasCycle(head *ListNode) bool {
	slow,fast:=head,head
	for fast!=nil&&fast.Next!=nil { slow=slow.Next; fast=fast.Next.Next; if slow==fast { return true } }; return false
}`,
  "add-two-numbers": `func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy:=&ListNode{}; tail,carry:=dummy,0
	for l1!=nil||l2!=nil||carry>0 { sum:=carry; if l1!=nil { sum+=l1.Val; l1=l1.Next }; if l2!=nil { sum+=l2.Val; l2=l2.Next }; tail.Next=&ListNode{Val:sum%10}; tail=tail.Next; carry=sum/10 }; return dummy.Next
}`,
  "merge-two-sorted-lists": `func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy:=&ListNode{}; tail:=dummy
	for list1!=nil&&list2!=nil { if list1.Val<list2.Val { tail.Next=list1; list1=list1.Next } else { tail.Next=list2; list2=list2.Next }; tail=tail.Next }
	if list1!=nil { tail.Next=list1 } else { tail.Next=list2 }; return dummy.Next
}`,
  "copy-list-with-random-pointer": `func copyRandomList(head *Node) *Node {
	if head==nil { return nil }; copies:=map[*Node]*Node{}
	for cur:=head;cur!=nil;cur=cur.Next { copies[cur]=&Node{Val:cur.Val} }
	for cur:=head;cur!=nil;cur=cur.Next { copies[cur].Next=copies[cur.Next]; copies[cur].Random=copies[cur.Random] }; return copies[head]
}`,
  "reverse-linked-list-ii": `func reverseBetween(head *ListNode, left int, right int) *ListNode {
	dummy:=&ListNode{Next:head}; prev:=dummy; for i:=1;i<left;i++ { prev=prev.Next }; cur:=prev.Next
	for i:=0;i<right-left;i++ { move:=cur.Next; cur.Next=move.Next; move.Next=prev.Next; prev.Next=move }; return dummy.Next
}`,
  "reverse-nodes-in-k-group": `func reverseKGroup(head *ListNode, k int) *ListNode {
	dummy:=&ListNode{Next:head}; groupPrev:=dummy
	for { kth:=groupPrev; for i:=0;i<k&&kth!=nil;i++ { kth=kth.Next }; if kth==nil { break }; groupNext:=kth.Next; prev:=groupNext; cur:=groupPrev.Next
		for cur!=groupNext { next:=cur.Next; cur.Next=prev; prev=cur; cur=next }; oldHead:=groupPrev.Next; groupPrev.Next=kth; groupPrev=oldHead
	}; return dummy.Next
}`,
  "remove-nth-node-from-end-of-list": `func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy:=&ListNode{Next:head}; fast,slow:=dummy,dummy
	for i:=0;i<n;i++ { fast=fast.Next }; for fast.Next!=nil { fast=fast.Next; slow=slow.Next }; slow.Next=slow.Next.Next; return dummy.Next
}`,
  "remove-duplicates-from-sorted-list-ii": `func deleteDuplicates(head *ListNode) *ListNode {
	dummy:=&ListNode{Next:head}; prev,cur:=dummy,head
	for cur!=nil { if cur.Next!=nil&&cur.Val==cur.Next.Val { value:=cur.Val; for cur!=nil&&cur.Val==value { cur=cur.Next }; prev.Next=cur } else { prev=cur; cur=cur.Next } }; return dummy.Next
}`,
  "rotate-list": `func rotateRight(head *ListNode, k int) *ListNode {
	if head==nil||head.Next==nil||k==0 { return head }; tail,n:=head,1; for tail.Next!=nil { tail=tail.Next; n++ }; k%=n; if k==0 { return head }; tail.Next=head
	for i:=0;i<n-k;i++ { tail=tail.Next }; newHead:=tail.Next; tail.Next=nil; return newHead
}`,
  "partition-list": `func partition(head *ListNode, x int) *ListNode {
	less,more:=&ListNode{},&ListNode{}; a,b:=less,more
	for head!=nil { next:=head.Next; head.Next=nil; if head.Val<x { a.Next=head; a=head } else { b.Next=head; b=head }; head=next }; a.Next=more.Next; return less.Next
}`,
  "lru-cache": `type LRUCache struct { cap int; items map[int]*list.Element; order *list.List }
type cacheEntry struct { key,value int }
func Constructor(capacity int) LRUCache { return LRUCache{cap:capacity,items:map[int]*list.Element{},order:list.New()} }
func (c *LRUCache) Get(key int) int { if e:=c.items[key]; e!=nil { c.order.MoveToFront(e); return e.Value.(cacheEntry).value }; return -1 }
func (c *LRUCache) Put(key int, value int) { if e:=c.items[key]; e!=nil { e.Value=cacheEntry{key,value}; c.order.MoveToFront(e); return }; e:=c.order.PushFront(cacheEntry{key,value}); c.items[key]=e; if c.order.Len()>c.cap { old:=c.order.Back(); delete(c.items,old.Value.(cacheEntry).key); c.order.Remove(old) } }`,
  "maximum-depth-of-binary-tree": `func maxDepth(root *TreeNode) int {
	if root==nil { return 0 }; left,right:=maxDepth(root.Left),maxDepth(root.Right); if left>right { return left+1 }; return right+1
}`,
  "same-tree": `func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p==nil||q==nil { return p==q }; return p.Val==q.Val&&isSameTree(p.Left,q.Left)&&isSameTree(p.Right,q.Right)
}`,
  "invert-binary-tree": `func invertTree(root *TreeNode) *TreeNode {
	if root==nil { return nil }; root.Left,root.Right=invertTree(root.Right),invertTree(root.Left); return root
}`,
  "symmetric-tree": `func isSymmetric(root *TreeNode) bool {
	var mirror func(*TreeNode,*TreeNode) bool; mirror=func(a,b *TreeNode)bool { if a==nil||b==nil { return a==b }; return a.Val==b.Val&&mirror(a.Left,b.Right)&&mirror(a.Right,b.Left) }; return root==nil||mirror(root.Left,root.Right)
}`,
  "construct-binary-tree-from-preorder-and-inorder-traversal": `func buildTree(preorder []int, inorder []int) *TreeNode {
	pos:=map[int]int{}; for i,v:=range inorder { pos[v]=i }; pre:=0
	var build func(int,int)*TreeNode; build=func(l,r int)*TreeNode { if l>=r { return nil }; v:=preorder[pre]; pre++; m:=pos[v]; return &TreeNode{Val:v,Left:build(l,m),Right:build(m+1,r)} }
	return build(0,len(inorder))
}`,
  "construct-binary-tree-from-inorder-and-postorder-traversal": `func buildTree(inorder []int, postorder []int) *TreeNode {
	pos:=map[int]int{}; for i,v:=range inorder { pos[v]=i }; p:=len(postorder)-1
	var build func(int,int)*TreeNode; build=func(l,r int)*TreeNode { if l>=r { return nil }; v:=postorder[p]; p--; m:=pos[v]; return &TreeNode{Val:v,Right:build(m+1,r),Left:build(l,m)} }
	return build(0,len(inorder))
}`,
  "populating-next-right-pointers-in-each-node-ii": `func connect(root *Node) *Node {
	if root==nil { return nil }; queue:=[]*Node{root}
	for len(queue)>0 { n:=len(queue); var prev *Node; for i:=0;i<n;i++ { cur:=queue[0]; queue=queue[1:]; if prev!=nil { prev.Next=cur }; prev=cur; if cur.Left!=nil { queue=append(queue,cur.Left) }; if cur.Right!=nil { queue=append(queue,cur.Right) } }; prev.Next=nil }; return root
}`,
  "flatten-binary-tree-to-linked-list": `func flatten(root *TreeNode) {
	var prev *TreeNode; var visit func(*TreeNode); visit=func(node *TreeNode) { if node==nil { return }; visit(node.Right); visit(node.Left); node.Right=prev; node.Left=nil; prev=node }; visit(root)
}`,
  "path-sum": `func hasPathSum(root *TreeNode, targetSum int) bool {
	if root==nil { return false }; if root.Left==nil&&root.Right==nil { return root.Val==targetSum }; return hasPathSum(root.Left,targetSum-root.Val)||hasPathSum(root.Right,targetSum-root.Val)
}`,
  "sum-root-to-leaf-numbers": `func sumNumbers(root *TreeNode) int {
	var walk func(*TreeNode,int)int; walk=func(node *TreeNode,n int)int { if node==nil { return 0 }; n=n*10+node.Val; if node.Left==nil&&node.Right==nil { return n }; return walk(node.Left,n)+walk(node.Right,n) }; return walk(root,0)
}`,
  "binary-tree-maximum-path-sum": `func maxPathSum(root *TreeNode) int {
	best:= -int(^uint(0)>>1)-1; var gain func(*TreeNode)int; gain=func(n *TreeNode)int { if n==nil { return 0 }; l,r:=gain(n.Left),gain(n.Right); if l<0 { l=0 }; if r<0 { r=0 }; if n.Val+l+r>best { best=n.Val+l+r }; if l>r { return n.Val+l }; return n.Val+r }; gain(root); return best
}`,
  "binary-search-tree-iterator": `type BSTIterator struct { stack []*TreeNode }
func Constructor(root *TreeNode) BSTIterator { it:=BSTIterator{}; it.pushLeft(root); return it }
func (it *BSTIterator) pushLeft(n *TreeNode) { for n!=nil { it.stack=append(it.stack,n); n=n.Left } }
func (it *BSTIterator) Next() int { n:=it.stack[len(it.stack)-1]; it.stack=it.stack[:len(it.stack)-1]; it.pushLeft(n.Right); return n.Val }
func (it *BSTIterator) HasNext() bool { return len(it.stack)>0 }`,
  "count-complete-tree-nodes": `func countNodes(root *TreeNode) int {
	if root==nil { return 0 }; left,right:=root,root; lh,rh:=0,0; for left!=nil { lh++; left=left.Left }; for right!=nil { rh++; right=right.Right }; if lh==rh { return (1<<lh)-1 }; return 1+countNodes(root.Left)+countNodes(root.Right)
}`,
  "lowest-common-ancestor-of-a-binary-tree": `func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root==nil||root==p||root==q { return root }; l,r:=lowestCommonAncestor(root.Left,p,q),lowestCommonAncestor(root.Right,p,q); if l!=nil&&r!=nil { return root }; if l!=nil { return l }; return r
}`,
  "binary-tree-right-side-view": `func rightSideView(root *TreeNode) []int {
	if root==nil { return nil }; out:=[]int{}; q:=[]*TreeNode{root}
	for len(q)>0 { n:=len(q); for i:=0;i<n;i++ { cur:=q[0]; q=q[1:]; if i==n-1 { out=append(out,cur.Val) }; if cur.Left!=nil { q=append(q,cur.Left) }; if cur.Right!=nil { q=append(q,cur.Right) } } }; return out
}`,
  "average-of-levels-in-binary-tree": `func averageOfLevels(root *TreeNode) []float64 {
	if root==nil { return nil }; out:=[]float64{}; q:=[]*TreeNode{root}
	for len(q)>0 { n:=len(q); sum:=0.0; for i:=0;i<n;i++ { cur:=q[0]; q=q[1:]; sum+=float64(cur.Val); if cur.Left!=nil { q=append(q,cur.Left) }; if cur.Right!=nil { q=append(q,cur.Right) } }; out=append(out,sum/float64(n)) }; return out
}`,
  "binary-tree-level-order-traversal": `func levelOrder(root *TreeNode) [][]int {
	if root==nil { return nil }; out:=[][]int{}; q:=[]*TreeNode{root}
	for len(q)>0 { n:=len(q); level:=make([]int,0,n); for i:=0;i<n;i++ { cur:=q[0]; q=q[1:]; level=append(level,cur.Val); if cur.Left!=nil { q=append(q,cur.Left) }; if cur.Right!=nil { q=append(q,cur.Right) } }; out=append(out,level) }; return out
}`,
  "binary-tree-zigzag-level-order-traversal": `func zigzagLevelOrder(root *TreeNode) [][]int {
	if root==nil { return nil }; out:=[][]int{}; q:=[]*TreeNode{root}; reverse:=false
	for len(q)>0 { n:=len(q); level:=make([]int,n); for i:=0;i<n;i++ { cur:=q[0]; q=q[1:]; j:=i; if reverse { j=n-1-i }; level[j]=cur.Val; if cur.Left!=nil { q=append(q,cur.Left) }; if cur.Right!=nil { q=append(q,cur.Right) } }; out=append(out,level); reverse=!reverse }; return out
}`,
  "minimum-absolute-difference-in-bst": `func getMinimumDifference(root *TreeNode) int {
	prev,best:= -1, int(^uint(0)>>1); var walk func(*TreeNode); walk=func(n *TreeNode) { if n==nil { return }; walk(n.Left); if prev>=0&&n.Val-prev<best { best=n.Val-prev }; prev=n.Val; walk(n.Right) }; walk(root); return best
}`,
  "kth-smallest-element-in-a-bst": `func kthSmallest(root *TreeNode, k int) int {
	stack:=[]*TreeNode{}; cur:=root
	for cur!=nil||len(stack)>0 { for cur!=nil { stack=append(stack,cur); cur=cur.Left }; cur=stack[len(stack)-1]; stack=stack[:len(stack)-1]; k--; if k==0 { return cur.Val }; cur=cur.Right }; return 0
}`,
  "validate-binary-search-tree": `func isValidBST(root *TreeNode) bool {
	var valid func(*TreeNode,int64,int64)bool; valid=func(n *TreeNode,lo,hi int64)bool { if n==nil { return true }; v:=int64(n.Val); return v>lo&&v<hi&&valid(n.Left,lo,v)&&valid(n.Right,v,hi) }; return valid(root,-1<<63,1<<63-1)
}`,
  "number-of-islands": `func numIslands(grid [][]byte) int {
	if len(grid)==0 { return 0 }; m,n,count:=len(grid),len(grid[0]),0
	var sink func(int,int); sink=func(r,c int) { if r<0||r>=m||c<0||c>=n||grid[r][c]!='1' { return }; grid[r][c]='0'; sink(r-1,c); sink(r+1,c); sink(r,c-1); sink(r,c+1) }
	for r:=0;r<m;r++ { for c:=0;c<n;c++ { if grid[r][c]=='1' { count++; sink(r,c) } } }; return count
}`,
  "surrounded-regions": `func solve(board [][]byte) {
	if len(board)==0 { return }; m,n:=len(board),len(board[0]); var mark func(int,int); mark=func(r,c int) { if r<0||r>=m||c<0||c>=n||board[r][c]!='O' { return }; board[r][c]='#'; mark(r-1,c); mark(r+1,c); mark(r,c-1); mark(r,c+1) }
	for r:=0;r<m;r++ { mark(r,0); mark(r,n-1) }; for c:=0;c<n;c++ { mark(0,c); mark(m-1,c) }
	for r:=range board { for c:=range board[r] { if board[r][c]=='O' { board[r][c]='X' } else if board[r][c]=='#' { board[r][c]='O' } } }
}`,
  "clone-graph": `func cloneGraph(node *Node) *Node {
	if node==nil { return nil }; copies:=map[*Node]*Node{}
	var clone func(*Node)*Node; clone=func(n *Node)*Node { if n==nil { return nil }; if copies[n]!=nil { return copies[n] }; c:=&Node{Val:n.Val}; copies[n]=c; for _,neighbor:=range n.Neighbors { c.Neighbors=append(c.Neighbors,clone(neighbor)) }; return c }; return clone(node)
}`,
  "evaluate-division": `func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	graph:=map[string]map[string]float64{}
	for i,e:=range equations { a,b:=e[0],e[1]; if graph[a]==nil { graph[a]=map[string]float64{} }; if graph[b]==nil { graph[b]=map[string]float64{} }; graph[a][b]=values[i]; graph[b][a]=1/values[i] }
	out:=make([]float64,len(queries)); for i,q:=range queries { if graph[q[0]]==nil||graph[q[1]]==nil { out[i]=-1; continue }; seen:=map[string]bool{}
		var dfs func(string)float64; dfs=func(cur string)float64 { if cur==q[1] { return 1 }; seen[cur]=true; for next,v:=range graph[cur] { if !seen[next] { if x:=dfs(next); x>=0 { return v*x } } }; return -1 }; out[i]=dfs(q[0])
	}; return out
}`,
  "course-schedule": `func canFinish(numCourses int, prerequisites [][]int) bool {
	graph:=make([][]int,numCourses); for _,p:=range prerequisites { graph[p[1]]=append(graph[p[1]],p[0]) }; state:=make([]int,numCourses)
	var visit func(int)bool; visit=func(v int)bool { if state[v]==1 { return false }; if state[v]==2 { return true }; state[v]=1; for _,n:=range graph[v] { if !visit(n) { return false } }; state[v]=2; return true }
	for i:=0;i<numCourses;i++ { if !visit(i) { return false } }; return true
}`,
  "course-schedule-ii": `func findOrder(numCourses int, prerequisites [][]int) []int {
	graph:=make([][]int,numCourses); indegree:=make([]int,numCourses); for _,p:=range prerequisites { graph[p[1]]=append(graph[p[1]],p[0]); indegree[p[0]]++ }
	q:=[]int{}; for i,d:=range indegree { if d==0 { q=append(q,i) } }; order:=[]int{}
	for len(q)>0 { v:=q[0]; q=q[1:]; order=append(order,v); for _,n:=range graph[v] { indegree[n]--; if indegree[n]==0 { q=append(q,n) } } }; if len(order)!=numCourses { return nil }; return order
}`,
  "snakes-and-ladders": `func snakesAndLadders(board [][]int) int {
	n:=len(board); dest:=n*n; dist:=make([]int,dest+1); for i:=range dist { dist[i]=-1 }; dist[1]=0; q:=[]int{1}
	for len(q)>0 { x:=q[0]; q=q[1:]; if x==dest { return dist[x] }; for y:=x+1;y<=x+6&&y<=dest;y++ { r:=(y-1)/n; c:=(y-1)%n; if r%2==1 { c=n-1-c }; r=n-1-r; z:=y; if board[r][c]!=-1 { z=board[r][c] }; if dist[z]<0 { dist[z]=dist[x]+1; q=append(q,z) } } }; return -1
}`,
  "minimum-genetic-mutation": `func minMutation(startGene string, endGene string, bank []string) int {
	valid:=map[string]bool{}; for _,g:=range bank { valid[g]=true }; if !valid[endGene] { return -1 }; q:=[]string{startGene}; dist:=map[string]int{startGene:0}; bases:="ACGT"
	for len(q)>0 { g:=q[0]; q=q[1:]; if g==endGene { return dist[g] }; for i:=range g { for _,b:=range bases { if byte(b)==g[i] { continue }; next:=g[:i]+string(b)+g[i+1:]; if valid[next] { delete(valid,next); dist[next]=dist[g]+1; q=append(q,next) } } } }; return -1
}`,
  "word-ladder": `func ladderLength(beginWord string, endWord string, wordList []string) int {
	words:=map[string]bool{}; for _,w:=range wordList { words[w]=true }; if !words[endWord] { return 0 }; q:=[]string{beginWord}; dist:=map[string]int{beginWord:1}
	for len(q)>0 { w:=q[0]; q=q[1:]; if w==endWord { return dist[w] }; for i:=range w { for c:='a';c<='z';c++ { if byte(c)==w[i] { continue }; next:=w[:i]+string(c)+w[i+1:]; if words[next] { delete(words,next); dist[next]=dist[w]+1; q=append(q,next) } } } }; return 0
}`,
  "implement-trie-prefix-tree": `type Trie struct { children [26]*Trie; end bool }
func Constructor() Trie { return Trie{} }
func (t *Trie) Insert(word string) { cur:=t; for _,c:=range word { i:=c-'a'; if cur.children[i]==nil { cur.children[i]=&Trie{} }; cur=cur.children[i] }; cur.end=true }
func (t *Trie) Search(word string) bool { cur:=t; for _,c:=range word { cur=cur.children[c-'a']; if cur==nil { return false } }; return cur.end }
func (t *Trie) StartsWith(prefix string) bool { cur:=t; for _,c:=range prefix { cur=cur.children[c-'a']; if cur==nil { return false } }; return true }`,
  "design-add-and-search-words-data-structure": `type WordDictionary struct { children [26]*WordDictionary; end bool }
func Constructor() WordDictionary { return WordDictionary{} }
func (d *WordDictionary) AddWord(word string) { cur:=d; for _,c:=range word { i:=c-'a'; if cur.children[i]==nil { cur.children[i]=&WordDictionary{} }; cur=cur.children[i] }; cur.end=true }
func (d *WordDictionary) Search(word string) bool { var find func(*WordDictionary,int)bool; find=func(n *WordDictionary,i int)bool { if n==nil { return false }; if i==len(word) { return n.end }; if word[i]=='.' { for _,child:=range n.children { if find(child,i+1) { return true } }; return false }; return find(n.children[word[i]-'a'],i+1) }; return find(d,0) }`,
  "word-search-ii": `func findWords(board [][]byte, words []string) []string {
	type trie struct { next [26]*trie; word string }; root:=&trie{}
	for _,w:=range words { n:=root; for _,c:=range w { i:=c-'a'; if n.next[i]==nil { n.next[i]=&trie{} }; n=n.next[i] }; n.word=w }
	if len(board)==0 { return nil }; out:=[]string{}; var dfs func(int,int,*trie); dfs=func(r,c int,n *trie) { ch:=board[r][c]; if ch=='#' { return }; child:=n.next[ch-'a']; if child==nil { return }; if child.word!="" { out=append(out,child.word); child.word="" }; board[r][c]='#'; if r>0 { dfs(r-1,c,child) }; if r+1<len(board) { dfs(r+1,c,child) }; if c>0 { dfs(r,c-1,child) }; if c+1<len(board[0]) { dfs(r,c+1,child) }; board[r][c]=ch }
	for r:=range board { for c:=range board[r] { dfs(r,c,root) } }; return out
}`,
  "letter-combinations-of-a-phone-number": `func letterCombinations(digits string) []string {
	if digits=="" { return nil }; letters:=[]string{"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"}; out:=[]string{}; path:=make([]byte,len(digits))
	var backtrack func(int); backtrack=func(i int) { if i==len(digits) { out=append(out,string(path)); return }; for _,c:=range letters[digits[i]-'0'] { path[i]=byte(c); backtrack(i+1) } }; backtrack(0); return out
}`,
  "combinations": `func combine(n int, k int) [][]int {
	out:=[][]int{}; path:=[]int{}; var dfs func(int); dfs=func(start int) { if len(path)==k { out=append(out,append([]int(nil),path...)); return }; for i:=start;i<=n-(k-len(path))+1;i++ { path=append(path,i); dfs(i+1); path=path[:len(path)-1] } }; dfs(1); return out
}`,
  "permutations": `func permute(nums []int) [][]int {
	out:=[][]int{}; used:=make([]bool,len(nums)); path:=[]int{}; var dfs func(); dfs=func() { if len(path)==len(nums) { out=append(out,append([]int(nil),path...)); return }; for i,x:=range nums { if !used[i] { used[i]=true; path=append(path,x); dfs(); path=path[:len(path)-1]; used[i]=false } } }; dfs(); return out
}`,
  "combination-sum": `func combinationSum(candidates []int, target int) [][]int {
	out:=[][]int{}; path:=[]int{}; var dfs func(int,int); dfs=func(start,left int) { if left==0 { out=append(out,append([]int(nil),path...)); return }; for i:=start;i<len(candidates)&&candidates[i]<=left;i++ { path=append(path,candidates[i]); dfs(i,left-candidates[i]); path=path[:len(path)-1] } }; sort.Ints(candidates); dfs(0,target); return out
}`,
  "n-queens-ii": `func totalNQueens(n int) int {
	cols,diag1,diag2:=map[int]bool{},map[int]bool{},map[int]bool{}; count:=0
	var dfs func(int); dfs=func(r int) { if r==n { count++; return }; for c:=0;c<n;c++ { if cols[c]||diag1[r-c]||diag2[r+c] { continue }; cols[c],diag1[r-c],diag2[r+c]=true,true,true; dfs(r+1); delete(cols,c); delete(diag1,r-c); delete(diag2,r+c) } }; dfs(0); return count
}`,
  "generate-parentheses": `func generateParenthesis(n int) []string {
	out:=[]string{}; path:=make([]byte,0,2*n); var dfs func(int,int); dfs=func(open,close int) { if len(path)==2*n { out=append(out,string(path)); return }; if open<n { path=append(path,'('); dfs(open+1,close); path=path[:len(path)-1] }; if close<open { path=append(path,')'); dfs(open,close+1); path=path[:len(path)-1] } }; dfs(0,0); return out
}`,
  "word-search": `func exist(board [][]byte, word string) bool {
	if len(board)==0 { return false }; m,n:=len(board),len(board[0]); var dfs func(int,int,int)bool; dfs=func(r,c,i int)bool { if i==len(word) { return true }; if r<0||r>=m||c<0||c>=n||board[r][c]!=word[i] { return false }; ch:=board[r][c]; board[r][c]='#'; found:=dfs(r+1,c,i+1)||dfs(r-1,c,i+1)||dfs(r,c+1,i+1)||dfs(r,c-1,i+1); board[r][c]=ch; return found }
	for r:=0;r<m;r++ { for c:=0;c<n;c++ { if dfs(r,c,0) { return true } } }; return false
}`,
  "convert-sorted-array-to-binary-search-tree": `func sortedArrayToBST(nums []int) *TreeNode {
	var build func(int,int)*TreeNode; build=func(l,r int)*TreeNode { if l>=r { return nil }; m:=(l+r)/2; return &TreeNode{Val:nums[m],Left:build(l,m),Right:build(m+1,r)} }; return build(0,len(nums))
}`,
  "sort-list": `func sortList(head *ListNode) *ListNode {
	if head==nil||head.Next==nil { return head }; slow,fast:=head,head.Next; for fast!=nil&&fast.Next!=nil { slow=slow.Next; fast=fast.Next.Next }; right:=slow.Next; slow.Next=nil
	a,b:=sortList(head),sortList(right); dummy:=&ListNode{}; tail:=dummy
	for a!=nil&&b!=nil { if a.Val<b.Val { tail.Next=a; a=a.Next } else { tail.Next=b; b=b.Next }; tail=tail.Next }; if a!=nil { tail.Next=a } else { tail.Next=b }; return dummy.Next
}`,
  "construct-quad-tree": `func construct(grid [][]int) *Node {
	var build func(int,int,int)*Node; build=func(r,c,size int)*Node { first:=grid[r][c]; same:=true; for i:=r;i<r+size;i++ { for j:=c;j<c+size;j++ { if grid[i][j]!=first { same=false } } }; if same { return &Node{Val:first==1,IsLeaf:true} }; half:=size/2
		return &Node{IsLeaf:false,TopLeft:build(r,c,half),TopRight:build(r,c+half,half),BottomLeft:build(r+half,c,half),BottomRight:build(r+half,c+half,half)}
	}; return build(0,0,len(grid))
}`,
  "merge-k-sorted-lists": `func mergeKLists(lists []*ListNode) *ListNode {
	h:=&ListNodeHeap{}; heap.Init(h); for _,node:=range lists { if node!=nil { heap.Push(h,node) } }; dummy:=&ListNode{}; tail:=dummy
	for h.Len()>0 { node:=heap.Pop(h).(*ListNode); tail.Next=node; tail=node; if node.Next!=nil { heap.Push(h,node.Next) } }; tail.Next=nil; return dummy.Next
}
type ListNodeHeap []*ListNode
func (h ListNodeHeap) Len() int { return len(h) }
func (h ListNodeHeap) Less(i,j int) bool { return h[i].Val<h[j].Val }
func (h ListNodeHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
func (h *ListNodeHeap) Push(x any) { *h=append(*h,x.(*ListNode)) }
func (h *ListNodeHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }`,
  "maximum-subarray": `func maxSubArray(nums []int) int {
	best,cur:=nums[0],nums[0]; for _,x:=range nums[1:] { if cur<0 { cur=x } else { cur+=x }; if cur>best { best=cur } }; return best
}`,
  "maximum-sum-circular-subarray": `func maxSubarraySumCircular(nums []int) int {
	total:=0; maxCur,maxSum,minCur,minSum:=nums[0],nums[0],nums[0],nums[0]; total=nums[0]
	for _,x:=range nums[1:] { if maxCur<0 { maxCur=x } else { maxCur+=x }; if maxCur>maxSum { maxSum=maxCur }; if minCur>0 { minCur=x } else { minCur+=x }; if minCur<minSum { minSum=minCur }; total+=x }
	if maxSum<0 { return maxSum }; if total-minSum>maxSum { return total-minSum }; return maxSum
}`,
  "search-insert-position": `func searchInsert(nums []int, target int) int {
	return sort.SearchInts(nums,target)
}`,
  "search-a-2d-matrix": `func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix)==0 { return false }; m,n:=len(matrix),len(matrix[0]); l,r:=0,m*n
	for l<r { mid:=(l+r)/2; v:=matrix[mid/n][mid%n]; if v<target { l=mid+1 } else { r=mid } }; return l<m*n&&matrix[l/n][l%n]==target
}`,
  "find-peak-element": `func findPeakElement(nums []int) int {
	l,r:=0,len(nums)-1; for l<r { m:=(l+r)/2; if nums[m]>nums[m+1] { r=m } else { l=m+1 } }; return l
}`,
  "search-in-rotated-sorted-array": `func search(nums []int, target int) int {
	l,r:=0,len(nums)-1; for l<=r { m:=(l+r)/2; if nums[m]==target { return m }; if nums[l]<=nums[m] { if nums[l]<=target&&target<nums[m] { r=m-1 } else { l=m+1 } } else { if nums[m]<target&&target<=nums[r] { l=m+1 } else { r=m-1 } } }; return -1
}`,
  "find-first-and-last-position-of-element-in-sorted-array": `func searchRange(nums []int, target int) []int {
	left:=sort.SearchInts(nums,target); if left==len(nums)||nums[left]!=target { return []int{-1,-1} }; right:=sort.Search(len(nums),func(i int)bool{return nums[i]>target})-1; return []int{left,right}
}`,
  "find-minimum-in-rotated-sorted-array": `func findMin(nums []int) int {
	l,r:=0,len(nums)-1; for l<r { m:=(l+r)/2; if nums[m]>nums[r] { l=m+1 } else { r=m } }; return nums[l]
}`,
  "median-of-two-sorted-arrays": `func findMedianSortedArrays(a []int, b []int) float64 {
	if len(a)>len(b) { return findMedianSortedArrays(b,a) }; m,n:=len(a),len(b); half:=(m+n+1)/2; l,r:=0,m
	for l<=r { i:=(l+r)/2; j:=half-i; if i<m&&j>0&&b[j-1]>a[i] { l=i+1 } else if i>0&&j<n&&a[i-1]>b[j] { r=i-1 } else { left:=0; if i==0 { left=b[j-1] } else if j==0 { left=a[i-1] } else if a[i-1]>b[j-1] { left=a[i-1] } else { left=b[j-1] }; if (m+n)%2==1 { return float64(left) }; right:=0; if i==m { right=b[j] } else if j==n { right=a[i] } else if a[i]<b[j] { right=a[i] } else { right=b[j] }; return float64(left+right)/2 } }; return 0
}`,
  "kth-largest-element-in-an-array": `func findKthLargest(nums []int, k int) int {
	h:=&IntMinHeap{}; heap.Init(h); for _,x:=range nums { heap.Push(h,x); if h.Len()>k { heap.Pop(h) } }; return (*h)[0]
}
type IntMinHeap []int
func (h IntMinHeap) Len() int { return len(h) }
func (h IntMinHeap) Less(i,j int) bool { return h[i]<h[j] }
func (h IntMinHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
func (h *IntMinHeap) Push(x any) { *h=append(*h,x.(int)) }
func (h *IntMinHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }`,
  "ipo": `func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
	type project struct { c,p int }; projects:=make([]project,len(profits)); for i:=range profits { projects[i]=project{capital[i],profits[i]} }; sort.Slice(projects,func(i,j int)bool{return projects[i].c<projects[j].c})
	h:=&IntMaxHeap{}; heap.Init(h); i:=0
	for step:=0;step<k;step++ { for i<len(projects)&&projects[i].c<=w { heap.Push(h,projects[i].p); i++ }; if h.Len()==0 { break }; w+=heap.Pop(h).(int) }; return w
}
type IntMaxHeap []int
func (h IntMaxHeap) Len() int { return len(h) }
func (h IntMaxHeap) Less(i,j int) bool { return h[i]>h[j] }
func (h IntMaxHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
func (h *IntMaxHeap) Push(x any) { *h=append(*h,x.(int)) }
func (h *IntMaxHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }`,
  "find-k-pairs-with-smallest-sums": `func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
	h:=&PairHeap{}; heap.Init(h); out:=[][]int{}; if len(nums1)==0||len(nums2)==0 { return out }
	for i:=0;i<len(nums1)&&i<k;i++ { heap.Push(h,pair{i,0,nums1[i]+nums2[0]}) }; for h.Len()>0&&len(out)<k { p:=heap.Pop(h).(pair); out=append(out,[]int{nums1[p.i],nums2[p.j]}); if p.j+1<len(nums2) { heap.Push(h,pair{p.i,p.j+1,nums1[p.i]+nums2[p.j+1]}) } }; return out
}
type pair struct { i,j,sum int }
type PairHeap []pair
func (h PairHeap) Len() int { return len(h) }
func (h PairHeap) Less(i,j int) bool { return h[i].sum<h[j].sum }
func (h PairHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
func (h *PairHeap) Push(x any) { *h=append(*h,x.(pair)) }
func (h *PairHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }`,
  "find-median-from-data-stream": `  type MedianFinder struct { low *MedianMaxHeap; high *MedianMinHeap }
  type MedianMaxHeap []int
  func (h MedianMaxHeap) Len() int { return len(h) }
  func (h MedianMaxHeap) Less(i,j int) bool { return h[i]>h[j] }
  func (h MedianMaxHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
  func (h *MedianMaxHeap) Push(x any) { *h=append(*h,x.(int)) }
  func (h *MedianMaxHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }
  type MedianMinHeap []int
  func (h MedianMinHeap) Len() int { return len(h) }
  func (h MedianMinHeap) Less(i,j int) bool { return h[i]<h[j] }
  func (h MedianMinHeap) Swap(i,j int) { h[i],h[j]=h[j],h[i] }
  func (h *MedianMinHeap) Push(x any) { *h=append(*h,x.(int)) }
  func (h *MedianMinHeap) Pop() any { old:=*h; n:=len(old); x:=old[n-1]; *h=old[:n-1]; return x }
  func Constructor() MedianFinder { a,b:=&MedianMaxHeap{},&MedianMinHeap{}; heap.Init(a); heap.Init(b); return MedianFinder{low:a,high:b} }
  func (m *MedianFinder) AddNum(num int) { heap.Push(m.low,num); heap.Push(m.high,heap.Pop(m.low)); if m.high.Len()>m.low.Len() { heap.Push(m.low,heap.Pop(m.high)) } }
  func (m *MedianFinder) FindMedian() float64 { if m.low.Len()>m.high.Len() { return float64((*m.low)[0]) }; return float64((*m.low)[0]+(*m.high)[0])/2 }
  `,
  "add-binary": `func addBinary(a string, b string) string {
	i,j,carry:=len(a)-1,len(b)-1,0; out:=[]byte{}
	for i>=0||j>=0||carry>0 { sum:=carry; if i>=0 { sum+=int(a[i]-'0'); i-- }; if j>=0 { sum+=int(b[j]-'0'); j-- }; out=append(out,byte(sum%2)+'0'); carry=sum/2 }
	for l,r:=0,len(out)-1;l<r;l,r=l+1,r-1 { out[l],out[r]=out[r],out[l] }; return string(out)
}`,
  "reverse-bits": `func reverseBits(num uint32) uint32 {
	var out uint32; for i:=0;i<32;i++ { out=out<<1|num&1; num>>=1 }; return out
}`,
  "number-of-1-bits": `func hammingWeight(num uint32) int {
	count:=0; for num!=0 { num&=num-1; count++ }; return count
}`,
  "single-number": `func singleNumber(nums []int) int {
	x:=0; for _,n:=range nums { x^=n }; return x
}`,
  "single-number-ii": `func singleNumber(nums []int) int {
	ones,twos:=0,0; for _,x:=range nums { ones=(ones^x)&^twos; twos=(twos^x)&^ones }; return ones
}`,
  "bitwise-and-of-numbers-range": `func rangeBitwiseAnd(left int, right int) int {
	shift:=0; for left<right { left>>=1; right>>=1; shift++ }; return left<<shift
}`,
  "palindrome-number": `func isPalindrome(x int) bool {
	if x<0||x%10==0&&x!=0 { return false }; rev:=0; for x>rev { rev=rev*10+x%10; x/=10 }; return x==rev||x==rev/10
}`,
  "plus-one": `func plusOne(digits []int) []int {
	for i:=len(digits)-1;i>=0;i-- { if digits[i]<9 { digits[i]++; return digits }; digits[i]=0 }; return append([]int{1},digits...)
}`,
  "factorial-trailing-zeroes": `func trailingZeroes(n int) int {
	count:=0; for n>0 { n/=5; count+=n }; return count
}`,
  "sqrtx": `func mySqrt(x int) int {
	if x<2 { return x }; l,r:=1,x/2; for l<=r { m:=l+(r-l)/2; if m<=x/m { l=m+1 } else { r=m-1 } }; return r
}`,
  "powx-n": `func myPow(x float64, n int) float64 {
	exp:=int64(n); if exp<0 { x=1/x; exp=-exp }; result:=1.0
	for exp>0 { if exp&1==1 { result*=x }; x*=x; exp>>=1 }; return result
}`,
  "max-points-on-a-line": `func maxPoints(points [][]int) int {
	if len(points)<3 { return len(points) }; best:=1
	for i:=0;i<len(points);i++ { slopes:=map[[2]int]int{}; duplicates:=0; local:=0
		for j:=i+1;j<len(points);j++ { dx,dy:=points[j][0]-points[i][0],points[j][1]-points[i][1]; if dx==0&&dy==0 { duplicates++; continue }; g:=gcd(abs(dx),abs(dy)); dx/=g; dy/=g; if dx<0||dx==0&&dy<0 { dx=-dx; dy=-dy }; key:=[2]int{dx,dy}; slopes[key]++; if slopes[key]>local { local=slopes[key] } }
		if local+duplicates+1>best { best=local+duplicates+1 }
	}; return best
}
func gcd(a,b int) int { for b!=0 { a,b=b,a%b }; return a }
func abs(x int) int { if x<0 { return -x }; return x }`,
  "climbing-stairs": `func climbStairs(n int) int {
	a,b:=1,1; for i:=0;i<n;i++ { a,b=b,a+b }; return a
}`,
  "house-robber": `func rob(nums []int) int {
	prev2,prev1:=0,0; for _,x:=range nums { prev2,prev1=prev1,max(prev1,prev2+x) }; return prev1
}`,
  "word-break": `func wordBreak(s string, wordDict []string) bool {
	words:=map[string]bool{}; maxLen:=0; for _,w:=range wordDict { words[w]=true; if len(w)>maxLen { maxLen=len(w) } }; dp:=make([]bool,len(s)+1); dp[0]=true
	for i:=1;i<=len(s);i++ { for j:=i-1;j>=0&&i-j<=maxLen;j-- { if dp[j]&&words[s[j:i]] { dp[i]=true; break } } }; return dp[len(s)]
}`,
  "coin-change": `func coinChange(coins []int, amount int) int {
	dp:=make([]int,amount+1); for i:=1;i<=amount;i++ { dp[i]=amount+1; for _,c:=range coins { if c<=i&&dp[i-c]+1<dp[i] { dp[i]=dp[i-c]+1 } } }; if dp[amount]>amount { return -1 }; return dp[amount]
}`,
  "longest-increasing-subsequence": `func lengthOfLIS(nums []int) int {
	tails:=[]int{}; for _,x:=range nums { i:=sort.SearchInts(tails,x); if i==len(tails) { tails=append(tails,x) } else { tails[i]=x } }; return len(tails)
}`,
  "triangle": `func minimumTotal(triangle [][]int) int {
	dp:=append([]int(nil),triangle[len(triangle)-1]...); for r:=len(triangle)-2;r>=0;r-- { for c:=0;c<=r;c++ { dp[c]=triangle[r][c]+min(dp[c],dp[c+1]) } }; return dp[0]
}`,
  "minimum-path-sum": `func minPathSum(grid [][]int) int {
	m,n:=len(grid),len(grid[0]); for r:=0;r<m;r++ { for c:=0;c<n;c++ { if r==0&&c==0 { continue }; best:=int(^uint(0)>>1); if r>0&&grid[r-1][c]<best { best=grid[r-1][c] }; if c>0&&grid[r][c-1]<best { best=grid[r][c-1] }; grid[r][c]+=best } }; return grid[m-1][n-1]
}`,
  "unique-paths-ii": `func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m,n:=len(obstacleGrid),len(obstacleGrid[0]); dp:=make([]int,n); dp[0]=1
	for r:=0;r<m;r++ { for c:=0;c<n;c++ { if obstacleGrid[r][c]==1 { dp[c]=0 } else if c>0 { dp[c]+=dp[c-1] } } }; return dp[n-1]
}`,
  "longest-palindromic-substring": `func longestPalindrome(s string) string {
	if len(s)<2 { return s }; start,end:=0,0
	expand:=func(l,r int) (int,int) { for l>=0&&r<len(s)&&s[l]==s[r] { l--; r++ }; return l+1,r-1 }
	for i:=range s { l1,r1:=expand(i,i); l2,r2:=expand(i,i+1); if r1-l1>end-start { start,end=l1,r1 }; if r2-l2>end-start { start,end=l2,r2 } }; return s[start:end+1]
}`,
  "interleaving-string": `func isInterleave(s1 string, s2 string, s3 string) bool {
	if len(s1)+len(s2)!=len(s3) { return false }; dp:=make([]bool,len(s2)+1); dp[0]=true
	for j:=1;j<=len(s2);j++ { dp[j]=dp[j-1]&&s2[j-1]==s3[j-1] }
	for i:=1;i<=len(s1);i++ { dp[0]=dp[0]&&s1[i-1]==s3[i-1]; for j:=1;j<=len(s2);j++ { k:=i+j-1; dp[j]=dp[j]&&s1[i-1]==s3[k]||dp[j-1]&&s2[j-1]==s3[k] } }; return dp[len(s2)]
}`,
  "edit-distance": `func minDistance(word1 string, word2 string) int {
	dp:=make([]int,len(word2)+1); for j:=range dp { dp[j]=j }
	for i:=1;i<=len(word1);i++ { prev:=dp[0]; dp[0]=i; for j:=1;j<=len(word2);j++ { old:=dp[j]; if word1[i-1]==word2[j-1] { dp[j]=prev } else { dp[j]=1+min(prev,dp[j],dp[j-1]) }; prev=old } }; return dp[len(word2)]
}`,
  "best-time-to-buy-and-sell-stock-iii": `func maxProfit(prices []int) int {
	buy1,buy2,sell1,sell2:= -prices[0],-prices[0],0,0
	for _,p:=range prices { buy1=max(buy1,-p); sell1=max(sell1,buy1+p); buy2=max(buy2,sell1-p); sell2=max(sell2,buy2+p) }; return sell2
}`,
  "best-time-to-buy-and-sell-stock-iv": `func maxProfit(k int, prices []int) int {
	if k==0||len(prices)==0 { return 0 }; if k>=len(prices)/2 { profit:=0; for i:=1;i<len(prices);i++ { if prices[i]>prices[i-1] { profit+=prices[i]-prices[i-1] } }; return profit }
	buy,sell:=make([]int,k+1),make([]int,k+1); for i:=1;i<=k;i++ { buy[i]= -prices[0] }
	for _,p:=range prices { for t:=1;t<=k;t++ { buy[t]=max(buy[t],sell[t-1]-p); sell[t]=max(sell[t],buy[t]+p) } }; return sell[k]
}`,
  "maximal-square": `func maximalSquare(matrix [][]byte) int {
	if len(matrix)==0 { return 0 }; m,n:=len(matrix),len(matrix[0]); dp:=make([]int,n+1); best:=0
	for r:=1;r<=m;r++ { prev:=0; for c:=1;c<=n;c++ { old:=dp[c]; if matrix[r-1][c-1]=='1' { dp[c]=1+min(dp[c],dp[c-1],prev); if dp[c]>best { best=dp[c] } } else { dp[c]=0 }; prev=old } }; return best*best
}`,
};
