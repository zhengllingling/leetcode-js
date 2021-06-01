/* 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。 */

/** 
 * 应当保持奇数节点和偶数节点的相对顺序。
 * 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
 * */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function oddEvenList(head) {
    if(!head) return head;
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return oddHead;
};