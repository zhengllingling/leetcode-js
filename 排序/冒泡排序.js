
/** 
 * @param {number[]} arr 需要排序的数组
 * 时间复杂度 1 + 2 + 3 + ... + (n - 1) ——> O(n^2)
 * 空间复杂度 O(1)
 * */
function bubbleSort(arr=[]) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let alreadySort = true;
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                alreadySort = false;
            }
        }
        if(alreadySort) return arr;
    }
    return arr;
}

module.exports = bubbleSort;