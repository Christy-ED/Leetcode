/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        // Step 1: Find the length of the list and the tail node
        int n;
        ListNode tail = head;
        for (n = 1; tail.next != null; n++) {
            tail = tail.next;
        }

        // Step 2: Link the tail to the head to form a cycle
        tail.next = head;

        // Step 3: Find the new tail position (n - k % n - 1) and the new head
        k %= n;
        ListNode new_tail = head;
        for (int i = 1; i < n - k; i++) {
            new_tail = new_tail.next;
        }

        // Step 4: Set the new head and break the cycle
        ListNode new_head = new_tail.next;
        new_tail.next = null;

        return new_head;
    }
}