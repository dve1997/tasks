const array = [1, 2, 3, 4, 5];

var asyncEvery = async function (array, predicate) {
  const response = await delay(predicate);
  if (response) {
    return array.every(elem => elem <= response);
  } else {
    console.log('error');
  }
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve(7), ms));
}

console.log(asyncEvery(array, 10));
