function runInOrder(functions, delays) {
  functions.forEach((fun, i) => {
    return setTimeout(fun, delays[i]);
  });
}

const functions = [
  () => console.log('first'),
  () => console.log('second'),
  () => console.log('third'),
];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays);
// logs "first" after 2 seconds,
// "second" after another 1 second,
// and "third" after another 3 seconds
