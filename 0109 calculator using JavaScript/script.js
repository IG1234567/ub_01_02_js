// Get two numbers from the user using prompt
let value1 = parseFloat(prompt("Enter the first value:"));
let value2 = parseFloat(prompt("Enter the second value:"));

// Check if entered values are numbers
if (isNaN(value1) || isNaN(value2)) {
    console.log("Please enter valid numbers.");
} else {
    // Perform and display the results of various operations
    console.log(`The sum of ${value1} and ${value2} is: `, value1 + value2);
    console.log(`The difference between ${value1} and ${value2} is: `, value1 - value2);
    console.log(`The product of ${value1} and ${value2} is: `, value1 * value2);
    console.log(`The quotient of ${value1} divided by ${value2} is: `, value1 / value2);
    console.log(`The remainder when ${value1} is divided by ${value2} is: `, value1 % value2);
    console.log(`${value1} raised to the power of ${value2} is: `, value1 ** value2);

    // Comparison operations
    console.log(`Is ${value1} equal to ${value2}? `, value1 == value2);
    console.log(`Is ${value1} not equal to ${value2}? `, value1 != value2);
    console.log(`Is ${value1} less than ${value2}? `, value1 < value2);
    console.log(`Is ${value1} greater than ${value2}? `, value1 > value2);

    // Greater or equal comparison
    if (value1 > value2) {
        console.log(`${value1} is greater than ${value2}`);
    } else {
        console.log(`${value2} is greater or equal to ${value1}`);
    }
}
