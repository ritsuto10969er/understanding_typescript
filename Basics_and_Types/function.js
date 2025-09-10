function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combinValues;
combinValues = add;
// combinValues = printResult;
console.log(combinValues(8, 8));
printResult(add(5, 6));
export {};
//# sourceMappingURL=function.js.map