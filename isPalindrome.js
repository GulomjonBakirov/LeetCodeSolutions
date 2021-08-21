var isPalindrome = function (x) {
  if (x < 0 || x > 2 ** 31 - 1) return false;
  x = x.toString();
  let numbers = x.split("");
  let palindromeNumbers = [];
  let stack = [];
  for (let i = 0; i < numbers.length; i++) {
    palindromeNumbers.unshift(numbers[i]);
  }
  console.log(palindromeNumbers);
  for (let j = 0; j < palindromeNumbers.length; j++) {
    if (palindromeNumbers[j] !== numbers[j]) {
      stack.push(palindromeNumbers[j]);
    }
  }
  return !stack.length;
};

isPalindrome(12312345641321);
