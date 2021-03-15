var minPatches = function (nums = [], n) {
  let target = 1;
  let cover = 0
  let res = []
  let resNum = 0
  let length = nums.length
  while (cover < n) {
    if (nums[0] <= target) {
      cover = cover + res[res.length - 1]
    } else {
      resNum++
      cover = cover + target
    }
    target = cover + 1
    console.log(res, cover,resNum);
  }
  return resNum
};
console.log(minPatches([2, 4, 14, 18, 20, 25, 25, 35, 73, 94], 42));
// [1, 5, 10]
// [](target 1)(cover 0)
// [1](target 2)(cover 1)
// [1,2](target 4)(cover 3)
// [1, 2]4
// [1, 2, 4]7
// [1, 2, 4]8
// [1, 2, 4, 5]13
// [1, 2, 4, 5]14
// [1, 2, 4, 5, 10]24