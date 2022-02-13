function searchInsert(nums, target) {
    var low = 0, high = nums.length - 1, cur;
    while (low <= high) {
        cur = Math.floor((low + high) / 2);
        if (nums[cur] === target)
            return cur;
        if (nums[cur] > target) {
            high = cur - 1;
        }
        else {
            low = cur + 1;
        }
    }
    if (nums[cur] > target) {
        return cur;
    }
    else {
        return cur + 1;
    }
}
;
