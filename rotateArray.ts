/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const ret = nums.slice();
  for(let i = 0; i < nums.length; i++){
    nums[(i + k) % nums.length] = ret[i];
  }
};
function rotate1(nums: number[], k: number): void {
  nums = nums.reverse();
  const index = nums.length - k % nums.length;
  const first = nums.slice(0, index).reverse();
  const second = nums.slice(index).reverse();
  nums =  first.concat(second);
  console.log(nums);
};
