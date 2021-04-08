const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e9f9a8e29e1d97935134cd5f161d156e&units=imperial';

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

//Use filter method to collect only elements that have the "18:00:00" value

let days = jsObject.list.filter(function(element){
    return element.dt_txt.includes("18:00:00");
});

let position = 0;
let i = 0;
//console.log(days);

// Create a for loop to run through the array by index # and collect specified values

for (i = 0; i <days.length; i++) {
    let date = new Date(days[i].dt_txt);

    // Retrive day
    document.getElementById("title" + (position + 1)).textContent =
        daynames[date.getDay()];

     //Get temperature
    document.getElementById("day" + (position + 1)).textContent =
       days[i].main.temp + " °F";

    // Get Image

    //let imageURL ='https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
    let image = document.getElementById("imagesrc"+ (position + 1))
    image.setAttribute('src', 'https://openweathermap.org/img/w/' + days[position].weather[0].icon + '.png');
    position++;   
}

});