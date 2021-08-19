function reverseVowels_ts(s: string): string {
  const vowelArr: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', "U"];
  let temp: string[] = s.split('');
  let sArr: string[] = [...temp];
  let pick: string[] = [];
  sArr.map((item, index) => {
      if (vowelArr.indexOf(item) !== -1)  {
          pick.push(item);
          temp.splice(index, 1, '');
      }
  });

  pick.reverse();

  pick.map(item => {
      let index = temp.indexOf('');
      temp[index] = item;
  });

  return temp.join('');
};