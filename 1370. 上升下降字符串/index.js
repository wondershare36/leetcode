var sortString = function (s) {
  let arr = s.split("").sort()
  let resArr = []
  let decFalg = true;
  while (arr.length) {
    resArr.push(arr.shift())
    console.log("resArr:" + resArr, " arr:" + arr + "正序");
    for (let i = 0; i < arr.length && arr.length; i++) {
      if (arr[i] > resArr[resArr.length - 1]) {
        resArr.push(...arr.splice(i, 1))
      }
      console.log("resArr:" + resArr, " arr:" + arr);
    }
    if (arr.length) resArr.push(arr.pop())
    console.log("resArr:" + resArr, " arr:" + arr + "逆序");
    for (let i = arr.length - 1 ; i >= 0&& arr.length; i--) {
      if (arr[i] < resArr[resArr.length - 1]) {
        resArr.push(...arr.splice(i , 1))
      }
      console.log("resArr:" + resArr, " arr:" + arr);
    }
  }
  return resArr.join("")
};
console.log(sortString("leetcode"));
// console.log([1,2,3,4].splice(1,1));
