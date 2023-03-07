
function getweather() {
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
}

getweather();