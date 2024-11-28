var gettingArrayWithLargestSum = function (array) {
  return array
    .map(item => {
      return item.reduce((res, item) => (res += item), 0);
    })
    .sort((a, b) => a + b)[0];
};

// console.log(
//   gettingArrayWithLargestSum([
//     [2, 3],
//     [-2, 4],
//   ]),
// );
