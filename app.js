function add(num1, num2, showResult, resultPhrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
    return num1 + num2;
}
var num1;
num1 = 1;
var num2 = 10;
var printResult = true;
var resultPhrase = 'Result: ';
add(num1, num2, printResult, resultPhrase);
