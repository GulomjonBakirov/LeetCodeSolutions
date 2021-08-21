var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};

lengthOfLastWord("  saslmoadsf   a dlfam sdlf adfskm aksdf");
