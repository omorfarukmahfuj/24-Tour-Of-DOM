const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Paris';
placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const bookList = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Reading List';
bookList.appendChild(h1);



const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'The First 90 Days';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Blue Ocean Strategy';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Dealing with Difficult People';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Nine Lies About Work';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Playing to Win';
ul.appendChild(li5);

bookList.appendChild(ul);
mainContainer.appendChild(bookList);

// Set innerHTML Directly

const movieList = document.createElement('section');
movieList.innerHTML = `
<h1>Movies to Watch</h1>
      <ul>
        <li>Avatar The Last Airbender</li>
        <li>Money Heist</li>
        <li>ONE PIECE</li>
        <li>Extraction 2</li>
      </ul>
`

mainContainer.appendChild(movieList);