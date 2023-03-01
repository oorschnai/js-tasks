function unique(arr) {
    let newArr = [];
    for (let i of arr){
        if (!newArr.includes(i)){
            newArr.push(i);
        }
    }
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
