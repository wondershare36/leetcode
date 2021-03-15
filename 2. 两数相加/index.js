function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? undefined : next);
}
var addTwoNumbers = function (l1, l2) {
};
var listnode = new ListNode(2);
listnode.next = new ListNode(4);
listnode.next.next = new ListNode(3);
console.log(listnode);
