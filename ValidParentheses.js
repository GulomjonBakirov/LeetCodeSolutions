var isValid = function (s) {
  const characters = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  for (let char of s) {
    if (characters[char]) {
      stack.push(characters[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }

  return !stack.length;
};

isValid("({[])}");
