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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    if(root === null){
    return false;
    }
     
const path = [];
const sumPath = [];

path.push(root);
sumPath.push(root.val);

while(path.length > 0){
    const temp = path.pop();
    const tempVal = sumPath.pop();
    
    if (temp.left === null && temp.right === null && tempVal === targetSum){
         return true;
    }
       if(temp.left !== null){
           path.push(temp.left);
           sumPath.push(temp.left.val + tempVal)
       }

     if(temp.right!== null){
           path.push(temp.right);
           sumPath.push(temp.right.val + tempVal)
       }
}
return false;

};