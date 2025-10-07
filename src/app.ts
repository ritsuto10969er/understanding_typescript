const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(1, 5, 8, 10);
console.log(addedNumbers);

const person = {
    name: 'Ritsu',
    age: 18,
};

const { name: firstName, age } = person;

console.log(person, firstName,age);