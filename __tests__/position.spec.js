const { expect } = require("@jest/globals");

const Position = require("../Position.js").Position

describe("Position", ()=> {
    
    test("it will represent a position on the board", () => {
        let y = 2;
        let x = 1;
        let position = new Position(y,x);
        
        expect(position.y).toEqual(y);
        expect(position.x).toEqual(x);
    } )
   
})