const person: {
    name:string,
    age:number,
    hobbies:string[],
    role:[number, string]
} = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['cooking','touring'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}