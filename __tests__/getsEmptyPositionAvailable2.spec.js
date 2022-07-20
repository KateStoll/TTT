const { test, expect } = require("@jest/globals");
const { Position } = require("../Position.js");
const tiktaktoe = require("../tiktaktoe.js")

describe("getsEmptyPositionsAvailable", ()=> {

    test("will return an array of positions availabe when there is an empty space", () => {
        
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]; 
        expect(tiktaktoe.getsEmptyPositionsAvailable(board)).toEqual([new Position(0,0),new Position(0,1),new Position(0,2),new Position(1,0),new Position(1,1),new Position(1,2),new Position(2,0),new Position(2,1),new Position(2,2)]);
    })

    test("will return an array of positions availabe when there is an empty space", () => {
        
        let board = [
            ["x", "", ""],
            ["", "x", ""],
            ["", "", "x"]
        ];
        expect(tiktaktoe.getsEmptyPositionsAvailable(board)).toEqual([new Position(0,1),new Position(0,2),new Position(1,0),new Position(1,2),new Position(2,0),new Position(2,1)]);
    })

    test("will return an array of positions availabe when there is an empty space", () => {
        
        let board = [
            ["x", "x", "x"],
            ["x", "", "x"],
            ["x", "x", "x"]
        ];
        expect(tiktaktoe.getsEmptyPositionsAvailable(board)).toEqual([new Position(1,1)]);
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
