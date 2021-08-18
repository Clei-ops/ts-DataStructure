function findDisappearedNumbers(nums: number[]): number[] {
  const array: number[] = new Array(nums.length);
  const result: number[] = new Array();
  for(let i = 1; i <= nums.length; i++) {
      array.push(i);
  }

  array.map(item => {
      if (nums.indexOf(item) === -1) {
          result.push(item);
      }
  });
  
  return result;
};