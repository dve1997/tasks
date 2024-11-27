var fibonacci = function (n) {
  // Переменная результатирующего массива
  const results = [0, 1];

  // Если длина массива равна 0, возращаем 0 элемент
  // Если длинна массива равна 1, возращаем сумму первых двух элементов
  if (n === 0) {
    return results[0];
  }
  if (n === 1) {
    return results.reduce((res, item, arr) => {
      res += item;
      return res;
    });
  }

  // Если длина равна n, заполняем массив согласно алгоритму
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }

  return results[n];
};

// Раскомментировать
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(10));
