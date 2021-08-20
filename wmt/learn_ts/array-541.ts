function reverseStr(s: string, k: number): string {
  if(s.length <= 2 * k) {
      return reverseStrLessToK(s, k);
  }

  const order = Math.ceil(s.length / (2 * k));
  const rest = s.length % (2 * k);
  let sChange = s.split('').slice();
  let restArr = sChange.slice(s.length - rest, s.length);
  let temp = sChange.slice(0, s.length - rest);

  for(let i = 0; i < order; i++) {
      for(let ii = i * 2 * k, jj = i * 2 * k + k - 1; ii < jj; ii++, jj--) {
          let bowel = temp[ii];
          temp[ii] = temp[jj];
          temp[jj] = bowel;
      }
  }

  return temp.join('') + reverseStrLessToK(restArr.join(''), k);
};

function reverseStrLessToK(s: string, k: number): string {
  if(s.length < k) {
      return s.split('').reverse().join('');
  }

  if(s.length <= 2 * k) {
      let s2k: string[] = s.split('').slice(0, k);
      return s2k.reverse().join('') + s.substring(k, s.length);
  }
}