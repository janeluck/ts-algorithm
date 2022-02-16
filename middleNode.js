"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const lib_1 = require("./lib");
const node7 = new lib_1.ListNode(7);
const node6 = new lib_1.ListNode(6, node7);
const node5 = new lib_1.ListNode(5, node6);
const node4 = new lib_1.ListNode(4, node5);
const node3 = new lib_1.ListNode(3, node4);
const node2 = new lib_1.ListNode(2, node3);
const node1 = new lib_1.ListNode(1, node2);
// 快慢指针
function middleNode(head) {
    const pre = new lib_1.ListNode(0, head);
    let first = pre, slow = pre;
    while (first && first.next) {
        first = first.next && first.next.next;
        slow = slow.next;
    }
    return first ? slow.next : slow;
}
;
function middleNode1(head) {
    let i = 0, //链表长度
    next = head;
    while (next) {
        i = i + 1;
        next = next.next;
    }
    const middle = Math.floor(i / 2) + 1;
    let pre = new lib_1.ListNode(0, head);
    let result = pre, j = 0;
    while (j < middle) {
        j = j + 1;
        result = result.next;
    }
    ;
    return result;
}
;
console.log(middleNode(node1));
