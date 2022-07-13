const { test, expect } = require("@jest/globals")
const tiktaktoe = require("../tiktaktoe.js")

describe("getsEmptyPositionAvailable", ()=> {

    test("will return an array of positions availabe when there is an empty space", () => {
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        expect(tiktaktoe.getsEmptyPositionAvailable(board)).toEqual([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]);
    })

    test("will return an array of positions availabe when there is an empty space", () => {
        let board = [
            ["x", "", ""],
            ["", "", "o"],
            ["", "x", ""]
        ];
        expect(tiktaktoe.getsEmptyPositionAvailable(board)).toEqual([[0,1],[0,2],[1,0],[1,1],[2,0],[2,2]]);
    })
    
    test("will return false when there is no empty space", () => {
        let board = [
            ["x", "x", "x"],
            ["x", "x", "x"],
            ["x", "x", "x"]
        ];
        expect(tiktaktoe.getsEmptyPositionAvailable(board)).toEqual([]);
    })
})