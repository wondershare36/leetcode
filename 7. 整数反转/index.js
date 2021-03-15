var reverse = function (x) {
  let str = parseInt(Math.abs(x).toString().split("").reverse().join(""))
  if (x < 0) str = -str
  if (str < -Math.pow(2, 31) || str > Math.pow(2, 31) - 1) return 0
  return str.toString()
};
// console.log(reverse(1534236469));
var obj={
  title:"是的"
}
console.log("信息"+JSON.stringify(obj));