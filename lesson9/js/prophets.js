const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

// use fetch() to obtain URL
fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function (jsonObject) {
  //console.table(jsonObject);
const prophets = jsonObject['prophets'];
// selecting output location
const cards = document.querySelector('.cards')
prophets.forEach(prophet => {
  // creates element - does not put it on the page, just creates it in memory
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let img = document.createElement('img');

  // template literals
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p.textContent = `${prophet.birthdate} ${prophet.birthplace}`;
  img.setAttribute('src', `${prophet.imageurl}`);
  

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(img);
  cards.appendChild(card);
 });
});

//Output 

