var maxProfit = function (prices) {
  if (prices.length == 0) return 0
  let dp0 = -prices[0]
  let dp1 = 0
  let dp2 = 0
  for (let i = 1; i < prices.length; i++) {
    dp0 = Math.max(dp0, dp2 - prices[i])
    dp2 = Math.max(dp2, dp1)
    dp1 = dp0 + prices[i]
    console.log(dp0, dp1, dp2);
  }
  return  Math.max(dp1,dp2)
};
console.log(maxProfit([1, 2, 3, 0, 2]));