var person = {
    name: 'Ritsu',
    age: 21,
    hobbies: ['soccer', 'moter-bike'],
    role: [2, 'author']
};
var favoriteActivities;
favoriteActivities = ['cooking', 'touring'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
