function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}
function createTree(arr = []) {
    if (!arr || !arr.length) return null;
    var root = new TreeNode(arr.shift());
    var list = [root];
    while (arr.length) {
        let p = list.shift()
        let left = new TreeNode(arr.shift());
        let right = new TreeNode(arr.shift());
        if (left) {
            p.left = left;
            list.push(left)
        }
        if (right) {
            p.right = right;
            list.push(right)
        }
    }
}
createTree([1, 2, 3, 4, 5, 6])