let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
console.log(json);

let user2 = JSON.parse(json);
console.log(user2);
