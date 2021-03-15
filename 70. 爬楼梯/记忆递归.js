var climbStairsMemo = function (n, memo) {
  if (memo[n] > 0) return memo[n]
  if (n == 1) memo[n] = 1
  else if (n == 2) memo[n] = 2
  else memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo)
  return memo[n]
}

var climbStairs = function (n) {
  const memo = new Array(n + 1)
  return climbStairsMemo(n, memo)
};

console.log(climbStairs(4));
