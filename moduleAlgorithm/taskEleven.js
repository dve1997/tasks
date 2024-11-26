var maximumProductSubarray = function (nums) {
  // Задаем текущую и результатирующее произведение
  let curMult = 0;
  let maxMelt = nums[0];

  //   Возращаем либо значение элемента, либо произведение текущего элемента и текущего произведения
  // Возращаем либо значение текущего произведения, либо значение максимального произведения
  for (let i = 0; i < nums.length; i++) {
    curMult = Math.max(nums[i], curMult * nums[i]);
    maxMelt = Math.max(curMult, maxMelt);
  }

  return maxMelt;
};

console.log(maximumProductSubarray([2, 3, -2, 4]));
console.log(maximumProductSubarray([-2, 0, -1]));
