function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    } else if (diff < 60 * 1000) {
        return `${Math.floor(diff / 1000)} сек. назад`;
    } else if (diff < 3600 * 1000) {
        return `${Math.floor(diff / 60 / 1000)} мин. назад`;
    } else {
        let d = ['0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes(),].map(item => item.slice(-2));
        return d.slice(0, 3).join('.') + " " + d.slice(3).join(":");
    }
}

console.log(formatDate(new Date(new Date - 86400 * 1000)))
