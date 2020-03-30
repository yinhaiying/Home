### LeetCode1——两数之和
#### 题目：
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例：
```javascript
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
#### 解题思路
题目的关键是是找到target与数组中数的差值，然后判断这个差值是否在数组中，且不与原来的值重复。

#### 代码
**暴力破解法**
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0;i < nums.length;i++){
      let item = target-nums[i];  // 找到差值
      let j = nums.indexOf(item); // 判断数组中是否还含有这个差值
      if(j !== -1 && i !== j){
          return [i,j];
      }
  }
};
```
但是，在上面的方法中我们在循环中使用了`indexOf`方法，实际上又调用了一次循环。这样导致我们的时间复杂度是O(n2),那么我们可不可以将时间复杂度缩短到O(n)。因此，关键是我们不能再通过数组的遍历或者`indexOf`操作去查找，这里我们可以考虑使用一个对象，对象的查找比数组快得多。

**使用对象优化**
```javascript
let twoSum = function(nums, target) {
    let obj = {};
    let len = nums.length;
    for(let i = 0;i < len;i++){
        obj[nums[i]] = i;
    }
    for(let i = 0;i < len;i++){
        let item = target-nums[i];          // 找到差值
        if(obj[item] && obj[item] !== i){   // 使用对象来查找比使用数组中的indexOf要快得多。
            return [i,obj[item]];
        }
    }
};
```
通过先遍历对象，然后将数组中的每个值添加到对象的属性上，然后通过对象的查找来代替数组的查找。
但是这样的话，我们增加了一个`for`循环，空间复杂度增大，那么我们可不可以只使用一个循环了。

**进一步优化**

```javascript
let twoSum = function(nums, target) {
    let obj = {};
    let len = nums.length;
    for(let i = 0;i < len;i++){
        let item = target-nums[i];
        if(nums[i] in obj && i !== obj[nums[i]]){
          return [i,obj[nums[i]]];
        }else{
            obj[item] = i;
        }
    }
};
```
我们每次只需要判断当前属性值在不在`obj`属性上，如果在则直接返回，如果不在将其差值添加到`obj`对象上即可。
