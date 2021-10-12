import {randomFunction} from "../src/strategy"
import {scoreOfPlayer} from "../src/strategy"

test("Testing Random number",()=>{
    let expected=40
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.4)
    let received=randomFunction();
    expect(received).toBe(expected);
})

test("Testing Random number",()=>{
    let expected=70
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.7)
    let received=randomFunction();
    expect(received).toBe(expected);
})

test("Score for Kirat using probability random number 6",()=>{
    let expected=6
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.95)
    let received=scoreOfPlayer("Kirat");
    expect(received).toBe(expected)
})

test("Score for Kirat using probability random number 5",()=>{
    let expected=5
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.86)
    let received=scoreOfPlayer("Kirat");
    expect(received).toBe(expected)
})

test("Score for Nodhi using probability random number 2",()=>{
    let expected=2
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.70)
    let received=scoreOfPlayer("Nodhi");
    expect(received).toBe(expected)
})

test("Score for Nodhi using probability random number 3",()=>{
    let expected=3
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.75)
    let received=scoreOfPlayer("Nodhi");
    expect(received).toBe(expected)
})

test("Score for Rumrah using probability random number 4",()=>{
    let expected=4
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.75)
    let received=scoreOfPlayer("Rumrah");
    expect(received).toBe(expected)
})

test("Score for Rumrah using probability random number 1",()=>{
    let expected=1
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.50)
    let received=scoreOfPlayer("Rumrah");
    expect(received).toBe(expected)
})

test("Score for Shashi using probability random number 0(dot ball)",()=>{
    let expected=0
    jest.spyOn(global.Math,"random").mockImplementation(()=>0.30)
    let received=scoreOfPlayer("Shashi");
    expect(received).toBe(expected)
})

test("Score for Shashi using probability random number 7(out)",()=>{
    let expected=7
    jest.spyOn(global.Math,"random").mockImplementation(()=>1.0)
    let received=scoreOfPlayer("Shashi");
    expect(received).toBe(expected)
})