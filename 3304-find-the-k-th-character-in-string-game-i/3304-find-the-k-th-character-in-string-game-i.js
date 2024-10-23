/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let start = "a";  // Starting string
    let end = start;  // Initialize `end` to `start`

    // Loop to build the string
    while (true) {
        let temp = "";  // Temporary string to store the new sequence

        // Iterate over the current `start` string and generate the new sequence
        for (let i = 0; i < start.length; i++) {
            temp += start[i];  // Append the current character
            temp += String.fromCharCode(start.charCodeAt(i) + 1);  // Append the next character
        }

        start = temp;  // Update start with the new sequence

        // Break the loop when the length exceeds `k`
        if (start.length > k) {
            break;
        }
    }

    // Return the k-th character (k-1 for zero-based index)
    return start[k - 1];
    
};