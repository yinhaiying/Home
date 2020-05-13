# 540. 有序数组中的单一元素
## 题目：
给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。


示例：
```javascript
示例 1:

输入: [1,1,2,3,3,4,4,8,8]
输出: 2

示例 2:

输入: [3,3,7,7,10,11,11]
输出: 10
```
## 解题思路
提取题目中的重要的名词，**有序数组**、**每个出现两次**、**只有一个出现一次**。也就是说我们需要：
1. 利用数组的有序性
2. 利用接连的两个数相等
3. 利用有一个数是与前后都不相等的。

分析：我们可以直接利用题目给出的条件，通过循环找到一个数与前后都不相等那么他就是唯一的只出现一次的数。
然后考虑一下边界条件，即可能没有前或者后比如第一个和最后一个。

**暴力破解法**
## 代码
```javascript
var nums = [3,3,7,7,10,11,11];
var singleNonDuplicate = function(nums) {
  if(nums[0] !== nums[1]){
    return nums[0];
  }
  if(nums[nums.length -1] !==nums[nums.length-2]){
    return nums[nums.length - 1];
  }
  for(var i = 1;i < nums.length -1;i++){
    if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]){
      return nums[i];
    }
  }
};
console.log(singleNonDuplicate(nums))
```
通过上面的方法我们能够实现找出唯一的一个，但是这种方法的时间复杂度最少是O(1),最多是O(n-1)，也就是说平均时间复杂度是O(n/2)，不是题目要求的O(logn)。因此，我们需要找到一种更加简便的方法。看到题目要求的必须是O(logn)，又是有序数组，我们第一个想到的就应该是二分搜索。

**优化方法**
首先是有序，然后要求时间复杂度logn，确定二分法
此题可以不用取整，因为肯定有个中间值。
重点判断的地方就是，找到中间的值，然后判断左边还是右边相等，再次判断左边或者右边剩下的数字里边的长度，是奇数 还是偶数。如果是奇数，收缩边界，从奇数里边继续找。
```javascript
  var l = 0;
  var r = nums.length - 1;
  while(l <= r){
    let mid = l + ( r - l )/2;
      if(nums[mid - 1] == nums[mid]){
        (mid - 1) % 2 == 0 ? l = mid + 1 : r = mid - 2
      }else if(nums[mid + 1] == nums[mid]){
        mid % 2 == 0 ? l = mid + 2 : r = mid - 1
      }else{
        return nums[mid];
      }
  }
  return -1;
=
```

