// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
var spiralOrder = function (matrix) {
  let top = 0, bottom = matrix.length - 1
  let left = 0, right = matrix[0].length - 1
  console.log(right);
  const res = []
  let x, y;
  while (left <= right && top <= bottom) {
    for (x = left; x <= right; x++) {
      res.push(matrix[top][x])
    }
    for (y = top + 1; y <= bottom; y++) {
      res.push(matrix[y][right])
    }
    if (left < right && top < bottom) {
      for (x = right - 1; x > left&& x > left; x--) {
        res.push(matrix[bottom][x])
      }
      for (y = bottom ; y > top ; y--) {
        res.push(matrix[y][left])
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return res
};
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix));