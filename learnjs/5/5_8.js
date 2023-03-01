let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(x => ({'id': x.id, 'fullName': x.name + ' ' + x.surname}));

console.log( usersMapped[0].id )
console.log( usersMapped[0].fullName )
