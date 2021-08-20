/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
输入：s = "abcdefg", k = 2
输出："bacdfeg"
 */
var reverseStr = function (s, k) {
  var array_s = s.split("");
  for (var m = 0, n = k - 1; m < array_s.length; m += 2 * k, n += 2 * k) {
    if (array_s.length - m < k) {
      n = array_s.length - 1;
    }
    for (var i = m, j = n; ; i++, j--) {
      if (i === j) break;
      var temp = array_s[i];
      array_s[i] = array_s[j];
      array_s[j] = temp;
      if (i + 1 === j || i + 2 === j) break;
    }
  }
  var result = array_s.join("");
  return result;
};
