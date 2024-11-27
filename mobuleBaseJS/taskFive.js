var getUniqueValuesWithoutSet = function (array) {
  const results = [];

  for (const value of array) {
    if (!results.includes(value)) {
      results.push(value);
    }
  }

  return results;
};

// console.log(getUniqueValuesWithoutSet([1, 2, 3, 3, 4, 5, 4, 6]));
// console.log(getUniqueValuesWithoutSet([5, 5, 5, 5, 5]));
// console.log(getUniqueValuesWithoutSet([1, 2, 3, 4, 5]));
// console.log(getUniqueValuesWithoutSet([]));
