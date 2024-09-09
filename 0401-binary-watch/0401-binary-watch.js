/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let time = [];

    // Loop through the hours (0 to 11)
    for (let hour = 0; hour < 12; hour++) {
        // Loop through the minutes (0 to 59)
        for (let minutes = 0; minutes < 60; minutes++) {
            // Check if the total number of 1s in the binary representation of hour and minutes equals turnedOn
            if ((hour.toString(2).split('1').length - 1) + (minutes.toString(2).split('1').length - 1) === turnedOn) {
                // Format the time as "H:MM" and push to the result array
                time.push(`${hour}:${minutes < 10 ? '0' + minutes : minutes}`);
            }
        }
    }

    return time;
};
    
    