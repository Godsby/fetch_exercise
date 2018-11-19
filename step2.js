
document.addEventListener('DOMContentLoaded', () => {

  let film = document.querySelector('#film');
  let films = [];
  fetchAndAppend();

  film.addEventListener('change', (event) => {
    event.preventDefault();
    removeAndDisplay();
  });
});

const fetchAndAppend = () => {
  fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    if(!response.ok) {
      throw new Error('Connection Error!');
    }
    return response.json();
  })
  .then(parsedRes => {
    films = parsedRes;
    let select = document.querySelector('select');
    if (!parsedRes.ok) {
      let opt = document.createElement('option');
      films.forEach(film => {
        opt.innerText = films.title;
        select.appendChild(opt);
      });
    }
  }).catch(err =>console.log(err));
};

const removeAndDisplay = (film) => {
  let select = document.querySelector('select');
  let userChoice;
  if(userChoice === select.value) {
    let ul = document.querySelector('ul');
    ul.remove();
    display(film);
  } else {
    userChoice = select.value;
  }
  return films[select.value];
}

const display = (film) => {
  let div = document.querySelector('div');
  let ul = document.createElement('ul');
  let keysArr = ['Title', 'Director', 'Description', 'Release-date', 'Rotten-tomatoes-score'];
  keysArr.forEach(key => {
    let li = document.createElement('li');
    li.innerText = `${key}: ${film[key]}`;
    ul.appendChild(li)
  });
  div.appendChild(ul);
}
