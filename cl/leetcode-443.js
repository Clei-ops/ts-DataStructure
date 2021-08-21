/**
 * @param {character[]} chars
 * @return {number}
 * 给你一个字符数组 chars ，请使用下述算法压缩：

从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：

如果这一组长度为 1 ，则将字符追加到 s 中。
否则，需要向 s 追加字符，后跟这一组的长度。
压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。

请在 修改完输入数组后 ，返回该数组的新长度。

你必须设计并实现一个只使用常量额外空间的算法来解决此问题。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/string-compression
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var compress = function (chars) {
  var repeatNum = 1;
  var index = 0;
  var chars_length = chars.length;
  var i = 0;
  while (i < chars.length - 1) {
    if (chars[i] === chars[i + 1]) {
      repeatNum++;
      i++;
    } else {
      if (repeatNum === 1) {
        chars[index] = chars[i];
        i++;
        index++;
      } else {
        chars[index] = chars[i];
        for (let k = 0; k < repeatNum.toString().length; k++) {
          chars[index + 1 + k] = repeatNum.toString().substring(k, k + 1);
        }
        index = index + 1 + repeatNum.toString().length;
        i++;
        repeatNum = 1;
      }
    }
  }
  if (repeatNum === 1) {
    chars[index] = chars[i];
    index++;
    chars.splice(index, chars_length - index);
  } else {
    chars[index] = chars[i];
    for (let k = 0; k < repeatNum.toString().length; k++) {
      chars[index + 1 + k] = repeatNum.toString().substring(k, k + 1);
    }
    index = index + 1 + repeatNum.toString().length;
    chars.splice(index, chars_length - index);
  }
  return chars.length;
};


// 第二种
/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function (chars) {
    const n = chars.length;
    let left = 0, write = 0;
    for (let read = 0; read < n; read++) {
        if (read === n - 1 || chars[read] !== chars[read + 1]) {
            chars[write++] = chars[read];
            var num = read - left + 1;
            var reverse_left = write;
            while (num > 1) {
                while (num > 0) {
                    chars[write++] = '' + num % 10;
                    num = Math.floor(num / 10);
                }
            }
            reverse(chars, reverse_left, write - 1);
            left = read + 1;
        }
    }
    return write;
};
const reverse = (chars, left, right) => {
    while (left < right) {
        var temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
}