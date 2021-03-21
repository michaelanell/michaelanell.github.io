const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// use fetch() to obtain URL
fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function (jsonObject) {
  //console.table(jsonObject);
const towns = jsonObject['towns'];
// selecting output location

towns.forEach(town => { if (town.name == "Preston"){
// creates element - does not put it on the page, just creates it in memory
let events = document.querySelector('.events')
let event = document.createElement('section');
let div = document.createElement('div');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let content1 = document.createElement('p');
let content2 = document.createElement('p');
let content3 = document.createElement('p');
let content4 = document.createElement('p');

// template literals
h2.textContent = town.name;
h3.textContent = "Events";
content1.textContent = town.events[0];
content2.textContent = town.events[1];
content3.textContent = town.events[2];
content4.textContent = town.events[3];


events.appendChild(div);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(content1);
div.appendChild(content2);
div.appendChild(content3);
div.appendChild(content4);
}; 

 });
 
});

//Output 

