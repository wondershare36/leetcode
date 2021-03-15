var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;
  var curDiff = 0;//当前一对差值
  var preDiff = 0;//前一对差值
  var res = 1;//记录峰值的个数，默认序列最右边有一个峰值
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1];
    console.log(nums.slice(0, i+1),curDiff);
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      res++;
      preDiff = curDiff;
      console.log(res);
    }
  }
  return res
};
var nums = [3, 3, 3, 2, 5];
[1, 17,]
console.log(wiggleMaxLength(nums));