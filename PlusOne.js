var plusOne = function (digits) {
  digits = BigInt(digits.join("")) + 1n;
  digits = digits.toString().split("");
  // if (digits[digits.length - 1] === 9) {
  //   digits[digits.length - 1] = 1;
  //   digits[digits.length] = 0;
  //   return digits;
  // }
  // let a = digits[digits.length - 1] + 1;

  // digits[digits.length - 1] = a;
  return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9]));
