/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    const numMap = {}; // Create an empty object to store numbers and their indices

    for (let i = 0; i < nums.length; i++) { // Start looping through each number in the array
        const complement = target - nums[i]; // Calculate the complement number we need to find
        if (complement in numMap) { // Check if this complement is already in the object
            return [numMap[complement], i]; //  If found, return the indices of the two numbers
        }
        numMap[nums[i]] = i; // Otherwise, store the current number and its index in the object
    }
    
    return null; // If no solution is found, return null
};

