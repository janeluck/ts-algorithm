"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
// const node7 = new ListNode(7);
// const node6 = new ListNode(6, node7);
const node5 = new lib_1.ListNode(5);
const node4 = new lib_1.ListNode(4, node5);
const node3 = new lib_1.ListNode(3, node4);
const node2 = new lib_1.ListNode(2, node3);
const node1 = new lib_1.ListNode(1, node2);
function removeNthFromEnd(head, n) {
    const pre = new lib_1.ListNode(0, head);
    let first = pre, slow = pre;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    while (first && first.next) {
        first = first.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return pre.next;
}
;
