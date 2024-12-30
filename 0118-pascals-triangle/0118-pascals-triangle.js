/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

      const result = [];

    if (numRows === 0) return result;

    // Initialize the first row
    const firstRow = [1];
    result.push(firstRow);

    if (numRows === 1) return result;

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];

        // Start the next row
        const row = [];
        row.push(1); // First element is always 1

        for (let j = 0; j < i - 1; j++) {
            row.push(prevRow[j] + prevRow[j + 1]);
        }

        row.push(1); // Last element is always 1

        // Add the new row to the result
        result.push(row);
    }

    return result;
    
};