const { functionDeclaration } = require("@babel/types");
const { Position } = require("./Position");

const getsEmptyPositionAvailable = (board) => {
    let positions = []
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length; x++) {
            let space = board[y][x];
            if (space == "") {
                an_empty_position = [y, x];
                positions.push(an_empty_position);
            } 
        }
    }
    return positions
    //return an array of positions with coolpositions concept dont modify gets make a new func
} // this function allows the for loop 3to move through the empty spaces on
    //the board until an empty space is available

const getsEmptyPositionsAvailable = (board) => {
    let positions = []
    for(y = 0; y < board.length; y++){
        for(x = 0; x < board[y].length; x++){
            let space = board[y][x];
            if (space == "") {
                an_empty_position = new Position(y,x);
                //y,x is the default value
                positions.push(an_empty_position);
            }
        }
    }
    return positions;
}

const getEmptyPosition = (board, positions) => {
    // = [a_position, b_position, c_position]
    let emptyPositions = getsEmptyPositionAvailable(board);
    if(emptyPositions.length == 0)  {
        return []
    } 
    // = an integeger, 0 to emptyPositions.length
    let positionIndex = Math.round(getRandomInt(0, emptyPositions.length -1))

    return emptyPositions[positionIndex]

}

const getRandomInt = (min, max) => {
    return Math.random() * (max-min) + min;
} //random number generator

const fillWithLetter = (board, position, char) => {
    let coolPosition = new Position(position[1],position[0]);
    console.log("position", position);
    console.log("coolPosition.y", coolPosition.y);
    console.log("coolPosition.x", coolPosition.x);
    console.log("board[coolPosition.y]", board[coolPosition.y]);
    console.log("board[coolPosition.y][coolPosition.x]", board[coolPosition.y][coolPosition.x]);
    board[coolPosition.y][coolPosition.x] = char;
    return board
        //returns a nested array, with empty strings
} //y = 0

const alternateTurns = (num) => {
    return num % 2 != 0;
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

const play = () => { 

    let currentPlayer = ""

    const tikTakToeBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    let turn = 1;

    while(getsEmptyPositionAvailable(tikTakToeBoard).length > 0){
        if (alternateTurns(turn)) {
            currentPlayer = "x"
        } else {
            currentPlayer = "o"
        }

        let emptyLocation = getEmptyPosition(tikTakToeBoard);

        fillWithLetter(tikTakToeBoard, emptyLocation, currentPlayer);
         
        console.log(turn, currentPlayer, tikTakToeBoard);
        turn++
    }

    if(getsEmptyPositionAvailable(tikTakToeBoard).length == 0 && hasWon(tikTakToeBoard, "x") == false && hasWon(tikTakToeBoard, "o") == false) {

        console.log("It's a draw!");
    } else {
        console.log("Congrats", currentPlayer);
    }
}

exports.getsEmptyPositionsAvailable = getsEmptyPositionsAvailable
exports.getsEmptyPositionAvailable = getsEmptyPositionAvailable
exports.getEmptyPosition = getEmptyPosition
exports.getRandomInt = getRandomInt
exports.fillWithLetter = fillWithLetter
exports.hasWon = hasWon
exports.alternateTurns = alternateTurns
exports.play = play