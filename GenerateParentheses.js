var generateParenthesis = function (n) {
  if (n <= Math.pow(-2, 31) || n >= Math.pow(2, 31) - 1) {
    console.log("salom");
  }
  if (n < 0) {
    n = n.toString();
    let numbers = n.split("");
    let stack = [];
    for (let i = 1; i < numbers.length; i++) {
      stack.unshift(numbers[i]);
    }
    stack.unshift("-");
    return stack.join("");
  }
  n = n.toString();
  console.log(n);
  let numbers = n.split("");
  let stack = [];
  for (let i = 0; i < numbers.length; i++) {
    stack.unshift(numbers[i]);
  }
  console.log(stack[stack.length - 1]);
  if (stack[stack.length - 1] === 0) {
    stack.pop();
  }
  console.log(stack.join(""));
};

generateParenthesis(-123);
