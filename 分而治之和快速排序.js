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

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(test, 0, 0, test.length));
