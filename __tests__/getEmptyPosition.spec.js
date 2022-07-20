const jse = require('jest-extended')
expect.extend(jse)

const tiktaktoe = require("../tiktaktoe.js")

describe("getEmptyPosition", ()=> {
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })
    test("it will return a random empty space in a 2d array", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
        let board = [
            ["", "x", ""],
            ["", "x", ""],
            ["", "x", ""]
        ];
        let emptySpace = tiktaktoe.getEmptyPosition(board)
        console.log("::::::::", emptySpace)
        expect(emptySpace["y"]).toBeOneOf([0,1,2])
        expect(emptySpace["x"]).toBeOneOf([0,2])
        expect(Math.random).toHaveBeenCalled();
    } )
    
    test("it will return empty array when board is full", () => {
        let board = [
            ["x", "x", "x"],
            ["x", "x", "x"],
            ["x", "x", "x"]
        ];
        expect(tiktaktoe.getEmptyPosition(board)).toEqual([])
    } )
}) 