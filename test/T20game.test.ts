import {setPlayerPropertyBasedOnScore, swapPlayers} from "../src/T20game"
import {playerInitialization} from "../src/T20game"

test("Swapping players",()=>{
    let received=swapPlayers("Nodhi","Kirat");
    let expected=["Kirat","Nodhi"]
    expect(received).toEqual(expected)
})

describe("Player Properties",()=>{
    it("Checking whether player is out or not",()=>{
        let playerProperties=playerInitialization();
        let expected=true;
        setPlayerPropertyBasedOnScore("Kirat",7);
        let received=playerProperties["Kirat"].out
        expect(received).toBe(expected)
    })
})