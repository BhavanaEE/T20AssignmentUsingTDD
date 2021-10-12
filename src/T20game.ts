import {scoreOfPlayer} from "../src/strategy"
import {batsmanIndexGenerator} from "../src/strategy"

let playersName:string[]=["Kirat","Nodhi","Rumrah","shashi"];
let playerProperties:{
    [playerName:string]:{
        score:number,
        noOfBallsPlayed:number,
        out:boolean
    }

}={};
let wickets:number=0,teamScore:number=0;
let batsMan:string=playersName[0];
let runner:string=playersName[1];

export function swapPlayers(batsMan:string,runner:string){
    [batsMan,runner]=[runner,batsMan]
    return [batsMan,runner]
}

export function playerInitialization(){
    for(let i=0;i<4;i++){
        playerProperties[playersName[i]]={
            score:0,
            noOfBallsPlayed:0,
            out:false,
        };
    }
    return playerProperties
}

export function setPlayerPropertyBasedOnScore(batsMan:string,scoreOutcome:number){
    if(scoreOutcome === 7){
        playerProperties[batsMan].out=true;
        playerProperties[batsMan].noOfBallsPlayed++;
        wickets++;
        batsMan=playersName[wickets+1]; 
    }
    else{
        playerProperties[batsMan].score+=scoreOutcome;
        playerProperties[batsMan].noOfBallsPlayed++;
        teamScore+=scoreOutcome;
    }
}

export function startGame(){
    let over:number,ballsInEachOver:number,targetScore:number=40,scoreOutcome:number;
    playerInitialization();
    for(over=0;over<4;over++){
        for(ballsInEachOver=1;ballsInEachOver<=6;ballsInEachOver++){
            scoreOutcome=scoreOfPlayer(batsMan) as number;
            setPlayerPropertyBasedOnScore(batsMan,scoreOutcome);
            if(scoreOutcome !== 7 && scoreOutcome%2 === 1){
                [batsMan,runner]=swapPlayers(runner,batsMan);
            }
        }
        [batsMan,runner]=swapPlayers(runner,batsMan);
    }
}