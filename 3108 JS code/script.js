// Task 2 - Write JS code which asks the user to enter the name (promt command)
var name = prompt("Enter your name:");
console.log(name + " logged in!");

// Task 3 - Ask user to enter 2 text values. 
// If the input of both values are numbers, 
// alert the sum of both otherwise alert the concatenation
var value1 = prompt("Enter the first text value:");
var value2 = prompt("Enter the second text value:");

if (!isNaN(value1) && !isNaN(value2)) {
  var sum = parseFloat(value1) + parseFloat(value2);
  alert("Sum of values: " + sum);
} else {
  alert("Concatenation of values: " + value1 + value2);
}

// Task 4 - Ask the user to enter two values: Name and date of birth.
// Show alert output in 2 lines
var enteredName = prompt("Enter your name:");
var dob = prompt("Enter your date of birth (YYYY-MM-DD):");

alert("Name: " + enteredName + "\nDate of birth: " + dob);
