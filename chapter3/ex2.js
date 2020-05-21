function isEven1(x) {
  if (x % 2 == 0) return "even";
  else return "odd";
}
/*first solution using % method*/

function isEven(x) {
  /*second solution predefined by the book*/
  while (x >= 2) {
    x = x - 2;
    // console.log(x);
    if (x == 0) return "even";
    else if (x == 1) return "odd";
  }
}

console.log(isEven(6));
console.log("second solution:");
console.log(isEven1(6));
