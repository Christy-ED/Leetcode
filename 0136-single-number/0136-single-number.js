/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    // I need to check how many time I see a element in the nums[]
    // utilize the map object to create a map object to store the count of each number

    const countMap = {}; // Initialize as an empty object

    // first loop to count how many time is appears in the nums[]
    for(const num of nums){
        if(countMap[num] === undefined){ // check if the current number is alrready a key in the countMap if not yet countmap will be undefined 
          countMap[num] = 1; //  if the number is not in the map, add it with a count of 1 
        } else {
            countMap[num] += 1 // If the number is already in the map, increment its count 
        }

    }

    for (const num in countMap){ // Finding the num(key) that appears only once in the countMap
        if (countMap[num] === 1){ // Check if the value associated with th key(num) appear 1 time
            return Number(num); // if the key with a value of 1 is found we return num converted to a umber 

            // In javaSript object keys are stored as string so we nee to convert it back to a number.
        }
    }

};