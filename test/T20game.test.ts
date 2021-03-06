import {setPlayerPropertyBasedOnScore, startGame, swapPlayers} from "../src/T20game"
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

it("Checking score of player when player hits six before and after a ball",()=>{
    let playerProperties=playerInitialization();
    let expected=6
    setPlayerPropertyBasedOnScore("Nodhi",6);
    let received=playerProperties["Nodhi"].score;
    expect(received).toBe(expected);
})

test("If Nodhi serves 4 balls,then count of balls(4) should be added to Nodhi",()=>{
    let playerProperties=playerInitialization();
    let expected=4
    setPlayerPropertyBasedOnScore("Nodhi",6);
    setPlayerPropertyBasedOnScore("Nodhi",2);
    setPlayerPropertyBasedOnScore("Nodhi",2);
    setPlayerPropertyBasedOnScore("Nodhi",4);
    let received=playerProperties["Nodhi"].noOfBallsPlayed;
    expect(received).toBe(expected);
})

it("Checking number of balls played by Kirat before and after the match",()=>{
    let playerProperties=playerInitialization();
    let expected=playerProperties["Kirat"].noOfBallsPlayed
    startGame();
    let received=playerProperties["Kirat"].noOfBallsPlayed
    expect(received).not.toBe(expected);
})