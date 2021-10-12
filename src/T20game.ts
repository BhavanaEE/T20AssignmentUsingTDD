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

export function swapPlayers(batsMan:string,runner:string){
    [batsMan,runner]=[runner,batsMan]
    return [batsMan,runner]
}

function playerInitialization(){
    for(let i=0;i<4;i++){
        playerProperties[playersName[i]]={
            score:0,
            noOfBallsPlayed:0,
            out:false,
        };
    }

}

