const date = new Date();
const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
const monthes = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

document.getElementsByClassName('footer__date')[0].innerHTML = `
    ${date.getHours()}:${date.getMinutes()} ${days[date.getDay()]} ${date.getDate()} ${monthes[date.getMonth()]} ${date.getFullYear()} г.
`;