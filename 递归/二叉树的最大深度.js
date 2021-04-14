
/** 
 * 尽量不要使用递归，递归代码虽然相比循环的代码更容易理解， 但是消耗的性能大，容易出错陷入死循环
 * */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 function maxDepth(root) {
    if(root === null) {
        return 0
    } else if (root.left!==null || root.right!==null) {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    } else {
        return 1;
    }
};

module.exports = maxDepth;