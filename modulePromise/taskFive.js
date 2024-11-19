var delay = function (ms) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, ms),
  );
};

// Раскомментировать
// delay(3000).then(() => console.log('Runs after 3 seconds'));
