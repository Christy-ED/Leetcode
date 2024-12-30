/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const diff = Array.from({ length: m }, () => new Array(n).fill(0));
    const row1count = new Array(m).fill(0);
    const col1count = new Array(n).fill(0);

    // Count the number of 1s in each row and column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                row1count[i]++;
                col1count[j]++;
            }
        }
    }

    // Calculate the difference for each cell
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = row1count[i] + col1count[j]
                - (n - row1count[i]) - (m - col1count[j]);
        }
    }

    return diff;
};