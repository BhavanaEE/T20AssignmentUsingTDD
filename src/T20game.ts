export function swapPlayers(batsman:string,runner:string):string[]{
    [batsman,runner]=[runner,batsman]
    return [batsman,runner]
}