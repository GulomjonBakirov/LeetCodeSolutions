var strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0;
  let stack = [];
  let a = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    stack.push(haystack.substring(i, a));
    a++;
  }
  let b = -1;
  for (let j = 0; j < stack.length; j++) {
    if (stack[j] === needle) {
      b = j;
      break;
    } else {
      b;
    }
  }
  console.log(stack, needle.length, b);
};

strStr("", "ll");
