import random

# Initialize the Tic Tac Toe board
board = [' ' for _ in range(9)]

# Function to print the Tic Tac Toe board
def print_board(board):
    for row in [board[i:i+3] for i in range(0, 9, 3)]:
        print(' | '.join(row))
        print('-' * 9)

# Function to check if a player has won
def check_win(board, player):
    win_combinations = [(0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)]
    for combo in win_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False

# Function to check if the board is full (a tie)
def check_tie(board):
    return ' ' not in board

# Main game loop
while True:
    print_board(board)

    # Player's move
    while True:
        player_move = input("Enter your move (1-9): ")
        try:
            player_move = int(player_move)
            if 1 <= player_move <= 9 and board[player_move - 1] == ' ':
                board[player_move - 1] = 'X'
                break
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Invalid input. Enter a number between 1 and 9.")

    # Check if the player has won
    if check_win(board, 'X'):
        print_board(board)
        print("Congratulations! You win!")
        break

    # Check for a tie
    if check_tie(board):
        print_board(board)
        print("It's a tie!")
        break

    # AI's move
    while True:
        ai_move = random.randint(1, 9)
        if board[ai_move - 1] == ' ':
            board[ai_move - 1] = 'O'
            break

    # Check if the AI has won
    if check_win(board, 'O'):
        print_board(board)
        print("AI wins! You lose.")
        break
