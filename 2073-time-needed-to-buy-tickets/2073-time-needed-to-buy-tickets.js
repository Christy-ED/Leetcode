/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
     const queue = [];
    for (let i = 0; i < tickets.length; i++) {
        queue.push(i);  // Queue contains the index of each person
    }

     //keep track of the number of seconds it takes for the person at position k to finish buying their tickets.
     let sec = 0;
     
     //the loop continues until the person at position k has no tickets left 
     while (tickets[k] > 0) {
        sec++;
        let person = queue.shift();  // Dequeue the person at the front

        // Decrease the number of tickets for this person
        tickets[person]--;

        // If this person still has tickets left, re-enqueue them
        if (tickets[person] > 0) {
            queue.push(person);
        }

        // If this is the 'k'-th person and they have no more tickets, stop
        if (person === k && tickets[person] === 0) {
            break;
        }
    }
    
    return sec;
};






 


