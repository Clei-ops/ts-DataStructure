/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] ：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

 

示例 1：

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    var result = [];
    const arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1])
            continue;
        if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target)
            break;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1])
                continue;
            if (arr[i] + arr[j] + arr[j + 1] + arr[j + 2] > target)
                break;
            let l = j + 1;
            let r = nums.length - 1;
            while (l < r) {
                const temp = arr[i] + arr[j] + arr[l] + arr[r];
                if (temp == target) {
                    result.push([arr[i], arr[j], arr[l], arr[r]]);
                    while (arr[l + 1] == arr[l]) {
                        l++;
                    }
                    while (arr[r - 1] == arr[r]) {
                        r--;
                    }
                    r--;
                    l++;
                }
                else if (temp < target) {
                    while (arr[l + 1] == arr[l]) {
                        l++;
                    }
                    l++;
                } else if (temp > target) {
                    while (arr[r - 1] == arr[r]) {
                        r--
                    }
                    r--;
                }
            }
        }
    }
    return result;
};