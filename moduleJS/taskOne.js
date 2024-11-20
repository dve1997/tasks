const list = [
  'lyhxr@example.com',
  'lyhxr@example.com',
  'masha@example.com',
  'fedya@example.com',
  'katya@example.com',
  'fedya@example.com',
  'katya@example.com',
  'lyhxr@example.com',
];

var duplicate = function (list) {
  const storageOfExisting = {};
  const results = [];

  for (let value of list) {
    if (storageOfExisting[value] === value) {
      if (results.find(elem => elem === storageOfExisting[value])) {
        console.log('элемент уже есть в массиве');
      } else {
        results.push(storageOfExisting[value]);
      }
    } else {
      storageOfExisting[value] = value;
    }
  }

  return results;
};

// Раскомментировать
// console.log(duplicate(list));
