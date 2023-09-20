function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Test the function:
console.log(divideNumbers(10, 2)); // Example 
console.log(divideNumbers(5, 0)); // Example (error)
