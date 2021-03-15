var maxProfit = function (prices = []) {
  let buy1 = Number.MAX_VALUE;
  let buy2 = Number.MAX_VALUE;
  let pro1 = Number.MIN_VALUE;
  let pro2 = Number.MIN_VALUE;
  for (let i = 0; i < prices.length; i++) {
      buy1 = Math.min(buy1, prices[i]);
      pro1 = Math.max(pro1, prices[i] - buy1);
      buy2 = Math.min(buy2, prices[i] - pro1);
      pro2 = Math.max(pro2, prices[i] - buy2);
  }
  return pro2;
};
console.log(maxProfit([3,3,5,0,0,3,1,4]));