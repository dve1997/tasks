var stringConversion = function (str) {
  const obj = {};
  let count = 1;
  let results = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
      obj[str[i]] = count;
    } else {
      count = 0;
      count++;
    }
  }

  for (const key in obj) {
    results += `${key}${obj[key]}`;
  }

  return results;
};

console.log(stringConversion('AAAABBCCCDDD'));
