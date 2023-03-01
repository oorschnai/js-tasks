let dayNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

function getWeekDay(date){
    return dayNames[date.getDay()];
}
