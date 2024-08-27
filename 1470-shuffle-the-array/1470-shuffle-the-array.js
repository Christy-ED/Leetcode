/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

 
// the original array is structured in two half, "2n" element mean the array has an even number of elements
// "n" is an integer that represents half the number of elements in the original array,


        // Create a new array to store the shuffled result
        let newArray = new Array(2*n);

        // Loop through the first n elements (x1, x2, ..., xn)
        for (let i = 0; i < n; i++) {

            // This line places an x element from the original array into the newArray.
            // Place xi at position 2*i  
            // 2*i calculates the position in the newArray where the x element should be stored
            // nums[i] accesses the element at index i in the nums array [x1,x2,...,xn,y1,y2,...,yn]
            newArray[2 * i] = nums[i];
          

            // Place yi at position 2*i + 1
            // nums[i] accesses the element at index i in the nums array [x1,x2,...,xn,y1,y2,...,yn]
            // n=3
            newArray[2 * i + 1] = nums[i + n];
        }

        return newArray;

    
    
};




        