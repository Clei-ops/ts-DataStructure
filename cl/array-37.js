/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 37. 解数独
 * 编写一个程序，通过填充空格来解决数独问题。

数独的解法需 遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sudoku-solver
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var solveSudoku = function (board) {
  var temp = [];
  var line = new Array(9);
  for (let i = 0; i < 9; i++) {
    line[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      line[i][j] = false;
    }
  }
  var col = new Array(9);
  for (let i = 0; i < 9; i++) {
    col[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      col[i][j] = false;
    }
  }
  var block = new Array(3);
  for (let i = 0; i < 3; i++) {
    block[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      block[i][j] = new Array(9);
      for (let k = 0; k < 9; k++) {
        block[i][j][k] = false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") {
        temp.push([i, j]);
      } else {
        line[i][board[i][j] - "0" - 1] =
          col[j][board[i][j] - "0" - 1] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j] - "0" - 1] =
            true;
      }
    }
  }

  dfs(board, 0, temp, line, col, block);
};

dfs = (board, pos, temp, line, col, block) => {
  if (pos == temp.length) {
    valid = true;
    return;
  }
  let [i, j] = temp[pos];
  for (let k = 0; k < 9; k++) {
    if (
      !line[i][k] &&
      !col[j][k] &&
      !block[Math.floor(i / 3)][Math.floor(j / 3)][k]
    ) {
      line[i][k] =
        col[j][k] =
        block[Math.floor(i / 3)][Math.floor(j / 3)][k] =
          true;
      board[i][j] = k + 1 + "";
      dfs(board, pos + 1, temp, line, col, block);
      line[i][k] =
        col[j][k] =
        block[Math.floor(i / 3)][Math.floor(j / 3)][k] =
          false;
      let [m, n] = temp[temp.length - 1];
      if (board[m][n] != ".") {
        break;
      }
    }
  }
};
var valid = false;
