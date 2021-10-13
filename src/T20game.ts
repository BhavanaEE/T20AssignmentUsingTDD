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

function scoreBoard(playerProperties:playerProperty,playersName:string[]){
    for(let i=0;i<4;i++)
    {
        let nameOfPlayer:string=playersName[i];
        let score:number=playerProperties[nameOfPlayer].score;
        let balls:number=playerProperties[nameOfPlayer].noOfBallsPlayed;
        if(playerProperties[nameOfPlayer].out==false){
            if(balls===0)
            console.log(`${nameOfPlayer} - ${score} (${balls} balls)`)
            else
            console.log(`${nameOfPlayer} - ${score}* (${balls} balls)`)
        }
        else        
        console.log(`${nameOfPlayer} - ${score} (${balls} balls)`)
    }
}

function resultOfMatch(hasWon:boolean,over:number,ballAtParticularOver:number,targetScore:number,teamScore:number){
    if(hasWon && ballAtParticularOver)
        {
            let ballsRemaining:number=24-(((over-1)*6)+ballAtParticularOver)
            if(ballsRemaining<=1)
            console.log(`Bengaluru won by ${4-wickets} wickets and ${ballsRemaining} ball remaining`)
            else
            console.log(`Bengaluru won by ${4-wickets} wickets and ${ballsRemaining} balls remaining`)
            scoreBoard(playerProperties,playersName);
            return;
        }
        if(wickets===3 && !hasWon){
            if((targetScore-teamScore)===0){
                console.log("Draw Match");
                scoreBoard(playerProperties,playersName);
                return;
            }
            console.log(`Chennai has won by ${(targetScore-teamScore)} runs`);
            scoreBoard(playerProperties,playersName);
            return;
        }
    if((targetScore-teamScore)===0){
        console.log("Draw Match");
    }
    else
    console.log(`Chennai has won by ${(targetScore-teamScore)} runs`);
    scoreBoard(playerProperties,playersName);
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
    resultOfMatch(hasWon,over,ballAtParticularOver,targetScore,teamScore)
}