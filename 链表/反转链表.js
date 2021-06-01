/* 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function reverseList(head) {
    if(!head) return head;
    let first = head;
    while(head.next){
        const temp = head.next;
        head.next = temp.next;
        temp.next = first;
        first = temp;
    }
    return first;
}