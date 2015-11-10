// FizzBuzz Program
// Skylar King
// Prints 1-100, if divisible by 3 prints fizz, if divisible by 5 prints buzz, if divisible by both prints buzz.

for (num = 1; num <=100; num++) {
  if (num % 15 === 0)
    console.log("FizzBuzz");

  else if (num % 3 === 0)
    console.log("Fizz");

  else if (num % 5 === 0)
    console.log("Buzz");

  else
    console.log(num);
}
