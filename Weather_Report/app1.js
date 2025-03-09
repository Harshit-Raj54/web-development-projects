let input = document.querySelector("input");
let tempdisp = document.querySelector("#a");
let tempdisp1 = document.querySelector("#b");
let tempdisp2 = document.querySelector("#c");
let tempdisp3 = document.querySelector("#d");
let tempdisp4 = document.querySelector("#e");
let tempdisp5 = document.querySelector("#f");
let dispname = document.querySelector("p");
let hourhead = document.querySelector(".hour_head");

//display temperature hourly
let a1 = document.querySelector("#a1");
let b1 = document.querySelector("#b1");
let c1 = document.querySelector("#c1");
let d1 = document.querySelector("#d1");
let e1 = document.querySelector("#e1");
let f1 = document.querySelector("#f1");
let g1 = document.querySelector("#g1");
let h1 = document.querySelector("#h1");
let i1 = document.querySelector("#i1");
let j1 = document.querySelector("#j1");
let k1 = document.querySelector("#k1");
let l1 = document.querySelector("#l1");
let m1 = document.querySelector("#m1");
let n1 = document.querySelector("#n1");
let o1 = document.querySelector("#o1");
let p1 = document.querySelector("#p1");
let q1 = document.querySelector("#q1");
let r1 = document.querySelector("#r1");
let s1 = document.querySelector("#s1");
let t1 = document.querySelector("#t1");
let u1 = document.querySelector("#u1");
let v1 = document.querySelector("#v1");
let w1 = document.querySelector("#w1");
let x1 = document.querySelector("#x1");

let span1 = document.querySelector("span");

let url1;
let city;
let btn = document.querySelector("#btn");
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    city = input.value;
    main();
});

const main = () => {
    
    url1 = `https://geocoding-api.open-meteo.com/v1/search?name=${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}&count=10&language=en&format=json`;
    start2();
};

let url;
const start2 = async () => {
    try {

        span1.innerText = "";

        let response1 = await fetch(url1);

        if (!response1.ok) {
            throw new Error("City not found or network problem")
        }

        data1 = await response1.json();

        if (data1.results.length === 0) {
            alert("check connection");
        }

        hourhead.innerText = `Weather in the last 24 hours in the ${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}`
        dispname.innerText = `WEATHER FOR ${city.toUpperCase()}`;

        let lat = data1.results[0].latitude;
        let lon = data1.results[0].longitude;

        url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,wind_speed_10m_max`;
        start();
    } catch (error) {
        span1.innerText = "City not found or check your Internet Connection, Please try again";
    }
}

let data;
const start = async () => {
    let response = await fetch(url);
    data = await response.json();
    tempdisp.innerText = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`;
    tempdisp1.innerHTML = `Temperatures is ${data.current.temperature_2m} ${data.current_units.temperature_2m}<br>Min Temperatues is ${data.daily.temperature_2m_min[0]} ${data.current_units.temperature_2m}<br>Max Temperatures is ${data.daily.temperature_2m_max[0]} ${data.current_units.temperature_2m}`

    let wet_code = data.daily.weather_code[1];
    if (wet_code == 0) {
        tempdisp2.innerText = "Clear sky";
    } else if (wet_code == 1 || wet_code == 2 || wet_code == 3) {
        tempdisp2.innerText = "Mainly clear, partly cloudy, and overcast";
    } else {
        tempdisp2.innerText = "Fog and depositing rime fog";
    }

    tempdisp3.innerHTML = `Humidity is ${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}<br>Precipitation is ${data.current.precipitation} ${data.current_units.precipitation}<br>Sunrise at ${data.daily.sunrise[0]}<br>Sunset at ${data.daily.sunset[0]}<br>Rain is ${data.current.rain} ${data.current_units.rain}`;

    tempdisp4.innerText = `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;
    tempdisp5.innerHTML = `Wind Direction is ${data.current.wind_direction_10m} ${data.current_units.wind_direction_10m}<br>Max Wind Speed is ${data.daily.wind_speed_10m_max[0]} ${data.daily_units.wind_speed_10m_max}<br>Wind Gusts is ${data.current.wind_gusts_10m} ${data.current_units.wind_gusts_10m}`;

    a1.innerText = data.hourly.temperature_2m[0];
    b1.innerText = data.hourly.temperature_2m[1];
    c1.innerText = data.hourly.temperature_2m[2];
    d1.innerText = data.hourly.temperature_2m[3];
    e1.innerText = data.hourly.temperature_2m[4];
    f1.innerText = data.hourly.temperature_2m[5];
    g1.innerText = data.hourly.temperature_2m[6];
    h1.innerText = data.hourly.temperature_2m[7];
    i1.innerText = data.hourly.temperature_2m[8];
    j1.innerText = data.hourly.temperature_2m[9];
    k1.innerText = data.hourly.temperature_2m[10];
    l1.innerText = data.hourly.temperature_2m[11];
    m1.innerText = data.hourly.temperature_2m[12];
    n1.innerText = data.hourly.temperature_2m[13];
    o1.innerText = data.hourly.temperature_2m[14];
    p1.innerText = data.hourly.temperature_2m[15];
    q1.innerText = data.hourly.temperature_2m[16];
    r1.innerText = data.hourly.temperature_2m[17];
    s1.innerText = data.hourly.temperature_2m[18];
    t1.innerText = data.hourly.temperature_2m[19];
    u1.innerText = data.hourly.temperature_2m[20];
    v1.innerText = data.hourly.temperature_2m[21];
    w1.innerText = data.hourly.temperature_2m[22];
    x1.innerText = data.hourly.temperature_2m[23];
}

window.addEventListener("load", () => {
    city = "Bhubaneswar";
    main();
})

