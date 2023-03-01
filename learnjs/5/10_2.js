function topSalary(salaries){
    let max = {name: null, salary: 0}
    for (let [name, sal] of Object.entries(salaries)){
        if (salaries[name] > max.salary){
            [max.name, max.salary] = [name, sal]
        }
    }
    return max['name'];
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary({}))
