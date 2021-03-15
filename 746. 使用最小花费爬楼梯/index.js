var minCostClimbingStairs = function (cost) {
  let one = 0, two = 0
  for (let i = 2; i < cost.length+1; i++) {
    let temp = two;
    two = Math.min(two + cost[i - 1], one + cost[i - 2])
    one = temp
    console.log(one,two);
  }
};
console.log(minCostClimbingStairs([10, 15, 20]));