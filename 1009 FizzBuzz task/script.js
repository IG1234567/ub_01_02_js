// Ask the user to enter a  number
const limit = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(limit)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  // Loop from 1 to the specified limit
  for (let i = 1; i <= limit; i++) {
    // Check if the current number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if the current number is divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if the current number is divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // If none of the above conditions are met, print the number itself
    else {
      console.log(i);
    }
  }
}