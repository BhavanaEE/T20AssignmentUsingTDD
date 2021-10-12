import {swapPlayers} from "../src/T20game"
import {randomFunction} from "../src/strategy"
import {scoreOfPlayer} from "../src/strategy"

test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","Kirat");
    let expected=["Kirat","Nodhi"]
    expect(received).toEqual(expected)
})

test("Testing Random number",()=>{
    let expected=40
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.4)
    let received=randomFunction();
    expect(received).toBe(expected);
})

test("Score for player using probability random number",()=>{
    let expected=6
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.95)
    let received=scoreOfPlayer("Kirat");
    expect(received).toBe(expected)

})