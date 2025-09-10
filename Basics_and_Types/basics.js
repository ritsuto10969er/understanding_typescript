function add(num1, num2, showResult, resultPhrase) {
    const result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
    return num1 + num2;
}
let num1;
num1 = 1;
const num2 = 10;
const printResult = true;
const resultPhrase = 'Result: ';
add(num1, num2, printResult, resultPhrase);
export {};
//# sourceMappingURL=basics.js.map