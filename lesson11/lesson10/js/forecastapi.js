const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

const day1 = document.querySelector('#day1');
day1.textContent = jsObject.list[0].main.temp;   

const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.list[0].weather[0].description;  
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon1').setAttribute('src', imagesrc1);  
document.getElementById('icon1').setAttribute('alt', desc);

const day2 = document.querySelector('#day2');
day2.textContent = jsObject.list[8].main.temp;

const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[8].weather[0].icon + '.png';  // note the concatenation
const desc2 = jsObject.list[8].weather[0].description; 
document.getElementById('icon2').setAttribute('src', imagesrc2);  
document.getElementById('icon2').setAttribute('alt', desc2);

const day3 = document.querySelector('#day3');
day3.textContent = jsObject.list[16].main.temp;

const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[16].weather[0].icon + '.png';  // note the concatenation
const desc3 = jsObject.list[16].weather[0].description; 
document.getElementById('icon3').setAttribute('src', imagesrc3);  
document.getElementById('icon3').setAttribute('alt', desc3);

const day4 = document.querySelector('#day4');
day4.textContent = jsObject.list[24].main.temp;

const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[24].weather[0].icon + '.png';  // note the concatenation
const desc4 = jsObject.list[24].weather[0].description; 
document.getElementById('icon4').setAttribute('src', imagesrc4);  
document.getElementById('icon4').setAttribute('alt', desc4);

const day5 = document.querySelector('#day5');
day5.textContent = jsObject.list[30].main.temp;

const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';  // note the concatenation
const desc5 = jsObject.list[30].weather[0].description; 
document.getElementById('icon5').setAttribute('src', imagesrc5);  
document.getElementById('icon5').setAttribute('alt', desc5);
});