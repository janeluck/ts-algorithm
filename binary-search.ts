function search(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1;
  while (low <= high){
    const mid = Math.floor((high + low) /2);
    if(nums[mid] === target) return mid;
    if(nums[mid] > target){
      high = mid - 1;
    }else {
      low = mid + 1;
    }
  }
};
console.log(search([-1,0,3,5,9,12], 9));