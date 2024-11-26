// Я в итоге решил при помощи алгортима Кадана, у меня была ошибка
var maximumSubarray = function (nums) {
  // Задаем текущую сумму и результатирующую сумму
  let curSum = 0;
  let maxSum = nums[0];

  //   Возращаем либо значение элемента, либо сумму текущего элемента и текущей суммы
  // Возращаем либо значение текущей суммы, либо значение максимальной суммы
  for (let i = 0; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
};

// Раскомментировать
// console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maximumSubarray([1]));
// console.log(maximumSubarray([5, 4, -1, 7, 8]));
