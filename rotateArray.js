"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    const ret = nums.slice();
    for (let i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = ret[i];
    }
}
;
