"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            const ret = nums[left];
            nums[left] = nums[right];
            nums[right] = ret;
            left = left + 1;
        }
        right = right + 1;
    }
}
;
