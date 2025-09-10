function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-nunmber") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-nunmber");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-nunmber");
console.log(combinedStringAges);
var combinedNames = combine("Ritsuto", "Kosaka", "as-string");
console.log(combinedNames);
