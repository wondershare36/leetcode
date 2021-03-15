function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var createTree = function (arr: number[]) {
  if (!arr || !arr.length) return null;
  var root = new TreeNode(arr.shift());
  var list = [root];
  while (arr.length) {
    var temList = [];
    for (let i = 0; i < list.length; i++) {
      var p = list[i];

      var left = arr.shift();
      if (!left)p.left=new TreeNode(left);
      var right = arr.shift();
      if (!right)p.right=new TreeNode(right);

      if(p.left)temList.push(p.left)
      if(p.right)temList.push(p.right)
    }
    list=temList;
  }
  return root
}

var root = createTree([1, 2, 3, 4, 5, 6]);
console.log(root);
