var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  // let stack = [];
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[a] = nums[i];
      a++;
    }
  }
  return a;
};

console.log(removeElement([3, 2, 2, 3], 2));
