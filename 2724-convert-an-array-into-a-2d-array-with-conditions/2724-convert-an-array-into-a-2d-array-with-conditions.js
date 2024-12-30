/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    // Create a frequency map to keep track of the occurrences of each number.
    const freq = new Map();

    // Initialize an empty array to store the 2D array.
    const ans = [];

    // Iterate through each number in the input array.
    for (const num of nums) {
        // Get the current frequency of the number, default to 0 if not found.
        const count = freq.get(num) || 0;

        // If the frequency of the current number is greater than or equal to the size of 'ans',
        // it means we need to create a new row in the 2D array.
        if (count >= ans.length) {
            ans.push([]); // Add a new empty row.
        }

        // Add the current number to the appropriate row based on its frequency.
        ans[count].push(num);

        // Increment the frequency of the current number.
        freq.set(num, count + 1);
    }

    // Return the resulting 2D array.
    return ans;
};