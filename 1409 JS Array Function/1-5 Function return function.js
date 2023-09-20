function createAdder(number1) {
    return function (number2) {
        return number1 + number2;
    };
}

// Test the function:
const addFive = createAdder(5);
console.log(addFive(3)); // Example 
