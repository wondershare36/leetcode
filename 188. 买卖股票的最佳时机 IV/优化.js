var maxProfit = function (k, prices) {
  // 0卖，1买
  if (k === 0) return 0;

  const dp = [];
  for (let j = 0; j < k; j++) {
    dp[j] = [];
    dp[j][0] = -Infinity;
    dp[j][1] = -Infinity;
  }
  console.log(dp);
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    for (let j = k - 1; j >= 1; j--) {
      // 当前卖出 + 之前买入剩下的钱
      dp[j][0] = Math.max(dp[j][0], curr + dp[j][1]);
      // 当前买入 + 之前卖出获得的钱
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - curr);
    }
    // 只交易一次
    dp[0][0] = Math.max(dp[0][0], curr + dp[0][1]);
    dp[0][1] = Math.max(dp[0][1], -curr);
  }
  let max = 0;
  for (let i = 0; i < k; i++) {
    max = Math.max(dp[i][0], max);
  }

  return max;
};
console.log(maxProfit(4, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
