const { test, expect } = require("@jest/globals")
const tiktaktoe = require("../tiktaktoe.js")

describe("hasEmptySpaceOnGameboard", ()=> {

    test("will return true when there is an empty space", () => {
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        expect(tiktaktoe.hasEmptySpaceOnGameboard(board)).toEqual(true);
    })
    
    test("will return false when there is no empty space", () => {
        let board = [
            ["x", "x", "x"],
            ["x", "x", "x"],
            ["x", "x", "x"]
        ];
        expect(tiktaktoe.hasEmptySpaceOnGameboard(board)).toEqual(false);
    })
})