/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

//We not removing the duplicate from num[] we're going to re-position the unique element 'k' in front of num


    if (nums.length === 0) return 0; // checking if the array is empty.

    let k = 0; // Initialize k at the first position
    
    nums = nums.filter((num, i) => {
        if (i === 0 || num !== nums[i - 1]) {
            nums[k] = num; // Place the unique element at the k-th position
            k++;
            return true; // Include this element in the filtered array
    }
           return false;// Exclude this element from the filtered array
        

    });

    return k; // k now directly represents the count of unique elements
};





    