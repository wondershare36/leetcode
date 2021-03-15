var generateMatrix = function (n) {
  const array = new Array(n).fill(0).map(() => new Array())
  const data = new Array(n * n).fill(0).map((value, index) => index + 1)
  let top = 0, bottom = n - 1
  let left = 0, right = n - 1
  let row = top, column = left
  while (left <= right && top <= bottom) {
    for (column = left; column <= right; column++) {
      array[top][column] = data.shift()
    }
    for (row = top + 1; row <= bottom; row++) {
      array[row][right] = data.shift()
    }
    if (left < right && top < bottom) {
      for (column = right - 1; column > left; column--) {
        array[bottom][column] = data.shift()
      }
      for (row = bottom; row > top; row--) {
        array[row][left] = data.shift()
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return array
};
console.log(generateMatrix(3));