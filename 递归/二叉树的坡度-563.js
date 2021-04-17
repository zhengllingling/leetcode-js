function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function nodeVal(root) {
    if(root === null) return 0;
    else return root.val + nodeVal(root.left) + nodeVal(root.right);
}

function findTilt(root) {
    if(root === null) return 0;
    else {
        const val = Math.abs(nodeVal(root.left) - nodeVal(root.right))
        return val + findTilt(root.left) + findTilt(root.right);
    } 
}