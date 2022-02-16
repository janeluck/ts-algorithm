/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {ListNode} from "./lib";

// const node7 = new ListNode(7);
// const node6 = new ListNode(6, node7);
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    return head;
};
const result = removeNthFromEnd(node1, 2)
console.log(result);
