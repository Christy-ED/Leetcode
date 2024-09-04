/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

    let prev = 0;
    let curr = 1;
    let sum = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            sum += Math.min(prev, curr); // add the minimum of prev and curr to sum
            prev = curr; // now prev becomes curr
            curr = 1; // reset curr to 1
        }
    }
    sum += Math.min(prev, curr); // add the last pair to the sum

    return sum; 
};
