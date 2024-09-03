/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

let arr = [];
let carry =0;
    
    let i = a.length - 1;
    let j = b.length - 1;
    
while (i >= 0 || j >= 0){
    // get the current binary or '0' if out of bounds.
    let binary_a = i >= 0 ? a[i] : '0';
    let binary_b = j >= 0 ? b[j] : '0';

     // convert the characters to integers and add them alng with carry.
     let sum = parseInt(binary_a) + parseInt(binary_b) + carry;
    
    // determine the result digit and new carry.
    if(sum === 2){
        arr.push('0');
        carry = 1;
       } 
       else if( sum === 3){
        arr.push('1');
        carry = 1;
       }else{
            arr.push(sum.toString());
            carry = 0; // use integer for carry reset 
        }
    // move to the next digit 
    i--;
    j--;
}
 // if there's still a carry left, add it.
    if(carry === 1)
        arr.push('1');

    // Reverse the array and join to form the final binary string.    
    return arr.reverse().join('');
    
};