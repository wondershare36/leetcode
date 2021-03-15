var maxSlidingWindow = function (nums, k) {
  const length = nums.length
  const res = []
  const stack = []
  let stack_down
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.slice(i - 3, i));
    if (stack.length == k || i >= k && stack_down == nums[i - k]) {
      stack.shift()
    }
    while (stack.length != 0 && nums[i] > stack[stack.length - 1]) {
      stack.pop()
    }
    stack.push(nums[i])
    if (i + 1 >= k) {
      res.push(stack_down = stack[0])
    }
    console.log("栈：", stack, "答案：", res, "栈底：", stack_down);
  }
  return res
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [ 3, 3, 5, 5, 6, 7 ]
// console.log(maxSlidingWindow([1,-1], 1));
// [ 1, -1 ]
// console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
// [3,3,2,5]
// console.log(maxSlidingWindow([-7,-8,7,5,7,1,6,0], 4));
// [7,7,7,7,7]