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

const node7 = new ListNode(7);
const node6 = new ListNode(6, node7);
const node5 = new ListNode(5, node6);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// 快慢指针
function middleNode(head: ListNode | null): ListNode | null {
    const pre = new ListNode(0, head);
    let first = pre, slow = pre;
    while (first && first.next) {
        first = first.next && first.next.next;
        slow = slow.next;
    }
    return first ? slow.next : slow;

};

function middleNode1(head: ListNode | null): ListNode | null {
    let i = 0,//链表长度
        next = head;
    while (next) {
        i = i + 1;
        next = next.next;
    }
    const middle = Math.floor(i / 2) + 1;
    let pre = new ListNode(0, head);
    let result = pre, j = 0;
    while (j < middle) {
        j = j + 1;
        result = result.next;
    }
    ;
    return result;
};
console.log(middleNode(node1));
