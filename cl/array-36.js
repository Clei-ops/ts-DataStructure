/**
 * @param {character[][]} board
 * @return {boolean}
 * 36. 有效的数独
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-sudoku
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var isValidSudoku = function (board) {
  var value = new Array(9);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") {
        board[i][j] = "0";
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      value[k] = board[i][k];
    }
    value = sort(value);
    for (let j = 8; j > 0; j--) {
      if (value[j] == value[j - 1] && value[j] !== "0") return false;
      if (value[j] == "0") {
        break;
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      value[k] = board[k][i];
    }
    value = sort(value);
    for (let j = 8; j > 0; j--) {
      if (value[j] == value[j - 1] && value[j] !== "0") return false;
      if (value[j] == "0") {
        break;
      }
    }
  }
  for (let k = 0; k < 9; k += 3) {
    for (let m = 0; m < 9; m += 3) {
      let temp = 0;
      for (let i = 0 + k; i < 3 + k; i++) {
        for (let j = 0 + m; j < 3 + m; j++) {
          value[temp++] = board[i][j];
        }
      }
      value = sort(value);
      for (let j = 8; j > 0; j--) {
        if (value[j] == value[j - 1] && value[j] !== "0") return false;
        if (value[j] == "0") {
          break;
        }
      }
    }
  }
  return true;
};
let sort = function (nums) {
  for (let k = 1; k < 9; k++) {
    let value = nums[k];
    let m = k - 1;
    for (; m >= 0; m--) {
      if (nums[m] > value) {
        nums[m + 1] = nums[m];
      } else {
        break;
      }
    }
    nums[m + 1] = value;
  }
  return nums;
};
