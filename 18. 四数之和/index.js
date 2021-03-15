var fourSum = function (nums = [], target) {
  nums.sort((a, b) => a - b)
  console.log(nums);
  let resArr = []
  let a, b = 1, c = nums.length - 2, d;
  while (b < c) {
    if ((b == 1 || nums[b] != nums[b - 1]) && (c == nums.length - 2 || nums[c] != nums[c + 1])) {
      a = 0; d = nums.length - 1;
      while (a < b && c < d) {
        if ((a == 0 || nums[a] != nums[a - 1]) && (d == nums.length - 1 || nums[d] != nums[d + 1])) {
          console.log(nums[a], nums[b], nums[c], nums[d]);
          if (nums[a] + nums[b] + nums[c] + nums[d] == target) {
            resArr.push([nums[a], nums[b], nums[c], nums[d]])
            console.log("答案：", resArr);
          }
        }
        nums[a] + nums[b] + nums[c] + nums[d] <= target ? a++ : d--
      }
    }
    nums[a] + nums[b] + nums[c] + nums[d] <= target ? b++ : c--
  }
  return resArr
}
fourSum([-2, -1, -1, 1, 1, 2, 2], 0)
// fourSum([-3, -2, -1, -1, 1, 1, 2, 2, 3], 0)