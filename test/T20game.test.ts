import {swapPlayers} from "../src/T20game"
import {randomFunction} from "../src/strategy"

test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","kirat");
    let expected=["kirat","Nodhi"]
    expect(received).toEqual(expected)
})

test("Runs for a player",()=>{
    let expected=40
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.4)
    let received=randomFunction();
    expect(received).toBe(expected);
})