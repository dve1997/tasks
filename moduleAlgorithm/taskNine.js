var singleNumberII = function (nums) {
  // Промежуточные переменные для сравнения
  let ones = 0;
  let twos = 0;

  //   Последовательное сравнение элементов масиива
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }

  return ones;
};

// Раскомментировать
// console.log(singleNumberII([2, 2, 3, 2]));
// console.log(singleNumberII([0, 1, 0, 1, 0, 1, 99]));
