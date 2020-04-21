### LeetCode3——无重复字符的字串
#### 题目：
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例：
```javascript
示例1
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例2
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例3
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
#### 解题思路
提取题目中的重要的名词，**无重复字符**、**最长**和**子串**。也就是说我们需要注意三点：
1. 去重：涉及到去重，我们首先就要想到一种数据结构——数组。数组的常见的去重方法要掌握。
2. 子串：字符串的子串，那么必须是连续的，
3. 最长：每次都记录当前最长的长度，最终得到得长度就是最长字串得长度。

#### 代码
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var lengthOfLongestSubstring = function(s) {
  var arr = [];
  var max = 0;
  for(var i = 0;i < s.length;i++){
    var index = arr.indexOf(s[i]);
    if( index> -1){
      arr.splice(0,index+1);
    }
    arr.push(s[i]);
    max = max > arr.length ? max :arr.length;
  }
  return max;
};
var result = lengthOfLongestSubstring(s);
console.log(result)
```

