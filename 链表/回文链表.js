/* 请判断一个链表是否为回文链表 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 双指针思路
function isPalindrome(head) {
    if(!head) return false;
    const nums = [];
    let cur = head; 
    while(cur) {
        nums.push(head.val);
        cur = cur.next;
    }
    const max = (nums.length - 1) / 2;
    for(let start = 0, end = nums.length - 1; start < max; start = start + 1, end = end - 1) {
        if(nums[start] != nums[end]) return false;
    }
    return true;
}