var longestPalindromicSubstring = function (str) {
  // Проверка, что переданный агрумент не является пустой строкой
  if (str.length === 0) {
    return '';
  }

  //   Промежуточная переменная и результатирующая строка
  let per = '';
  let results = '';

  //   Функия поиска наибольшей полиномной строки
  function searchingForALargerPolynomialSubstring(str) {
    //   Промежуточная переменная
    let res = '';

    //   Первая обрезанная, развернутая половина строка
    const str1 = str
      .substring(0, Math.floor(str.length / 2))
      .split('')
      .reverse()
      .join('');
    //   Вторая обрезанная половина строка
    const str2 = str.substring(Math.ceil(str.length / 2), str.length);
    // Промежуточный символ строки, при нечетном количестве символов
    const str3 = str.substring(
      Math.floor(str.length / 2),
      Math.ceil(str.length / 2),
    );
    // Длина половины строки для перебора
    const lengthEnumeration = Math.floor(str.length / 2);

    // Если половина строки не равна половине развернутой строки,
    // возращаем часть которая равана, либо undefined, иначе возращаем результат
    for (let i = 0; i < lengthEnumeration; i++) {
      if (str1[i] !== str2[i] && str.length > 1) {
        return res;
      }
      if (i === 0) {
        res = str3;
      }
      res = str1[i] + res + str2[i];
    }
    return res;
  }

  // Уменьшение длины строки и перебор вевозможных вариантов
  for (let i = 0; i < str.length; i++) {
    let strForChecks = str.substring(0, Math.ceil(str.length) - i);
    per = searchingForALargerPolynomialSubstring(strForChecks);
    if (results.length < per.length) {
      results = per;
    }
  }

  return results;
};

// Раскомментировать
// console.log(longestPalindromicSubstring(''));
// console.log(longestPalindromicSubstring('amanaplanacanalpanama'));
// console.log(longestPalindromicSubstring('babad'));
// console.log(longestPalindromicSubstring('cbbd'));
