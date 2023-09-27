document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('reset-button');

    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                return boardState[a];
            }
        }

        if (!boardState.includes('')) {
            return 'T';
        }

        return null;
    }

    function handleCellClick(e) {
        const cell = e.target;
        const cellIndex = parseInt(cell.dataset.index);

        if (boardState[cellIndex] === '' && gameActive) {
            boardState[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);

            const winner = checkWin();
            if (winner) {
                if (winner === 'T') {
                    message.textContent = "It's a tie!";
                } else {
                    message.textContent = `${winner} wins!`;
                }
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    function resetGame() {
        currentPlayer = 'X';
        boardState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        message.textContent = `Player ${currentPlayer}'s turn`;

        const cells = board.querySelectorAll('.board div');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('X', 'O');
        });
    }

    board.addEventListener('click', handleCellClick);
    resetButton.addEventListener('click', resetGame);

    resetGame();
});
