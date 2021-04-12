/** 
 * 只有当给定的列表是有序的时候，二分查找才会有效
 * 二分查找是从列表的中间查找数据，每次查找根据给定的结果是大还是小可以排除一半的数据
 * 二分查找最多需要找log2^n次
 * log是对幂运算的逆运算
 * 比如：一个有8个数字的列表，最多需要查3次，因为2^3=8
 * */
/** 
 * @param {number[]} num 有序数字
 * @param {number} target 目标数据
 * */ 
function binarySearch(num, target) {
    let left = 0;
    let right = num.length - 1;
    let center = null;
    let guess = 0;
    while(left <= right) {
        center = Math.floor((right + left)/2);
        guess = num[center];
        if(guess === target ) {
            console.log(center, guess, target, 'eee');
            return center;
        };
        if(guess > target) {
            right = center - 1;
        }else if(guess < target) {
            left = center + 1;
        }
    }
    return -1;
}

module.exports = binarySearch;