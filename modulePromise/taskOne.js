var parallelPromisesWithLimit = async function (promisesArr, parallelLimit) {
  const results = [];
  let quantityCircles = Math.round(promisesArr.length / 5);
  let counter = 0;
  let limit = parallelLimit;

  for (let i = 0; i < quantityCircles; i++) {
    for (let i = counter; i < limit; i++) {
      await promisesArr[i]().then(res => results.push(res));
    }
    counter = 5;
    limit += 5;
  }

  return results;
};

const testURLs = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6',
  'https://jsonplaceholder.typicode.com/posts/7',
  'https://jsonplaceholder.typicode.com/posts/8',
  'https://jsonplaceholder.typicode.com/posts/9',
  'https://jsonplaceholder.typicode.com/posts/10',
];

function mockFetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Response from ${url}`);
    }, 1);
  });
}

async function test(time) {
  // Запуск 5 одновременных запросов
  const results = await parallelPromisesWithLimit(
    testURLs.map(url => () => mockFetch(url)),
    time,
  );

  return results;
}

// Раскомментировать
// console.log(test(5).then(res => console.log(res)));
