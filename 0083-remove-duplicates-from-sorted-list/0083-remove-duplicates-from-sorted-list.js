/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var deleteDuplicates = function(head) {
//     // create a pointer 
//     current = head;
//     while( current !== null && current.next !== null){
//         if( current.val === current.next.val) {
//             current.next = current.next.next;
//         }else{
//             current = current.next;  //It does continue checking the rest of the list recursively.
//         }
//     }
//     return head;
// };              


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 /**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    // Base case: if the list is empty or has only one node, return head
    if (head === null || head.next === null) {
        return head;
    }

    // Recursive case:
    if (head.val === head.next.val) {
        // Move to the next distinct value
       
        while (head.next !== null && head.next.val === head.val) {
            head.next = head.next.next;
        }
        head.next = deleteDuplicates(head.next); // Skip duplicates and continue
    } else {
        // Otherwise, proceed to the next node
        head.next = deleteDuplicates(head.next); //It does actually call the function deleteDuplicates to move down the list.
    }

    return head;
};

