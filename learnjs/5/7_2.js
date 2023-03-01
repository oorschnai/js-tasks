function aclean(arr) {
    let map = new Map();
    for(let i of arr){
        let word = i.toLowerCase().split('').sort().join('');
        map.set(word, i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
