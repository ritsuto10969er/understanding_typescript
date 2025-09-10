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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['cooking', 'touring'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}
export {};
//# sourceMappingURL=objs-array-enum.js.map