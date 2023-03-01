let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj){
    for (let k in obj){
        if (typeof obj[k] == 'number'){
            obj[k] *= 2;
        }
    }
}
multiplyNumeric(menu)

console.log(menu)
