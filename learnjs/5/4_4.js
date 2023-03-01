function sumInput(){
    let num = 0;
    let sum = 0;
    while(1){
        num = prompt("enter number:", "");
        if (num === ""){
            return sum;
        }
        sum += +num;
    }
}
