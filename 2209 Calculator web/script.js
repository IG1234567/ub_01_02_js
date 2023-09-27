function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = '';
    }
    display.textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').textContent);
        document.getElementById('display').textContent = result;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}
