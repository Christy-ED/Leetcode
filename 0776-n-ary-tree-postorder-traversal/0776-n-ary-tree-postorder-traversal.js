/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
      const output = [];
    helper(root, output);
    return output;
};

/**
 * Helper function for recursion.
 * @param {_Node|null} root
 * @param {number[]} output
 */
var helper = function(root, output) {
    if (root === null) return;

    // Recursively traverse each child
    for (let i = 0; i < root.children.length; i++) {
        helper(root.children[i], output);
    }

    // Add the current node's value
    output.push(root.val);
};