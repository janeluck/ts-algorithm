/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    var ret = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = ret[i];
    }
}
;
