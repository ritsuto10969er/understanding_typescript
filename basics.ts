function add(num1: number, num2:number, showResult:boolean, resultPhrase:string) {
    const result = num1 + num2;

    if(showResult) {
        console.log(resultPhrase + result)
    } else {
        return result;
    }
    return num1 + num2;
}

let num1: number
num1 = 1;
const num2 = 10;
const printResult = true;
const resultPhrase = 'Result: '

add(num1, num2, printResult, resultPhrase);

