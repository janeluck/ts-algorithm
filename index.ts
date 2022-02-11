/*
* 三数之和
* 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

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

