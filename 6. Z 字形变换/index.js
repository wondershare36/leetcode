
var convert = function (s, numRows) {
  if(numRows==1)return s
  var strArray = Array.from(s);
  var res = [];
  for (let row = 0; row < numRows; row++) {
    res[row] = new Array().fill("");
  }
  let row = 0, col = 0, op = 1
  console.log(strArray);
  while (strArray.length) {
    res[row].push(strArray.shift());
    row = row + op
    if (row == numRows - 1 || row == 0) {
      op = -op
    };
    console.log(res);
  }
  // var reg=new RegExp(",","g")
  var  str=""
  res.forEach(item=>str+=item.join(""))
  return str
};
var s = "LEETCODEISHIRING", numRows = 3;
console.log(convert(s, numRows));