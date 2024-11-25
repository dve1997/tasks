const str1 = 'A man, a plan, a canal: Panama';
const str2 = 'race a car';
const str3 = ' ';

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
// console.log(ValidPalindrome(str1));
// console.log(ValidPalindrome(str2));
// console.log(ValidPalindrome(str3));
