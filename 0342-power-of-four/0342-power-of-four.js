// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfFour = function(n) {

//    //Powers of 4 are positive numbers 
//      if (n <= 0) {
//         return false;
//     }
//     //The loop runs as long as n is divisible by 4 
//     while (n % 4 === 0) {
//         n = n / 4;
//     }
//     //After the loop, the function checks whether n has been reduced to 1.
//     return n === 1; 
    
// };



/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // Base case: if n is less than or equal to 0, it can't be a power of four
    if (n <= 0) {
        return false;
    }
    
    // Base case: if n is exactly 1, it's a power of four (4^0 = 1)
    if (n === 1) {
        return true;
    }
    
    // Recursive case: if n is divisible by 4, call the function recursively
    if (n % 4 === 0) {
        return isPowerOfFour(n / 4);
    }
    
    // If n is not divisible by 4 and not 1, it's not a power of four
    return false;
};

































