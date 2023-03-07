
function getweather() {
<<<<<<< HEAD
    $.getJSON('./js/weather.json', (data) => {
        let res = data.result;
        for (let i = 1; i <= 7; i++) {
            $(`.item:nth-of-type(${i}) img`).attr("src", res[i - 1].weather_icon.slice(3));
            $(`.item:nth-of-type(${i}) div div:nth-of-type(1)`).text(res[i - 1].weather);
            $(`.item:nth-of-type(${i}) div div:nth-of-type(2)`).text(res[i - 1].temperature);
            $(`.item:nth-of-type(${i}) div div:nth-of-type(3)`).text(res[i - 1].winp);
            $(`.item:nth-of-type(${i}) div span:nth-of-type(1)`).text(res[i - 1].days);
            $(`.item:nth-of-type(${i}) div span:nth-of-type(2)`).text(res[i - 1].week);
        }

    });
=======
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
>>>>>>> bd545d0c982368f185922076aa4c310baccee200
}

getweather();