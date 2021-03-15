var matrixScore = function (A = [[]]) {
  // 1.翻转第一位为0的行
  A.forEach(row => {
    if (row[0] == 0) {
      row.forEach((v, i) => {
        row[i] = v == 0 ? 1 : 0
      })
    }
  })
  console.log(A);
  // 2.翻转多0的列
  for (let col = 1; col < A[0].length; col++) {
    let zero = 0

    for (let row = 0; row < A.length; row++) {// A[1][col]
      if (A[row][col] == 0) zero++
    }
    console.log(zero);
    // 如果0超过行数一半
    if (zero > A.length / 2) {
      for (let row = 0; row < A.length; row++) {
        A[row][col] = A[row][col] == 0 ? 1 : 0
      }
    }
    console.log(A);
  }
  let sum = 0
  for (let row = 0; row < A.length; row++) {
    sum += parseInt(A[row].join(""),2)
  }
  return sum
};
var A = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0]
];
[
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [1, 1, 0, 0]
];
[
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 1, 1, 0]
];
[
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1]
];
console.log(matrixScore(A));;
