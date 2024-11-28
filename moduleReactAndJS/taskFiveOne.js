function compare(field, order) {
  var len = arguments.length;
  if (len === 0) {
    return (a, b) => (a < b && -1) || (a > b && 1) || 0;
  }
  if (len === 1) {
    switch (typeof field) {
      case 'number':
        return field < 0
          ? (a, b) => (a < b && 1) || (a > b && -1) || 0
          : (a, b) => (a < b && -1) || (a > b && 1) || 0;
      case 'string':
        return (a, b) =>
          (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
    }
  }
  if (len === 2 && typeof order === 'number') {
    return order < 0
      ? (a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0
      : (a, b) =>
          (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
  }
  var fields, orders;
  if (typeof field === 'object') {
    fields = Object.getOwnPropertyNames(field);
    orders = fields.map(key => field[key]);
    len = fields.length;
  } else {
    fields = new Array(len);
    orders = new Array(len);
    for (let i = len; i--; ) {
      fields[i] = arguments[i];
      orders[i] = 1;
    }
  }
  return (a, b) => {
    for (let i = 0; i < len; i++) {
      if (a[fields[i]] < b[fields[i]]) return orders[i];
      if (a[fields[i]] > b[fields[i]]) return -orders[i];
    }
    return 0;
  };
}

function gettingString(array) {
  const curArray = [];
  let results = '';

  for (const obj of array) {
    if (obj.expired !== true) {
      curArray.push(obj);
    }
  }

  const finallyArray = curArray.sort(compare('order'));

  for (const obj of finallyArray) {
    results += `${obj.value}`;
  }

  return results.split('').reverse().join('');
}

const input = [
  { expired: false, order: 4, value: 'abcd' },
  { expired: true, order: 2, value: 'qwer' },
  { expired: false, order: 1, value: 'xyz1' },
  { expired: false, order: 3, value: 'abx2' },
];

console.log(gettingString(input));
