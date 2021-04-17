/** 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。
 * */ 

// 使用二分查找的算法
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let center = null;
    while(left < right) {
        center = Math.floor((left + right) / 2)
        const val = nums[center];
        if(val === target) return center;
        if(val > target) {
            right = center - 1;
        } 
        if(val < target) {
            left = center + 1;
        }
    }
    if(left === right) {
        if(nums[left] > target) return left;
        else if(nums[left] === target) return left;
        else return left + 1;
    }
    if(left > right) return left 
    return -1
}