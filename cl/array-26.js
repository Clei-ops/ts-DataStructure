/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var removeDuplicates = function (nums) {
    var i = 0; j = 0;
    for (; i < nums.length; i++) {
        if (i !== nums.length - 1 && nums[i] !== nums[i + 1]) {
            nums[j++] = nums[i];
        } else if (i === nums.length - 1 ) {
            nums[j++]=nums[i];
        }
    }
    return j
};