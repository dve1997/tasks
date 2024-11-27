var fibonacci = function (n) {
  const results = [0, 1];

  if (n === 0) {
    return results[0];
  }
  if (n === 1) {
    return results.reduce((res, item, arr) => {
      res += item;
      return res;
    });
  }

  for (let i = 2; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }

  return results[n];
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(10));
