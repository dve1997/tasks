var longestSubstringWithoutRepeatingCharacters = function (str) {
  // Промежуточная переменная и резутатирующая длина
  let strChecks = '';
  let results = 0;

  // Если символа нет в промежуточной переменной, то добавляем его
  // Если есть, значит символ повторился, проверяем результат длины
  //   Если результат длины меньше текущей длины строки, то перезаписываем результат
  for (const value of str) {
    if (!strChecks.includes(value)) {
      strChecks += value;
    } else {
      if (results < strChecks.length) {
        results = strChecks.length;
        strChecks = '';
        strChecks += value;
      }
    }
  }

  return results;
};

console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb'));
console.log(longestSubstringWithoutRepeatingCharacters('bbbbb'));
console.log(longestSubstringWithoutRepeatingCharacters('pwwkew'));
