// /**
//  * @param {string} s
//  * @return {boolean}                                                         
//  */
// var isPalindrome = function(s) {
    
// s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

// // check if the string s is palindrome 
// let left = 0;
// let right = s.length - 1;

// while (left < right){
//     if (s[left] !== s[right]){
        
//     return false;
//     }
//     left ++;
//     right--;
// }
//  return true
 
// };


/* USE STACK OR QUEUE TO SOLVE IT */ 



// /**
//  * @param {string} s
//  * @return {boolean}                                                         
//  */
// var isPalindrome = function(s) {
//     s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const stack = [];
//     // Push all characters onto the stack
//     for (let i = 0; i < s.length; i++) {
//         stack.push(s[i]);  // Push characters, not indices
//     }

//     // Compare the characters from the stack with the original string in reverse order
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== stack.pop()) {
//             return false;  // Only return false if a mismatch is found
//         }
//     }

//     return true;  // Return true if no mismatches are found
// };


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let stack = [];

    // Push all characters onto the stack
    for (let char of s) {
        stack.push(char);
    }

    // Compare the characters from the stack with the original string
    for (let char of s) {
        if (char !== stack.pop()) {
            return false;
        }
    }

    return true;
};
