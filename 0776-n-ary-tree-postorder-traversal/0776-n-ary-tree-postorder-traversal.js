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
    if (root === null) return [];

    const output = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        output.push(node.val);

        // Push all children onto the stack
        for (const child of node.children) {
            stack.push(child);
        }
    }

    // Since we processed the root before the children, reverse the output
    return output.reverse();
};