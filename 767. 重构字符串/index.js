var reorganizeString = function (S = "") {
  var arr = S.split("")
  var alpCount = new Array(26).fill(0);
  for (let i = 0; i < arr.length; i++) {
    alpCount[arr[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  console.log(alpCount);
  var max = 0, alp = 0, threshold = (S.length + 1) >> 1
  for (let i = 0; i < alpCount.length; i++) {
    if (alpCount[i] > max) {
      max = alpCount[i];
      alp = i;
      if (max > threshold) return ""
    }
  }
  var res = new Array(S.length).fill(0);
  var index = 0;
  while (alpCount[alp]--) {
    res[index] = String.fromCharCode(97 + alp);
    index += 2
  }
  console.log(res);
  console.log(alpCount);
  for (let i = 0; i < alpCount.length; i++) {
    while (alpCount[i]-- > 0) {
      if (index >= res.length) {
        index = 1;
      }
      res[index] = String.fromCharCode(i + 97);
      index += 2;
    }
  }
  return res.join("")
};
console.log(reorganizeString("aaaaaccccdddffg"));