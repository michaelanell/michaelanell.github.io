const apiURL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.514114&lon=-112.0330&exclude={part}&appid=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';

fetch(apiURL2)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let i =  0;
let position = 0;

let day = jsObject.daily;
console.log(day);

for (i = 0; i < day.length; i++) {
let date = new Date(i);

document.getElementById("title" + (position + 1)).textContent =
daynames[date.getDay()];

//console.log(day);
 document.getElementById("day" + (position + 1)).textContent = day[i].temp.day + " °F";
      
       position++; 
}

let message = jsObject.alerts;
let messageContent = jsObject.alerts.description;

if (message !== "") {
    alert(messgeContent);
}
});