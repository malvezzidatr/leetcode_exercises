/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let arr = []

var inorderTraversal = function(root) {
    const result = checkTree(root)
    arr = []
    return result ? result : []
};

const checkTree = (root) => {
    if (root === null) return;
    checkTree(root.left)
    arr.push(root.val)
    checkTree(root.right)
    return arr;
}
