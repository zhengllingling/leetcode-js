const maxDepth = require('./二叉树的最大深度');
/** 
 * 一个二叉树左右两个子树的高度差的绝对值补不超过1就是平衡二叉树 
*/
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    if(root===null) return true;
    else if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
        return false
    }else {
        return isBalanced(root.left) && isBalanced(root.right);
    }
};

export default isBalanced;