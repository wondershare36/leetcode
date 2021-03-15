var generate = function (numRows) {
  var row = [1]
  var total = [row]
  if(numRows==0)return[]
  numRows--;
  while (numRows) {
    let lastRow = total[total.length - 1];
    console.log(lastRow);
    let newRow = new Array(lastRow.length + 1);
    console.log(newRow);
    for (let i = 0; i < newRow.length; i++) {
      if (i == 0) {
        newRow[0] = 1;
        console.log(newRow);
        continue;
      }
      if (i == newRow.length - 1) {
        newRow[newRow.length - 1] = 1;
        console.log(newRow);
        continue;
      }
      newRow[i] = lastRow[i - 1] + lastRow[i]
      console.log(newRow);
    }
    console.log(total);
    total.push(newRow)
    console.log(total);
    numRows--;
  }
  return total
};
var numRows = 5;
generate(numRows);