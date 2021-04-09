
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