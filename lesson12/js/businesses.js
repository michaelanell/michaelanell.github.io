const busURL = 'https://michaelanell.github.io/json/businesses.json';

fetch(busURL)
.then(function(response) {
  return response.json();
})


.then(function (jsonObject) {
//console.table(jsonObject);
const info = jsonObject['business'];
// selecting output location
const cards = document.querySelector('#business-cards')

info.forEach(info => {
// creates element - does not put it on the page, just creates it in memory
let businessDiv = document.createElement('div');
let businessName = document.createElement('h2');
let address = document.createElement('p');
let website = document.createElement('p');
let phoneNumber = document.createElement('p');
let emailAddress = document.createElement('p');
let hours = document.createElement('p');
let img = document.createElement('img');

// template literals
businessName.textContent = `${info.businessname}`;
address.textContent = `${info.address}`;
website.textContent = `${info.website}`;
phoneNumber.textContent = `${info.phonenumber}`;
emailAddress.textContent = `${info.emailaddress}`;
hours.textContent = `${info.hours}`;
img.setAttribute('src', `${info.imageurl}`);

// append new elements to to output location

cards.appendChild(businessDiv);
businessDiv.appendChild(businessName);
businessDiv.appendChild(address);
businessDiv.appendChild(website);
businessDiv.appendChild(phoneNumber);
businessDiv.appendChild(hours);
businessDiv.appendChild(img);
});
});

