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
    // create a pointer 
    current = head;
    while( current !== null && current.next !== null){
        if( current.val === current.next.val) {
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
};              


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// var deleteDuplicates = function(head) {
//     // Base case: if the list is empty or has only one node, return head
//     if (head === null || head.next === null) {
//         return head;
//     }

//     // Recursive case:
//     // If the current node and the next node have the same value
//     if (head.val === head.next.val) {
//         // Skip the next node by pointing to head.next.next
//         head.next = deleteDuplicates(head.next.next);
//     } else {
//         // Otherwise, proceed to the next node
//         head.next = deleteDuplicates(head.next);
//     }

//     return head;
// };


