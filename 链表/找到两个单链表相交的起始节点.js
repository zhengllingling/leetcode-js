/** 
 * 找到两个单链表相交的起始节点
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 function getIntersectionNode(headA, headB) {
    if(headA===null || headB===null) {
        return null;
    }
    let a = headA;
    let b= headB;
    while(a!=b) {
        a = a.next;
        b = b.next;
        if(a === null && b === null) {
            return null;
        }
        if(a===null) a = headB;
        if(b===null) b = headA;
    }
    return a;
};