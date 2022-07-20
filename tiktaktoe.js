const { Position } = require("./Position");

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
    //return an array of positions with coolpositions concept dont modify gets make a new func
 // this function allows the for loop 3to move through the empty spaces on
    //the board until an empty space is available

const getEmptyPosition = (board) => {
    let emptyCoolPositions = getsEmptyPositionsAvailable(board);
    //let emptyPositions = getsEmptyPositionAvailable(board);
    if(emptyCoolPositions.length == 0)  {
        return []
    } 
    // = an integeger, 0 to emptyPositions.length
    let positionIndex = Math.round(getRandomInt(0, emptyCoolPositions.length -1))
    
    return emptyCoolPositions[positionIndex];

    //line 45 gets an item out of the array, returns an position obj

 // this function gets one position from the board in the form of the position class
 //this func gets an entire array of empty positions available thne usses a random number genrateor to pick one of them
 
 
}

const getRandomInt = (min, max) => {
    return Math.random() * (max-min) + min;
} //random number generator

const fillWithLetter = (board, position, char) => {
    //converted the array with 2 intgers to a class
    board[position.y][position.x] = char;
    return board
        //returns a nested array, with empty strings
} 

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

    while(getsEmptyPositionsAvailable(tikTakToeBoard).length > 0){
        if (alternateTurns(turn)) {
            currentPlayer = "x"
        } else {
            currentPlayer = "o"
        }

        let emptyLocation = getEmptyPosition(tikTakToeBoard);
        // a position obj

        fillWithLetter(tikTakToeBoard, emptyLocation, currentPlayer);
         
        console.log(turn, currentPlayer, tikTakToeBoard);
        turn++
    }

    if(getsEmptyPositionsAvailable(tikTakToeBoard).length == 0 && hasWon(tikTakToeBoard, "x") == false && hasWon(tikTakToeBoard, "o") == false) {

        console.log("It's a draw!");
    } else {
        console.log("Congrats", currentPlayer);
    }
}

exports.getsEmptyPositionsAvailable = getsEmptyPositionsAvailable
exports.getEmptyPosition = getEmptyPosition
exports.getRandomInt = getRandomInt
exports.fillWithLetter = fillWithLetter
exports.hasWon = hasWon
exports.alternateTurns = alternateTurns
exports.play = play