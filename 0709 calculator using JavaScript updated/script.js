// Step 1: Ask user to enter two numbers using prompt
let value1 = parseFloat(prompt("Enter the first number:"));
let value2 = parseFloat(prompt("Enter the second number:"));

// Check if entered values are numbers, if not, write error to console
if (isNaN(value1) || isNaN(value2)) {
    console.error("Please enter valid numbers.");
} else {
    // Step 2: Ask user to enter an operation
    let operation = prompt("Enter an operation (+, -, *, /, %):");

    // Check if entered operation is valid, if not, write error to console
    if (!['+', '-', '*', '/', '%'].includes(operation)) {
        console.error("Please enter a valid operation.");
    } else {
        // Step 3: Perform the operation and alert the result
        let result;
        switch (operation) {
            case '+':
                result = value1 + value2;
                break;
            case '-':
                result = value1 - value2;
                break;
            case '*':
                result = value1 * value2;
                break;
            case '/':
                result = value1 / value2;
                break;
            case '%':
                result = value1 % value2;
                break;
        }
        alert(`The result of ${value1} ${operation} ${value2} is: ${result}`);
    }
}
