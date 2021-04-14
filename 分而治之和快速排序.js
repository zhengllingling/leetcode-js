/** 
 * 分而治之的思想：找到尽可能简单的基线条件，然后不断的分解问题直到符合基线条件。这种思想一般使用递归来实现，不断分解问题的过程就是递归的
 * 就像sum函数，基线条件就是传入的数组是空的或者是只有一个元素的
 * */
/** 
 * @param {number[]} arr 需要算和的数组
 * */ 
function sum(arr) {
    if(arr.length===0) return 0;
    else {
        return arr[0] + sum(arr.splice(1, arr.length));
    }
}

function len(arr) {
    if(arr.length === 1) return 1
    else {
        return 1 + len(arr.splice(1, arr.length))
    }
}

function max(arr) {
    if(arr.length === 1) return arr[0]
    else {
        const val = arr[0]
        const data = max(arr.splice(1, arr.length));
        return val > data ? val : data;
    }
}

/**
 * 二分查找算法的分而治之思想的解法
 */
function binarySearch(num, target, left, right) {
    let center = null;
    if(right >= left) {
        center = Math.floor((left + right) /2);
        let guess = num[center];
        if(guess === target) return center;
        else if(guess > target) {
            right = center - 1;
        }else {
            left = center + 1;
        }
        return binarySearch(num, target, left, right);
    }else {
        return -1;
    }
}

// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearch(test, 0, 0, test.length));

/** 
 * 快速排序思想：取一个值作为基准值，列表中数据分别与基准值作比较，大于基准值的放一个列表里面，小于基准值的放一边，然后合并这三个列表
 * 然后分别对小于基准值的和大于基准值的列表进行和上述相同的操作，直到排序结束
 * 快速排序算法的分而治之思想的解法
*/
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    } else {
    //   const val = arr[0];
      const index = Math.floor(Math.random() * (arr.length-1));
      const val = arr[index];
      console.log(val);
      const left = [];
      const right = [];
      arr.forEach(i => {
          if(i < val) left.push(i);
          if(i > val) right.push(i);
      })
      return quickSort(left).concat([val], quickSort(right))
    }
}

let arr1 = [0, 7, 1, 3, 2, 4, 8, 5, 6];
console.log(quickSort(arr1));