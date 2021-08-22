/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 3) {
    return null;
  }
  const n = nums.length;
  const SortArray = nums.sort((a, b) => a - b);
  var ans = SortArray[0] + SortArray[1] + SortArray[2];
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const temp = SortArray[i] + SortArray[l] + SortArray[r];
      if (Math.abs(temp - target) < Math.abs(ans - target)) {
        ans = temp;
      }
      if (temp > target) {
        r--;
      } else if (temp < target) {
        l++;
      } else if (temp === target) {
        return ans;
      }
    }
  }
  return ans;
};
