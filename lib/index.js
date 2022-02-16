"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = val ? val : 0;
        this.next = next ? next : null;
    }
}
exports.ListNode = ListNode;
