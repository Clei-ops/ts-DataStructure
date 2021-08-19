/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function (s) {
    var yuanyin = [];
    var yuanyinnum = [];
    for (let i = 0; i < s.length; i++) {
        if ("AEIOUaeiou".indexOf(s.substring(i, i + 1)) !== -1) {
            yuanyin.push(s.substring(i, i + 1))
            yuanyinnum.push(i)
        }
    }
    for (let i = 0, j = yuanyin.length - 1; i < yuanyinnum.length; i++, j--) {
        s = replaceStr2(s, yuanyinnum[i], yuanyin[j])
    }
    return s;
};
const replaceStr2 = (str, index, char) => {
    return str.substring(0, index) + char + str.substring(index + 1);
}