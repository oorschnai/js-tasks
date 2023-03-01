function getSecondsToday(){
    let now = new Date();
    return Math.round(
        (now - (new Date(now.getFullYear(), now.getMonth(), now.getDate()))) / 1000);
}

console.log(getSecondsToday())
