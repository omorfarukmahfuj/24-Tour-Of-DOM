// getElementByTagName
const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
  console.log(li.innerText);
}

// getElementById
let placesTitle = document.getElementById('places-title');
placesTitle.innerText = 'My Tour List';
console.log(placesTitle);

// getElementsByClassName
const places = document.getElementsByClassName('important-places');
for (const place of places) {
  console.log(place.innerText);
}

// querySelectorAll
const someLi = document.querySelectorAll('#skills-container li');
for (li of someLi) {
  console.log(li.innerText);
}

// querySelector
const singleLi = document.querySelector('#skills-container li');
console.log(singleLi.innerText);