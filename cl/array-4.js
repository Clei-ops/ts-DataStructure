/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *  寻找两个正序数组中的中位数
 *  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返 回 这两个正序数组的 中位数 。
 *  输入：nums1 = [1,3], nums2 = [2]
    输出：2.00000
    解释：合并数组 = [1,2,3] ，中位数 2
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var nums = nums1.concat(nums2);
  var num = sort(nums);
  if (num.length % 2 === 0) {
    var result = ((num[num.length / 2] + num[num.length / 2 - 1]) / 2).toFixed(
      5
    );
  } else if (num.length % 2 === 1) {
    var result = num[(num.length - 1) / 2].toFixed(5);
  }
  return result;
};
var sort = function (num) {
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        var temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
    }
  }
  return num;
};
