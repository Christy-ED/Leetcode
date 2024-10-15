/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function isValid(row, col, matrix){
    const m = matrix.length;
    const n = matrix[0].length;

    return (0 <= row && row < m && 0 <= col && col < n);
}

var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const DIRS = [
        [0, 1], //Right
        [1, 0],     //Down
        [0, -1], //Left
        [-1, 0] //Up
    ];

    let d_index = 0;
    let dir = DIRS[d_index];
    const cur = [0, 0];

    const result = [];
 

    while(isValid(cur[0], cur[1], matrix) && matrix[cur[0]][cur[1]] !== 101){
        current = matrix[cur[0]][cur[1]];
        matrix[cur[0]][cur[1]] = 101; // Mark that we have been here

        if(!isValid(cur[0] + dir[0], cur[1] + dir[1], matrix) || matrix[cur[0]+dir[0]][cur[1]+dir[1]] === 101){
                d_index++;

                if(d_index > 3)
                    d_index = 0;
            
                dir = DIRS[d_index];
            }
        result.push( current );
        cur[0] += dir[0];
        cur[1] += dir[1];
    }

    return result;
};