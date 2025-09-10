function add(num1: number, num2: number) {
    return num1 + num2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (nm: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

let combinValues: (a: number, b: number) => number;
combinValues = add;
// combinValues = printResult;
console.log(combinValues(8, 8));


printResult(add(5, 6));