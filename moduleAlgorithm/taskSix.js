var twoSum = function (nums, target) {
  // Резутатирующий массив с индексами элементов
  let results = [];

  // Запускаем два цикла перебора
  // Если сумма элемнта массива в первой итерации равна и второй итерации равны,
  // то возращаем индексы элементов
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        results.push(i);
        results.push(j);
        return results;
      }
    }
  }
};

// Раскомментировать
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
