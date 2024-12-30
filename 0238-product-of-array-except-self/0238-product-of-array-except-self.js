/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     const n = nums.length;

    // Array to store all left multiplication
    const left = new Array(n).fill(0);

    // Array to store all right multiplication
    const right = new Array(n).fill(0);

    // Compute left products
    left[0] = 1;
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Compute right products
    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // Compute the final result
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        ans[i] = left[i] * right[i];
    }

    return ans;
};