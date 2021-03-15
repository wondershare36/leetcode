const VERTICES = 6//定点数量

function find_root(x = 0, parent = []) {
  let x_root = x;
  while (parent[x_root] != -1) {
    x_root = parent[x_root]
  }
  return x_root
}
function union_vertices(x, y, parent = []) {
  let x_root = find_root(x, parent)
  let y_root = find_root(y, parent)
  if (x_root == y_root) return 0
  else {
    parent[x_root] = y_root
    return 1
  }
}
function main() {
  let parent = new Array(VERTICES).fill(-1)
  let edges = [
    [0, 1], [2,1], [3, 4],
    [1, 3], [2, 5]
  ]// 边
  for (let i = 0; i < edges.length; i++) {
    let x = edges[i][0]
    let y = edges[i][1]
    console.log(parent);
    if (union_vertices(x, y, parent) == 0) {
      console.log("检测到环");
      break
    }
  }
}
main()