var containsDuplicate = function (nums) {
  // Создаем set с уникальными значениями
  const set = new Set(nums);

  //   Если длина set равна длине array, то возращаем false,
  // иначе возращаем true
  if (set.size === nums.length) {
    return false;
  }

  return true;
};

// Раскомментировать
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
