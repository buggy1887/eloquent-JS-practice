function min1(x, y) {
  let z = Math.min(x, y);
  return z + " is the minimum number";
}

function min(x, y) {
  if (x == y) return "numbers are equal";
  else if (x - y < 0) return x + " is the minimum number!";
  else return y + " is the minimum number";
}

console.log(min1(8, 7));
console.log(min(8, 7));
