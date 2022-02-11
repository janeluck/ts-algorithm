/*
* 三数之和
*
链接：https://leetcode-cn.com/problems/3sum
* */

function threeSum(nums: number[]): number[][] {
    const result = [];
    if (nums.length < 3) return result;
    nums.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; nums[i] <= 0; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let k = nums.length - 1;
            for (let j = i + 1; j < nums.length; j++) {
                if ((j === i + 1) || nums[j] !== nums[j - 1]) {
                    while (j < k || (nums[j] + nums[k] > -nums[i])) {
                        k = k - 1;
                    }
                    if (j === k) {
                        break;
                    }
                    if (nums[j] + nums[k] === -nums[i]) {
                        result.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
    }
    return result;
};

