function threeSum(nums: number[]): number[][] {
    const result = [];
    if (nums.length < 3) return result;
    nums.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; nums[i] <= 0; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            for (let j = i + 1; j < nums.length; j++) {
                if ((j === i + 1) || nums[j] !== nums[j - 1]) {
                    for (let k = j + 1; k < nums.length; k++) {
                        if ((k === j + 1) || nums[k] !== nums[k - 1]) {
                            if (nums[i] + nums[j] + nums[k] === 0) {
                                result.push([nums[i], nums[j], nums[k]])
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
};
