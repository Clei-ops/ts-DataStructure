/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var nextPermutation = function (nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            for (let m = nums.length - 1; m >= i; m--) {
                if (nums[m] > nums[i - 1]) {
                    let temp = nums[m];
                    nums[m] = nums[i - 1];
                    nums[i - 1] = temp;
                    break;
                }
            }
            break;
        }
    }
    if (i > 0) {
        let k = i;
        let j = nums.length - 1;
        while (k < j) {
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
            k++;
            j--;
        }
    }
    else if (i == 0) {
        nums.reverse();
    }
};