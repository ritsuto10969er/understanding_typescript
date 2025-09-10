// const person: {
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number, string]
// } = {
//     name: 'Ritsu',
//     age: 21,
//     hobbies: ['soccer', 'moter-bike'],
//     role: [2, 'author']
// };

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['cooking','touring'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}