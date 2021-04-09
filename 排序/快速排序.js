/** 
 * 选一个基准，每项分别和这个和这个基准比较，小的放右边，大的放左边，直到比较结束，合并左右两边以及基准数据
 * 左右两边的数组再分别做快速排序，直到分组为0时
 * */ 
/** 
 * @param {number[]} arr 需要排序的数组
*/
function quickSort(arr){
    if(arr.length === 0) return [];
    const left = [];
    const right = [];
    const temp = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < temp) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(temp, quickSort(right));
}

module.exports = quickSort;