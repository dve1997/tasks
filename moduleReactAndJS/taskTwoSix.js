function simplifyPath(path) {
  const curArray = path.split('/');
  const results = [];

  for (let i = 0; i < curArray.length; i++) {
    if (curArray[i] === '.' || curArray[i] === '..' || curArray[i] === '') {
      continue;
    } else if (i === curArray.length - 1 && curArray[i] === '') {
      continue;
    } else {
      results.push('/');
      results.push(curArray[i]);
    }
  }

  return results.join('').length !== 0
    ? results.join('')
    : '/' + results.join('');
}

// console.log(simplifyPath('./home/'));
// console.log(simplifyPath('../home/'));
// console.log(simplifyPath('../home/.../'));
// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/../'));
// console.log(simplifyPath('/home//foo/'));
