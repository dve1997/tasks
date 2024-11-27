var sortByLength = function (array) {
  return array.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(['apple', 'banana', 'orange', 'kiwi', 'grape']));
console.log(sortByLength(['a', 'bc', 'def', 'ghij', 'klmno']));
console.log(sortByLength([]));
console.log(sortByLength(['xyz', 'pq', 'rs', 'tuvw']));
