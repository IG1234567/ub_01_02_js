function promptMatrix() {
    let rows = parseInt(prompt("Enter the number of rows:"));
    let cols = parseInt(prompt("Enter the number of columns:"));
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = parseInt(prompt(`Enter the value at row ${i + 1} and column ${j + 1}:`));
        }
    }

    return matrix;
}

function addMatrices(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

let matrixA = promptMatrix();
let matrixB = promptMatrix();

let sumMatrix = addMatrices(matrixA, matrixB);

console.log("Sum of the matrices:");
console.log(sumMatrix);