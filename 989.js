var addToArrayForm = function (num, k) {
  num = BigInt(num.join(""));
  k = BigInt(k);

  return (num + k).toString().split("");
};

console.log(addToArrayForm([1, 2, 3, 4, 5, 6], 12));
