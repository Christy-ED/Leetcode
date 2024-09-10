/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0;                  // Initialize the first pointer at the beginning of the array.
    let j = nums.length - 1;     // Initialize the second pointer at the end of the array.

    while (i < j) {
        if (nums[i] % 2 === 0) {  // If nums[i] is even, increment i.
            i++;
        } else if (nums[j] % 2 !== 0) {  // If nums[j] is odd, decrement j.
            j--;
        } else {  // If nums[i] is odd and nums[j] is even, swap them and update pointers.
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap using destructuring assignment.
            i++;
            j--;
        }
    }

    return nums;
};


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function(nums) {
//     let i = 0;                  // Initialize the first pointer at the beginning of the array.
//     let j = nums.length - 1;    // Initialize the second pointer at the end of the array.

//     // Helper function to swap two elements in the array
//     const swap = (arr, x, y) => {
//         [arr[x], arr[y]] = [arr[y], arr[x]];
//     };

//     while (i < j) {
//         if (nums[i] % 2 === 0) {  // If nums[i] is even, increment i.
//             i++;
//         } else {  // If nums[i] is odd and nums[j] is even, swap them and update pointers.
//             swap(nums, i, j);
//             i++;
//             j--;

//         } 
//         }
    

//     return nums;
// };


