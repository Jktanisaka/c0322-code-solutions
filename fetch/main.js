// const myRequest = new Request();

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failure', err));

fetch('https://pokeapi.co/api/v2/pokemon/212')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failure', err));
