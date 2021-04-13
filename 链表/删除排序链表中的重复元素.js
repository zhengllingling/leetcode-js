
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let currentNode = head;
    while(currentNode && currentNode.next) {
        if(currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        }else {
            currentNode = currentNode.next;
        }
    }
    return head;
}