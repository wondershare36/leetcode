var removeStones = function (stones) {
  let n = stones.length, u = new UnionFind(n), xs = [], ys = [], i = -1, r = Object.create(null)
  while (++i < n) {
      const x = stones[i][0], y = stones[i][1]
      xs[x] === void 0 ? xs[x] = i : u.union(i, xs[x])
      ys[y] === void 0 ? ys[y] = i : u.union(i, ys[y])
  }
  console.log(xs,ys,r);
  while (i--) r[u.find(i)] = 1
  return n - Object.keys(r).length
};
class UnionFind {
  constructor(n) {
    this.parents = new Uint16Array(n)
    while (n--) this.parents[n] = n
  }
  union(x, y) {
    const rootX = this.find(x), rootY = this.find(y)
    if (rootX != rootY) this.parents[rootX] = rootY
  }
  find(x) {
    while (x != this.parents[x]) x = this.parents[x]
    return x
  }
}
console.log(removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]));