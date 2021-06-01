/* 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点  */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    if(!head) return head;
    while(head && head.val === val) {
        head = head.next;
    }
    let cur = head;
    while(cur && cur.next) {
        const temp = cur.next;
        if(temp.val === val) {
            cur.next = temp.next;
        }else {
            cur = temp;
        }
    }
    return head;
};