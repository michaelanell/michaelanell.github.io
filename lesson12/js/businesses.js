const busURL = 'https://michaelanell.github.io/json/businesses.json';

fetch(busURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
});