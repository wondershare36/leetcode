function getMid(b, left, right) {
  let pivot = b[left];
  if (left < right) {
    while (b[right] >= pivot && left < right) right--;
    b[left] = b[right];
    console.log(b);
    while (b[left] < pivot && left > right) left++;
    b[right] = b[left]
    console.log(b);
  }
  b[left] = pivot;
  console.log(b);
  return left
}
function quickSort(b, left, right) {
  if (left < right) {
    let mid = getMid(b, left, right);
    quickSort(b, left, mid - 1);
    quickSort(b, mid + 1, right);
  }
}
var b = [5, 4, 7, 2, 9, 1, 77];
quickSort(b, 0, b.length - 1)