/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 39. 组合总和
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 

对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

 

示例 1：

输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var combinationSum = function (candidates, target) {
  var result = [];
  const n = candidates.length;
  var dfs = function (target, index, combine) {
    if (index == n) return;
    if (target == 0) {
      result.push(combine);
      return;
    }
    dfs(target, index + 1, combine);
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], index, [...combine, candidates[index]]);
    }
  };
  dfs(target, 0, []);
  return result;
};
