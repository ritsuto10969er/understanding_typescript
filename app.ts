// const person:{
//     name: string,
//     age: number,
// } = 

const person = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
};

let favoriteActivities: string[];
favoriteActivities = ['cooking','touring'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}