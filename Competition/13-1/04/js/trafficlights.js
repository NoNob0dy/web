var redLight = document.getElementById('redlight');
var defLight = document.getElementById('defaultlight');
var greenLight = document.getElementById('greenlight');
function red() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            defLight.style.display = "none";
            redLight.style.display = "inline-block";
            resolve();
        }, 3000);
    });
}

function green() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            redLight.style.display = "none";
            greenLight.style.display = "inline-block";
            resolve();
        }, 3000);
    });
}

async function trafficlights() {
    await red();
    await green();
}

trafficlights();
