const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
//console.log(jsObject);

const day1 = document.querySelector('#day1');
day1.textContent = jsObject.list[0].main.temp;   

const day2 = document.querySelector('#day2');
day2.textContent = jsObject.list[8].main.temp;

const day3 = document.querySelector('#day3');
day3.textContent = jsObject.list[16].main.temp;

const day4 = document.querySelector('#day4');
day4.textContent = jsObject.list[24].main.temp;

const day5 = document.querySelector('#day5');
day5.textContent = jsObject.list[30].main.temp;
});