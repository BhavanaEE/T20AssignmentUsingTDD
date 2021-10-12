import {swapPlayers} from "../src/T20game"
test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","kirat");
    let expected=["kirat","Nodhi"]
    expect(received).toEqual(expected)
})