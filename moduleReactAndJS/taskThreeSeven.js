const createTimerFn = () => {
  let count = 0;
  return () => {
    setTimeout(() => {
      console.log(count++);
    }, 1000);
  };
};

const startTimer = createTimerFn();

// startTimer(); // 0
// startTimer(); // 1
// startTimer(); // 2
