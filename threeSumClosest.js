function threeSumClosest(nums, target) {
    if (nums.length < 4) {
        return nums.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    var min = Infinity;
    function update(cur) {
        if (Math.abs(cur - target) < Math.abs(min - target)) {
            min = cur;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            var k = nums.length - 1, j = i + 1;
            while (j < k) {
                var sum = nums[i] + nums[j] + nums[k];
                if (sum === target) {
                    return sum;
                }
                update(sum);
                if (sum > target) {
                    k = k - 1;
                }
                else {
                    j = j + 1;
                }
            }
        }
    }
    return min;
}
;
