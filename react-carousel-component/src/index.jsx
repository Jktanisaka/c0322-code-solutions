import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images}/>);
