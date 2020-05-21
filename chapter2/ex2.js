let result = 1;
for (let counter = 0; counter < 100; counter = counter + 1) {
  if (result % 3 == 0 && result % 5 == 0) console.log("FizzBuzz");
  //using logical and operator to write FizzBuzz. this must be first condition
  else if (result % 3 == 0) console.log("Fizz");
  //if we divide a nuber by 3 and remainder is 0, then write fizz
  else if (result % 5 == 0) console.log("Buzz");
  //if we divide a nuber by 5 and remainder is 0, then write buzz
  else console.log(result);
  result = result + 1;
}
