/** 
 * 给定一个链表，判断链表中是否有环
*/

function hasCycle(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }
    return false;
}

/** 
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * */
function detectCycle(head) {
    const set = new Set();
    let slow = head;
    while(slow) {
        if(set.has(slow)) return slow;
        set.add(slow);
        slow = slow.next;
    }
    return null;
}