import {scoreOfPlayer} from "../src/strategy"
import {batsmanIndexGenerator} from "../src/strategy"

let playersName:string[]=["Kirat","Nodhi","Rumrah","Shashi"];
type playerProperty={
    [playerName:string]:{
        score:number,
        noOfBallsPlayed:number,
        out:boolean
    }

}
let playerProperties:playerProperty={};
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
    }
    else{
        playerProperties[batsMan].score+=scoreOutcome;
        playerProperties[batsMan].noOfBallsPlayed++;
        teamScore+=scoreOutcome;
    }
}

export function startGame(){
    let over:number,ballsInEachOver:number,ballAtParticularOver:number=0,targetScore:number=40,scoreOutcome:number;
    let hasWon=false;
    playerInitialization();
    for(over=0;over<4 && !hasWon && wickets<3;over++){
        console.log(4-over+" overs left. "+(targetScore-teamScore)+" runs to win-----------------------")
        for(ballsInEachOver=1;ballsInEachOver<=6;ballsInEachOver++){
            scoreOutcome=scoreOfPlayer(batsMan) as number;
            setPlayerPropertyBasedOnScore(batsMan,scoreOutcome);
            if(scoreOutcome===7){
                console.log(`${over} . ${ballsInEachOver} ${batsMan} has lost wicket`);
                wickets++;
                batsMan=playersName[wickets+1];
            }
            else if(scoreOutcome===1 || scoreOutcome===0)
            console.log(`${over} . ${ballsInEachOver} ${batsMan} scores ${scoreOutcome} run`);
            else
                console.log(`${over} . ${ballsInEachOver} ${batsMan} scores ${scoreOutcome} runs`);
            if(wickets===3){
                break;
            }
            if(teamScore>targetScore){
                hasWon=true;
                ballAtParticularOver=ballsInEachOver;
                break;
            }
            if(scoreOutcome !== 7 && scoreOutcome%2 === 1){
                [batsMan,runner]=swapPlayers(batsMan,runner);
            }
        }
        [batsMan,runner]=swapPlayers(batsMan,runner);
    }
}