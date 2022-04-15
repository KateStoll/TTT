

function emptySpaceOnGameboard(board){
    let emptyBoardSpace = false;
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; y < board.length; x++) {
            let position = board[y][x];
            if (position == "") {
                emptyBoardSpace = true;
            }
        }
    }
} // this function allows the for loop 3to move throught the empty spacess on
    //the board until an empty space is available


function winningRules(board, player) {
    return [
        board[0][0] === player && board[0][1] === player && board[0][2]  === player,
        board[1][0] === player && board[1][1] === player && board[1][2]  === player,
        board[2][0] === player && board[2][1] === player && board[2][2]  === player,

        board[0][0] === player && board[1][0] === player && board[2][0]  === player,
        board[0][1] === player && board[1][1] === player && board[2][1]  === player,
        board[0][2] === player && board[1][2] === player && board[2][2]  === player,

        board[0][0] === player && board[1][1] === player && board[2][2]  === player,
        board[0][2] === player && board[1][1] === player && board[2][0]  === player
    ]
} //this function sets up the rules for a winning game


function alternateTurns(num) {
    return num % 2 != 0;
}





function play() {

    let currentPlayer = ""
    const tikTakToeBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    while(emptySpaceOnGameboard(tikTakToeBoard)){

        if (alternateTurns(turn)) {
            currentPlayer = "x"
        } else {
            currentPlayer = "o"
        }

        if(winningRules(tikTakToeBoard, currentPlayer)) {
            console.log("Congrats" + currentPlayer)
            break;
        }

        let emptyLocation = getAvailablePosition(tikTakToeBoard);
        fillWithLetter(tikTakToeBoard, emptyLocation, currentPlayer);
        console.log(turn, currentPlayer, tikTakToeBoard);
        turn++
    }

    if(emptySpaceOnGameboard(tikTakToeBoard) == false && winningRules(tikTakToeBoard, "x") == false && winningRules(tikTakToeBoard, "o") == false) {
        console.log("It's a draw!")
    }

}