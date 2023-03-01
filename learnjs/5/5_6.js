function Calculator(){
    this.operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.addMethod = function (operator, fun){
        this.operators[operator] = fun;
    }

    this.calculate = function (str) {
        let arr = str.split(' ');
        let a = +arr[0];
        let op = arr[1];
        let b = +arr[2];
        return this.operators[op](a, b);
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") )
