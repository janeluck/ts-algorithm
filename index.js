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
    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            var k = nums.length - 1;
        }
        return min;
    }
}
;
console.log(threeSumClosest([-4, -1, 1, 2], 1));
