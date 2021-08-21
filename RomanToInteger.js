var romanToInt = function (s) {
  const romansToIntegers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // s = s.split("");
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romansToIntegers[s.charAt(i)];
    let next = romansToIntegers[s.charAt(i + 1)];

    if (next) {
      if (current >= next) {
        total += current;
      } else {
        total += next - current;
        i++;
      }
    } else {
      total += current;
    }
  }
  return total;
};

romanToInt("IXII");
