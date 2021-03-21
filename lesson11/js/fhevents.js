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

towns.forEach(town => { if (town.name == "Fish Haven"){
// creates element - does not put it on the page, just creates it in memory
let events = document.querySelector('.events')
let event = document.createElement('section');
let div = document.createElement('div');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let content = document.createElement('p');

// template literals
h2.textContent = `${town.name}`;
h3.textContent = "Events";
content.textContent = `${town.events} `;


events.appendChild(div);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(content);
}; 

 });
 
});

//Output 

