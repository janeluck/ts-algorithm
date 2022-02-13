function sortedSquares(nums) {
    var left = [];
    var i = 0;
    for (; nums[i] < 0; i++) {
        left.unshift(0 - nums[i]);
    }
    var right = nums.slice(i);
    var result = [];
    var m = 0, n = 0;
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
        result.push.apply(result, left.slice(m));
    }
    if (n < nums.length - i) {
        result.push.apply(result, right.slice(n));
    }
    return result.map(function (item) { return item * item; });
}
;
