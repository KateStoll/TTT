const { Position } = require("../Position.js");
const tiktaktoe = require("../tiktaktoe.js")

describe("fillWithLetter", ()=> {

    test("recieves a position on the board and fills the corresponding board spot with a letter", () => {

        const board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        const position = new Position(0, 0);

        const char = "x";

        expect(tiktaktoe.fillWithLetter(board, position, char)).toEqual([["x", "", ""],
        ["", "", ""],
        ["", "", ""]])
    } )
})

//call function (expect) and its return is (toEqual)