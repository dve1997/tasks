// function promiseAll(promises) {
//   return Promise.resolve([promises]);
// }

// const promiseA = new Promise(res => setTimeout(() => res(123), 1000));
// const promiseB = Promise.resolve('a');
// const promiseC = new Promise(res => setTimeout(() => res(true), 100));
// const promiseD = new Promise((res, rej) =>
//   setTimeout(() => rej('error'), 1000),
// );

// Promise.all([promiseA, promiseB, promiseC]).then(console.log);
// promiseAll([promiseA, promiseB, promiseC]).then(console.log);
// Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
// promiseAll([promiseA, promiseB, promiseD]).catch(console.error);
