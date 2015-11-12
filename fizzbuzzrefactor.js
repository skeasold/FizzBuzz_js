// FizzBuzz Refactor Program
// Skylar King
// Prints 1-100, if divisible by 3 prints fizz, if divisible by 5 prints buzz, if divisible by both prints buzz.

function numberEntry () {
  startingNum = 1
  endingNum = prompt("Please type a number to start FizzBuzz.");
  endingNumConversion = parseInt(endingNum);
  numberValidation()
}

function numberValidation () {
  if (isNaN (endingNumConversion) === true) {
      alert("That is not a number. Please try again.");
      numberEntry();
  }
  else {
    console.log("It works so far!");
  }
}

function fizzbuzz (startingNum , endingNum) {
  var startingNum = 1
  var endingNum = prompt("Please type a number to start FizzBuzz.");
  var endingNumConversion = parseInt(endingNum);

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
