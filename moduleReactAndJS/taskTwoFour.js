// Найти все элементы массива, встречающиеся более ⌊n/3⌋ раз

function moreThanNByThree(nums) {
  let first = Infinity,
    second = Infinity;
  let count1 = 0,
    count2 = 0;
  for (let n of nums) {
    if (n === first) {
      count1++;
    } else if (n === second) {
      count2++;
    } else if (count1 === 0) {
      first = n;
      count1 = 1;
    } else if (count2 === 0) {
      second = n;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  const result = [];
  if (nums.filter(n => n === first).length > nums.length / 3) {
    result.push(first);
  }
  if (nums.filter(n => n === second).length > nums.length / 3) {
    result.push(second);
  }
  return result;
}

// console.log(moreThanNByThree([3, 2, 3]));
// console.log(moreThanNByThree([1]));
// console.log(moreThanNByThree([1, 2]));
