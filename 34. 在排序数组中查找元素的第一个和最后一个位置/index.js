
var searchRange = function (nums, target) {
  var length = nums.length
  var mid = length % 2 == 0 ? length / 2 : (length + 1) / 2
  var left = 0, right = length - 1;
  console.log(mid);
  if (nums.length == 1) {
    if (nums[0] == target) return [0, 0];
    return [-1, -1]
  }
  while (left < right) {
    if (nums[mid] == target) break
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = (left + right) % 2 == 0 ? (left + right) / 2 : (left + right + 1) / 2
  }
  if (nums[mid] !== target) {
    return [-1, -1]
  }
  var start = end = mid;
  while (nums[start - 1] != undefined && nums[start - 1] == nums[mid]) start--
  while (nums[end + 1] != undefined && nums[end + 1] == nums[mid]) end++
  // console.log(start, end);
  return [start, end]
};

nums = [0, 0, 0, 1, 2, 3], target = 0

console.log(searchRange(nums, target));
