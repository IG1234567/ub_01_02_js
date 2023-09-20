function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

console.log(divideNumbers(10, 2)); // Example usage
console.log(divideNumbers(5, 0)); // Example usage (error case)
