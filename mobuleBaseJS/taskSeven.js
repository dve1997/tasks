var gettingTheLongestSubstring = function (str) {
  return str
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .reverse()[0].length;
};

// console.log(gettingTheLongestSubstring('Hello World'));
// console.log(gettingTheLongestSubstring('   fly me   to   the moon  '));
// console.log(gettingTheLongestSubstring('luffy is still joyboy'));
