var ValidPalindrome = function (str) {
  // Удаляем из строки все кроме букв и цифр
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  //   Исходная строка
  const str1 = str;
  //   Развернутая строка
  const str2 = str.split('').reverse().join('');
  // Получаем пол строки для перебора
  const lengthEnumeration = Math.floor(str.length / 2);
  // Если половина строки не равна половине развернутой строки,
  // возращаем false, иначе возращаем true
  for (let i = 0; i < lengthEnumeration; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
};

// Раскомментировать
// console.log(ValidPalindrome('A man, a plan, a canal: Panama'));
// console.log(ValidPalindrome('race a car'));
// console.log(ValidPalindrome(' '));
