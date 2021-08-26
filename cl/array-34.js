/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var searchRange = function (nums, target) {
  const n = nums.length;
  if (n == 0) {
    return [-1, -1];
  }
  if (n == 1) {
    if (nums[0] == target) return [0, 0];
  }
  let l = 0,
    r = n - 1;
  var arr = [];
  if (target >= nums[l] && target <= nums[r]) {
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] == target) {
        var templ = (tempr = mid);
        while (nums[--templ] == target);
        arr.push(templ + 1);
        while (nums[++tempr] == target);
        arr.push(tempr - 1);
        return arr;
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return [-1, -1];
};
