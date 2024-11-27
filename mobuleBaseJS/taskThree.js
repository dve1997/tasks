var sumArray = function (array) {
  return array.reduce((res, item) => (res += item), 0);
};

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 2, -3, 4, -5]));
// console.log(sumArray([0, 0, 0, 0, 0]));
// console.log(sumArray([]));
