// FizzBuzz Refactor Program
// Skylar King
// Prompts user for ending number. Starting number defaults to '1'.
// If numbers in range are divisible by 3 prints fizz, if divisible by 5 prints buzz,
// if divisible by both prints fizzbuzz.

function startFizzBuzz () {
  startingNum = 1
  endingNum = prompt("Please type a number to start FizzBuzz.");
  endingNumConversion = parseInt(endingNum);
  isNumberValidation();
}

function isNumberValidation () {
  if (isNaN (endingNumConversion) === true) {
      alert("That is not a number. Please try again.");
      startFizzBuzz();
  }
  else {
    FizzBuzz();
  }
}

function FizzBuzz () {
  for (num = startingNum; num <= endingNumConversion; num++) {
    if (num % 15 === 0)
      console.log("FizzBuzz");

    else if (num % 3 === 0)
      console.log("Fizz");

    else if (num % 5 === 0)
      console.log("Buzz");

    else
      console.log(num);
  }
}
