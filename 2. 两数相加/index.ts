// function ListNode(val?,next?){
//   this.val=(val===undefined?0:val);
//   this.next=(next===undefined?undefined:next);
// }
// var addTwoNumbers = function(l1, l2) {
    
// };

// var listnode=new ListNode(2);
// listnode.next=new ListNode(4);
// listnode.next.next=new ListNode(3);
// console.log(listnode);
interface ListNode{
  element;
  next;
}
function ListNode(v){
  this.element=v;
  this.next=null;
}
function LList(){
  this.head=new ListNode("head");
}
LList.prototype={
  //查找某一节点
  find:function(item){
    var currNode=this.head;
    while(currNode.element!=item){
      currNode=currNode.next;
    }
    return currNode;
  },
  //向某一元素后面插入新的节点
  insert:function(newElement,item){
    var newNode=new ListNode(newElement);
    var currNode=this.find(item);
    currNode.next=newNode;
  },
  // 查找某一节点的前一个节点（前驱）
  findPrevious:function(item){
    var currNode=this.head;
    while(!(currNode.next==null)&&(currNode.next.element)){
      currNode=currNode.next;
    }
    return currNode
  },
  // 删除某一节点
  remove:function(item){
    var prevNode=this.findPrevious(item);
    if(!(prevNode.next==null)){
      prevNode.next=prevNode.next.next;
    }
  },
  // 修改某一节点
  edit:function(item,newItem){
    var element=this.find(item);
    element=newItem;
  },
  // 打印出所有节点
  display:function(){
    var currNode=this.head;
    while(!(currNode.next!=null)){
      console.log(currNode.next.element);
      currNode=currNode.next;
    }
  }
}
var names=new LList();
names.insert(2)
