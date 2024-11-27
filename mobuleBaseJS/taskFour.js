const getUniqueValues = function (array) {
  const set = new Set(array);

  return set;
};

console.log(getUniqueValues([1, 2, 3, 3, 4, 5, 4, 6]));
console.log(getUniqueValues([5, 5, 5, 5, 5]));
console.log(getUniqueValues([1, 2, 3, 4, 5]));
console.log(getUniqueValues([]));
