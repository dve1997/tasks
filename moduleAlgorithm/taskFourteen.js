var integertoRoman = function (num) {
  // Переменная результата
  // и массив с значением латинских чисел и римских чисел
  let results = '';
  const symbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  //   Первый цикл позволяет записать латинские числа,
  // которые записываются несколькими римскими числами
  // Если переданной число минус число в массиве больше либо равно 0,
  // то вычитаем из переданного числа полченное число и записываем в результат первое римское число и так далее
  for (let i = 0; i < 4; i++) {
    for (const obj of symbols) {
      if (num - obj.value >= 0) {
        num = num - obj.value;
        results += obj.symbol;
      }
    }
  }

  return results;
};

// Раскомментировать
// console.log(integertoRoman(3));
// console.log(integertoRoman(58));
// console.log(integertoRoman(1994));
