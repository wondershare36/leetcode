var maxProfit = function (k, prices) {
  if (prices.length == 0 || prices.length == 1) return 0
  const length = prices.length
  const dp = new Array(length).fill(0)
    .map(v => new Array(k + 1).fill(0).map(v => new Array(2).fill(0)))
  for (let i = 0; i < k + 1; i++) {
    dp[0][i][1] = -prices[0]
  }
  for (let i = 1; i < length; i++) {
    for (let k0 = 0; k0 < k; k0++) {
      dp[i][k0][1] = Math.max(dp[i - 1][k0][1], dp[i - 1][k0][0] - prices[i])
      dp[i][k0 + 1][0] = Math.max(dp[i - 1][k0 + 1][0], dp[i - 1][k0][1] + prices[i])
    }
  }
  console.log(dp);
  return dp[length - 1][k][0]
};
console.log(maxProfit(4, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));