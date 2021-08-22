/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const arr = nums.sort((a, b) => a - b);
  if (arr[0] > 0 || arr[arr.length - 1] < 0) {
    return [];
  }
  var three_sum = new Array();
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) {
      return three_sum;
    }
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      const temp = arr[i] + arr[l] + arr[r];
      if (temp < 0) {
        l++;
      } else if (temp > 0) {
        r--;
      } else if (temp == 0) {
        three_sum.push([arr[i], arr[l], arr[r]]);
        while (l < r && arr[l] == arr[l + 1]) {
          l++;
        }
        while (l < r && arr[r] == arr[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return three_sum;
};
