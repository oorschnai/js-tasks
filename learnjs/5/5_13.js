function groupById(arr){
    return arr.reduce(function (newArr, item) {
        newArr[item.id] = item;
        return newArr;
        }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById)
