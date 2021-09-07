var divisorGame = function (n) {
  let type = true;
  while (type) {
    const x = parseInt(Math.random() * 1000);
    if (x < n || n % x == 0) {
      n = n - x;
      divisorGame(n);
    } else {
      continue;
    }
  }
};

console.log(divisorGame(5));
