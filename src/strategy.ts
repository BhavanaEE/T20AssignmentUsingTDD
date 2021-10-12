const probOfEachPlayer:number[][]=[[5,30,25,10,15,1,9,5],[10,40,20,5,10,1,4,10],[20,30,15,5,5,1,4,20],[30,25,5,0,5,1,4,30]];
const playersName=["Kirat","Nodhi","Rumrah","Shashi"];

export function randomFunction(){
    return Math.floor(Math.random()*(100-0+1)+0);
}

function batsmanIndexGenerator(batsMan:string){
    for(let i=0;i<4;i++){
        if(batsMan==playersName[i])
        return i;
    }
}

export function scoreOfPlayer(batsMan:string){
    let indexOfPlayerName:number=batsmanIndexGenerator(batsMan) as number;
    let randomNumberGen:number=randomFunction(),sumOfProbabilities:number=0;
    for(let j=0;j<8;j++){
        sumOfProbabilities+=probOfEachPlayer[indexOfPlayerName][j]
        if(sumOfProbabilities===100)
        return 7;
        if(sumOfProbabilities>=randomNumberGen)
        return j;
    } 
}
