var fetchData = function (url, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { result: 'Some data receiasdasdved from ' + url };
      resolve(data);
      //   reject('Error');
      callback(data);
    }, 2000);
  });
};

// Пример использования функции fetchData
const url = 'https://example.com/data';
fetchData(url, data => {
  console.log('Callback function was called with data:', data);
})
  .then(data => {
    console.log('Promise was resolved with data:', data);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
