"use strict";
function sortedSquares(nums) {
    const left = [];
    let i = 0;
    for (; nums[i] < 0; i++) {
        left.unshift(0 - nums[i]);
    }
    const right = nums.slice(i);
    const result = [];
    let m = 0, n = 0;
    while (m < i && n < nums.length - i) {
        if (left[m] < right[n]) {
            result.push(left[m]);
            m = m + 1;
        }
        else {
            result.push(right[n]);
            n = n + 1;
        }
    }
    if (m < i) {
        result.push(...left.slice(m));
    }
    if (n < nums.length - i) {
        result.push(...right.slice(n));
    }
    return result.map(item => item * item);
}
;
