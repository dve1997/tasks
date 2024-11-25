function generateParenthesis(n) {
  const result = [];

  backtrack('', 0, 0);

  return result;

  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      console.log(current);
      backtrack(current + '(', open + 1, close);
    }

    if (close < open) {
      console.log(current);
      backtrack(current + ')', open, close + 1);
    }
  }
}

// Раскомментировать
// console.log(generateParenthesis(3));
// console.log(generateParenthesis(1));
