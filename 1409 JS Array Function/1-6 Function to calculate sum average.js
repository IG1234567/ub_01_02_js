function calculateSumAndAverage(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;

    return { sum, average };
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSumAndAverage(numbers);
console.log(`Sum: ${result.sum}, Average: ${result.average}`); // Example usage
