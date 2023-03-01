function copySorted(arr){
    let newArr = arr.map(x => x).sort();
    return newArr;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log( sorted, arr)
