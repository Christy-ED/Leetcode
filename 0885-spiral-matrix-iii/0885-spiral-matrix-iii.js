/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    const answer = [];
    
    let r = rStart, c = cStart;
    let dirIdx = 0; // To track the current direction
    let steps = 1;  // Number of steps to take in the current direction
    
    // Add the start position
    answer.push([r, c]);
    
    while (answer.length < rows * cols) {
        for (let j = 0; j < 2; j++) {  // Repeat twice, as we move in pairs of directions
            for (let i = 0; i < steps; i++) {
                r += directions[dirIdx][0];
                c += directions[dirIdx][1];
                
                // Check if the current position is within the grid boundaries
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    answer.push([r, c]);
                }
            }
            // Change direction after each iteration
            dirIdx = (dirIdx + 1) % 4;
        }
        // After two directional changes, increment the number of steps
        steps++;
    }

    return answer;
};


