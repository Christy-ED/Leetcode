/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
            if (head === null || head.next === null || k === 0) {
            return head;
        }

        // Step 1: Find the length of the list and the tail node
        let n = 1;
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
            n++;
        }

        // Step 2: Link the tail to the head to form a cycle
        tail.next = head;

        // Step 3: Find the new tail position (n - k % n - 1) and the new head
        k %= n;
        let new_tail = head;
        for (let i = 1; i < n - k; i++) {
            new_tail = new_tail.next;
        }

        // Step 4: Set the new head and break the cycle
        let new_head = new_tail.next;
        new_tail.next = null;

        return new_head;
    }

    