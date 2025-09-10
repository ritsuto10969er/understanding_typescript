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
var person = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['cooking', 'touring'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}
