function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-nunmber" | "as-string"
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-nunmber"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-nunmber");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-nunmber");
console.log(combinedStringAges);

const combinedNames = combine("Ritsuto", "Kosaka", "as-string");
console.log(combinedNames);
