const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

//Create variables and set them to values in object
const currentTemp = document.querySelector('#current-temp');
currentTemp.textContent = jsObject.main.temp;

const humidity = document.querySelector('#humidity');
humidity.textContent = jsObject.main.humidity;

const highTemp = document.querySelector('#high-temp');
highTemp.textContent = jsObject.main.temp_max;
 
const windSpeed = document.querySelector('#wind-Speed');
windSpeed.textContent = jsObject.wind.speed;


//const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
//const desc = jsObject.weather[0].description;  // note how we reference the weather array
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc); 

}
);