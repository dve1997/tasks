var list = function (array) {
  const results = [];

  for (const value of array) {
    results.push(`Name: ${value.name}`);
  }

  return results;
};

// console.log(list([{ name: 'Vladislav' }, { name: 'Diana' }]));
// console.log(list([{ name: 'Evgeniy' }, { name: 'Svetlana' }]));
