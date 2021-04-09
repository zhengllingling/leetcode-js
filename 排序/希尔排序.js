/** 
 * 对待排数组进行增量分组，每组使用插入排序算法排序，直到增量减少至1时，算法结束
*/
/** 
 * @param {number[]} arr 需要排序的数组
 * */ 
function shellSort(arr) {
    const len = arr.length;
    let temp = 0;
    let gap = 1;
    while(gap < len/3) {
        gap = gap*3 + 1;
    }
    for(gap; gap > 0; gap = Math.floor(gap/3)) {
        for(let i = gap; i<len; i++) {
            temp = arr[i];
            let j = i-gap;
            for(; j >=0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j]
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

module.exports = shellSort;