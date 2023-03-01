function camelize(str){
    let newStr = str.split('-');
    newStr = newStr[0] + newStr.splice(1)
        .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('');
    return newStr;
}

console.log(camelize("list-style-image"))
