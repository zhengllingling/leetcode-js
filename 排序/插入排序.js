/** 
 * 分成已排序和未排序两个区间，每次从未排序区间中拿一个数据，插入已排序区间中，并保证已排序区间的顺序任然有序
 * */ 
/** 
 * @param {number[]} arr 需要排序的数组
 * 时间复杂度：T(n) = 1 + 2 + 3 + ... + (n - 1) ——> O(n^2)
 * 空间复杂度: S(n) = O(1);
 * */ 
function insertSort(arr) {
    const len = arr.length;
    for(let i = 1; i < len; i++) {
        const value = arr[i];
        let j = i - 1;
        for(; j>=0; j--){
            if(arr[j] > value) {
                arr[j+1] = arr[j]
            }else {
                break;
            }
        }
        arr[j+1] = value;
    }
    return arr;
}