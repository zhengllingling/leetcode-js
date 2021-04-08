/**
 * 每次从未排序的序列中找出最小值，记录并放到已排序的序列末尾
 */
/**
 * @param {number[]} arr 需要排序的数组
 * 时间复杂度: T(n) = 1 + 2 + 3 + ... + (n-1) ——> O(n)
 * 空间复杂度: S(n) = O(1)
 *  */  
function selectSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i+1; j < len; j++) {
            if(arr[min] > arr[j]) {
                [arr[min], arr[j]] = [arr[j], arr[min]];
            }
        }
    }
    return arr;
}

module.exports = selectSort;