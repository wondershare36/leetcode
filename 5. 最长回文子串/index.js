/* 暴力 */
var valid = function (arr, left, right) {
  while (left < right) {
    if (arr[left] != arr[right]) return false;
    left++;
    right--;
  }
  return true
}
var longestPalindrome = function (s = "") {
  if (s.length == 1) return s
  let maxLength = 1, begin = 0;
  let charArray = Array.from(s)
  for (let i = 0; i < charArray.length - 1; i++) {
    for (let j = i + 1; j < charArray.length; j++) {
      console.log(i, j, charArray.slice(i, j + 1).toString());
      if (j - i + 1 > maxLength && valid(charArray, i, j)) {
        console.log("回文：", charArray.slice(i, j + 1).toString());
        maxLength = j - i + 1;
        begin = i;
      }
    }
  }
  console.log(begin, maxLength);
  console.log(charArray.slice(begin, begin + maxLength));
  return charArray.slice(begin, begin + maxLength).join("")
};
var s = "cbbd"
console.log(longestPalindrome(s));
