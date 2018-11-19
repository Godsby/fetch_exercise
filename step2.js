
document.addEventListener('DOMContentLoaded', () => {

  // let film = document.querySelector('#film');
  var movieObj = {};
  fetchAndAppend();

  // film.addEventListener('change', (event) => {
  //   removeAndDisplay();
  // });

  function fetchAndAppend() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {

      if (!response.ok) {
        throw new Error('Connection Error!');
      }

      return response.json();
    })
    .then(parsedRes => {
      films = parsedRes;
      let select = document.querySelector('select');
      if (!parsedRes.ok) {
        films.forEach(film => {
          movieObj[film.id] = film;
          let opt = document.createElement('option');
          opt.innerText = film.title;
          select.appendChild(opt);
          opt.value = film.id;
        });
      }
    }).catch(err =>console.log(err));
  };

  let select = document.querySelector('select');
  select.addEventListener('change', (event) => {
    getMovie(event.target.value);

  });

  function getMovie(id) {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Connection Error!');
      }

      return response.json();
    })
    .then(res => {
      let div = document.querySelector('div');
      let ul = document.createElement('ul');
      let keysArr = ['title', 'director', 'description', 'release_date', 'rt_score'];
      keysArr.forEach(key => {
        let li = document.createElement('li');
        li.innerText = `${key}: \n ${res[key]}`;
        ul.appendChild(li);
      });
      div.appendChild(ul);
    });
  }
});
