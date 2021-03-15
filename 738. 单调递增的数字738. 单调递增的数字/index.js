var monotoneIncreasingDigits = function (N = 0) {
  const str = N.toString().split("").map(v => +v)
  let i = 1
  while (i < str.length && str[i - 1] <= str[i]) {
    i += 1
  }
  if (i < str.length) {
    while (i > 0 && str[i - 1] > str[i]) {
      str[i - 1] -= 1
      i--;
    }
    for (i++; i < str.length; ++i) {
      str[i] = 9
    }
  }
  return parseInt(str.join(""))

};
var N = 10;
console.log(monotoneIncreasingDigits(N));