var removeDuplicatesfromSortedArrayII = function (nums) {
  // Результатирующий массив
  const results = [];

  //   Если в массиве нет элменета или количество элементов не превышает 1,
  // то добавляем элемент
  for (let i = 0; i < nums.length; i++) {
    if (
      !results.includes(nums[i]) ||
      results.filter(item => item === nums[i]).length < 2
    ) {
      results.push(nums[i]);
    }
  }

  return results;
};

console.log(removeDuplicatesfromSortedArrayII([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicatesfromSortedArrayII([0, 0, 1, 1, 1, 1, 2, 3, 3]));
