/**
 * @param {number[]} nums
 * @return {number}
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-missing-positive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var firstMissingPositive = function (nums) {
    let ins = nums.length + 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = nums.length + 1;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (Math.abs(nums[j]) <= nums.length && nums[Math.abs(nums[j]) - 1] > 0) {
            nums[Math.abs(nums[j]) - 1] = -nums[Math.abs(nums[j]) - 1];
        }
    }
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > 0) {
            ins = k + 1;
            break;
        }
    }
    return ins;
};