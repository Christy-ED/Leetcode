/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

   let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        // Move the `right` pointer `n` nodes ahead
        while (n > 0 && right) {
            right = right.next;
            n -= 1;
        }

        // Move `left` and `right` pointers until `right` reaches the end
        while (right) {
            left = left.next;
            right = right.next;
        }

        // Remove the nth node from the end
        left.next = left.next.next;

        // Return the new head (dummy.next skips the dummy node)
        return dummy.next;
    }

    
