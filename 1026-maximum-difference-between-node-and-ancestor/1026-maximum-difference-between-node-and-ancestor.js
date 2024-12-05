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
 * @return {number}
 */
var maxAncestorDiff = function(root) {

 const helper = (node, min, max) => {
        if (node === null) {
            return Number.MIN_VALUE; // equivalent to `Integer.MIN_VALUE`
        }

        // Update min and max with the current node value
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);

        // Recursive calls for left and right subtrees
        const left = helper(node.left, min, max);
        const right = helper(node.right, min, max);

        // Return the maximum difference between ancestor and descendant
        return Math.max(max - min, Math.max(left, right));
    };

    return helper(root, Infinity, -Infinity); // equivalent to `Integer.MAX_VALUE` and `Integer.MIN_VALUE`
};
    
