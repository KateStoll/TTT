const tiktaktoe = require("../tiktaktoe.js");

describe("hasWon", ()=> {
    test("it will return true when there is all xxx accross the top row", () => {
        let board = [
            ["x", "x", "x"],
            ["", "", ""],
            ["", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx accross the center row", () => {
        let board = [
            ["", "", ""],
            ["x", "x", "x"],
            ["", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx accross the bottom row", () => {
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["x", "x", "x"]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx down the left column", () => {
        let board = [
            ["x", "", ""],
            ["x", "", ""],
            ["x", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx down the middle column", () => {
        let board = [
            ["", "x", ""],
            ["", "x", ""],
            ["", "x", ""]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx down the right column", () => {
        let board = [
            ["", "", "x"],
            ["", "", "x"],
            ["", "", "x"]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx diagnally right", () => {
        let board = [
            ["x", "", ""],
            ["", "x", ""],
            ["", "", "x"]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all xxx diagnally left", () => {
        let board = [
            ["", "", "x"],
            ["", "x", ""],
            ["x", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true);
    } )

    test("it will return true when there is all ooo across the top row", () => {
        let board = [
            ["o", "o", "o"],
            ["", "", ""],
            ["", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo across the middle row", () => {
        let board = [
            ["", "", ""],
            ["o", "o", "o"],
            ["", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo across the bottom row", () => {
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["o", "o", "o"]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo down the left column", () => {
        let board = [
            ["o", "", ""],
            ["o", "", ""],
            ["o", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo down the middle column", () => {
        let board = [
            ["", "o", ""],
            ["", "o", ""],
            ["", "o", ""]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo down the right column", () => {
        let board = [
            ["", "", "o"],
            ["", "", "o"],
            ["", "", "o"]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo down diagnally right", () => {
        let board = [
            ["o", "", ""],
            ["", "o", ""],
            ["", "", "o"]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is all ooo diagnally left", () => {
        let board = [
            ["", "", "o"],
            ["", "o", ""],
            ["o", "", ""]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true);
    } )

    test("it will return true when there is a winner!", () => {
        let board = [
            ["o", "o", "o"],
            ["x", "o", "x"],
            ["", "x", "x"]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(true)
    } )

    test("it will return true when there is a winner!", () => {
        let board = [ 
            [ 'o', 'o', 'x' ], 
            [ 'x', 'o', 'o' ], 
            [ 'x', 'x', 'x' ] 
        ];
        expect(tiktaktoe.hasWon(board, "x")).toEqual(true)
    } )
    
    test("it will return false when there is no winner", () => {
        let board = [
            ["x", "o", "x"],
            ["x", "x", "o"],
            ["o", "x", "o"]
        ];
        expect(tiktaktoe.hasWon(board, "o")).toEqual(false)
        expect(tiktaktoe.hasWon(board, "x")).toEqual(false)
       
    } )

    
})
