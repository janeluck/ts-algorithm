function threeSumClosest(nums: number[], target: number): number {
    if (nums.length < 4) {
        return nums.reduce(function (a, b) {
            return a + b
        }, 0)
    }
    nums.sort(function (a, b) {
        return a - b
    })
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let k = nums.length - 1;
        }
        return min;
    }
};
console.log(threeSumClosest([-4,-1,1,2], 1));
