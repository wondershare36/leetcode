var expandAroundCenter = function (arr, left, right) {
  while (left >= 0 && right < arr.length) {
    if (arr[left] != arr[right]) break;
    left--;
    right++;
  }
  return right - left - 1;
}
var longestPalindrome = function (s = "") {
  if (s.length == 1) return s;
  var arr = Array.from(s);
  var maxLen = 1, begin = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let oddLen = expandAroundCenter(arr, i, i);
    console.log("奇数扩散：", arr[i], oddLen);
    let evenLen = expandAroundCenter(arr, i, i + 1)
    console.log("偶数扩散：", arr[i], arr[i + 1], evenLen);
    let curMaxLen = Math.max(oddLen, evenLen)
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      begin = i - Math.floor((maxLen - 1) / 2)
    }
  }
  return arr.slice(begin, begin + maxLen).join("")
};
var s = "ann"
console.log(longestPalindrome(s));