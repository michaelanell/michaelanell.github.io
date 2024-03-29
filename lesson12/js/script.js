function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

  const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.514114&lon=-112.0330&exclude={part}&appid=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';
  
  fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

//Create variables and set them to values in object
const currentTemp = document.querySelector('#current-temp');
currentTemp.textContent = jsObject.current.temp;

const currentCondition = document.querySelector('#current-condition');
currentCondition.textContent = jsObject.current.weather[0].description;

const humidity = document.querySelector('#humidity');
humidity.textContent = jsObject.current.humidity;
});

function date(){
  let daynames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ];
  
  let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
  ];
  
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = month[d.getMonth()];
  let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();
  document.getElementById("currentdate").textContent = fulldate; 
  }
  var currentdate = setInterval(date, onload);
  
  function lastUpdate(){
      let update = document.lastModified;
      document.getElementById("lastModified").innerHTML = " " + update;
  }
  
  var modified = setInterval(lastUpdate, onload);


