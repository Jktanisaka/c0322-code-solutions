import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'hidden' };
  }

  render() {
    return (
      <div className='row'>
        <div className='column-full main-styling'>
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"></img>
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </div>
    );
  }
}

// https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png
