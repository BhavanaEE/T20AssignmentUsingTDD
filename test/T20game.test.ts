import {swapPlayers} from "../src/T20game"
import {isOutOrNot} from "../src/T20game"
import {playerInitialization} from "../src/T20game"

test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","Kirat");
    let expected=["Kirat","Nodhi"]
    expect(received).toEqual(expected)
})

it("Function has to detect whether player is out or not",()=>{
    let expected=true
    playerInitialization();
    let received=isOutOrNot("Rumrah",7)
    expect(received).toBe(expected)
})