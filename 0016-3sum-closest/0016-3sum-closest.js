/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    let resultSum = nums[0] + nums[1] + nums[2];
    let minDifference = Infinity;

    // Iterate through the array, fixing the first element
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return target;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }

            let diffToTarget = Math.abs(sum - target);
            if (diffToTarget < minDifference) {
                resultSum = sum;
                minDifference = diffToTarget;
            }
        }
    }

    return resultSum;
};
