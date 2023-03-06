
function getweather() {
    let data = $.getJSON('./js/weather.json').responseJSON;
    console.log(data);
    data.unshift(data.pop());
    for (let i = 0; i < 7; i++) {
        $(`.item:nth-of-type(${i}) img`).src(data[i].weather_icon);
        $(`.item-mess:nth-of-type(${i}) div:nth-of-type(1)`).text(data[i].weather);
        $(`.item-mess:nth-of-type(${i}) div:nth-of-type(2)`).text(data[i].temperature);
        $(`.item-mess:nth-of-type(${i}) div:nth-of-type(3)`).text(data[i].winp);
        $(`.item-mess:nth-of-type(${i}) span:nth-of-type(1)`).text(data[i].days);
        $(`.item-mess:nth-of-type(${i}) span:nth-of-type(2)`).text(data[i].weak);
    }
}

getweather();