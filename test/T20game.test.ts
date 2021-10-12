import {swapPlayers} from "../src/T20game"

test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","Kirat");
    let expected=["Kirat","Nodhi"]
    expect(received).toEqual(expected)
})