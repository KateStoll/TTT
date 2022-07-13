const { expect } = require("@jest/globals");

const Position = require("../Position.js").Position

describe("Position", ()=> {
    
    test("it will represent a position on the board", () => {
        let x = 2;
        let y = 1;
        let position = new Position(x,y);
        
        expect(position.x).toEqual(x);
        expect(position.y).toEqual(y);
    } )
   
})