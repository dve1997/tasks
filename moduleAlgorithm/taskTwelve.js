var RotateArray = function (k, nums) {
  // Добавляем элементы в начало массива из конца k количество раз
  for (let i = 1; i <= k; i++) {
    nums.unshift(nums[nums.length - i]);
  }

  //   Удаляем k количество элементов из массива
  nums.length = nums.length - k;

  return nums;
};

// Раскомментировать
// console.log(RotateArray(3, [1, 2, 3, 4, 5, 6, 7]));
// console.log(RotateArray(2, [-1, -100, 3, 99]));
