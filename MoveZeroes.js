var moveZeroes = function (nums) {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[a++] = nums[i];
    }
  }
  while (a < nums.length) {
    nums[a++] = 0;
  }
  return nums;
};

moveZeroes([0, 1, 34, 5, 51, 0, 0]);
