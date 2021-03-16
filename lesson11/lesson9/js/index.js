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
const cards = document.querySelector('.cards')
towns.forEach(town => { if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"){
// creates element - does not put it on the page, just creates it in memory
let card = document.createElement('section');
let div = document.createElement('div');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let year = document.createElement('p');
let population = document.createElement('p');
let averageRain = document.createElement('p');
let img = document.createElement('img');


// template literals
h2.textContent = `${town.name}`;
h3.textContent = `${town.motto}`;
year.textContent = "Year Founded:" + " " + `${town.yearFounded} ${town.currentPopulation} ${town.averageRainfall}`;
population.textContent = "Population:" + " " + `${town.currentPopulation} ${town.averageRainfall}`;
averageRain.textContent = "Average Rainfall:" + " " + `${town.averageRainfall}`;
img.setAttribute('src', `${town.photo}`);

card.appendChild(div);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(year);
div.appendChild(population);
div.appendChild(averageRain);
card.appendChild(img);
cards.appendChild(card);
};
  
 });
});

//Output 

