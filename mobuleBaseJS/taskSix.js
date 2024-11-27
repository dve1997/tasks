var checkString = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' && str[i + 1] !== ')') {
      return false;
    }
    if (str[i] === '[' && str[i + 1] !== ']') {
      return false;
    }
    if (str[i] === '{' && str[i + 1] !== '}') {
      return false;
    }
  }

  return true;
};

console.log(checkString('()'));
console.log(checkString('()[]{}'));
console.log(checkString('(]'));
