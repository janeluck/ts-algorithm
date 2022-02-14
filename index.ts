/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    nums = nums.reverse();
    const index = nums.length - k % nums.length;
    const first = nums.slice(0, index).reverse();
    const second = nums.slice(index).reverse();
    nums =  first.concat(second);
    console.log(nums);
};
rotate([1,2,3,4,5,6,7], 3);