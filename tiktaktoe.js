
const hasEmptySpaceOnGameboard = (board) => {
    let emptyBoardSpace = false;
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length; x++) {
            let position = board[y][x];
            if (position == "") {
                emptyBoardSpace = true;
            }
        }
    }
    return emptyBoardSpace
} // this function allows the for loop 3to move through the empty spaces on
    //the board until an empty space is available
const getEmptyPosition = (board) => {
    let notFound = true;
    let randomPostion = []

    while (notFound && hasEmptySpaceOnGameboard(board)) {
        let getRandomPosition = Math.round(getRandomInt(1,9))

        if(getRandomPosition == 1) {
            randomPostion = [0,0]
        } else if(getRandomPosition == 2) {
            randomPostion = [0,1]
        } else if(getRandomPosition == 3) {
            randomPostion = [0,2]
        } else if(getRandomPosition == 4) {
            randomPostion = [1,0]
        } else if(getRandomPosition == 5) {
            randomPostion = [1,1]
        } else if(getRandomPosition == 6) {
            randomPostion = [1,2]
        } else if(getRandomPosition == 7) {
            randomPostion = [2,0]
        } else if(getRandomPosition == 8) {
            randomPostion = [2,1]
        } else if(getRandomPosition == 9) {
            randomPostion = [2,2]
        } else {
            throw "Invalid Random Number" + getRandomPosition;
        }

        let position = board[randomPostion[0]][randomPostion[1]]
        if(position == "") {
            notFound = false;
        } // we don't need this 

    }

    return randomPostion

}

const getRandomInt = (min, max) => {
    return Math.random() * (max-min) + min;
} //random number generator

const fillWithLetter = (board, position, char) => {
    board[position[0]][position[1]] = char;
    return board
}

const hasWon = (board, player) => {
    if(JSON.stringify(board[0]) == JSON.stringify([player, player, player]) ) {
        return true;
     } else if(JSON.stringify(board[1]) == JSON.stringify([player, player, player])) {
         return true;
     } else if(JSON.stringify(board[2]) == JSON.stringify([player, player, player])) {
         return true;
     } else if(board[0][0] == player && board[1][0] == player && board[2][0] == player) {
         return true;
     } else if(board[0][1] == player && board[1][1] == player && board[2][1] == player) {
         return true;
     } else if(board[0][2] == player && board[1][2] == player && board[2][2] == player) {
         return true;
     } else if(board[0][0] == player && board[1][1] == player && board[2][2] == player) {
         return true;
     } else if(board[0][2] == player && board[1][1] == player && board[2][0] == player) {
         return true;
     } else {
         return false;
     }

} //this function sets up the rules for a winning game (didwin)


const alternateTurns = (num) => {
    return num % 2 != 0;
} //isodd 

const play = () => {

    let currentPlayer = ""

    const tikTakToeBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    let turn = 1;

    while(hasEmptySpaceOnGameboard(tikTakToeBoard)){
        if (alternateTurns(turn)) {
            currentPlayer = "x"
        } else {
            currentPlayer = "o"
        }
        
        if(hasWon(tikTakToeBoard, currentPlayer)) {
            console.log("Congrats" + currentPlayer)
            break;
        }

        let emptyLocation = getEmptyPosition(tikTakToeBoard);
        fillWithLetter(tikTakToeBoard, emptyLocation, currentPlayer);
        console.log(turn, currentPlayer, tikTakToeBoard);
        turn++
    }

    if(hasEmptySpaceOnGameboard(tikTakToeBoard) == false && hasWon(tikTakToeBoard, "x") == false && winningRules(tikTakToeBoard, "o") == false) {
        console.log("It's a draw!")
    }

}

exports.hasEmptySpaceOnGameboard = hasEmptySpaceOnGameboard
exports.getEmptyPosition = getEmptyPosition
exports.getRandomInt = getRandomInt
exports.fillWithLetter = fillWithLetter
exports.hasWon = hasWon
exports.alternateTurns = alternateTurns
exports.play = play