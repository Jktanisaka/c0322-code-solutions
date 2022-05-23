import React from 'react';

const images = [
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
  { link: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png' }
];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = { selected: 0, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' };
  }

  previousImage(event) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
    if (this.state.selected <= 0) {
      this.setState({ selected: images.length - 1, image: images[images.length - 1].link });
    } else { this.setState({ selected: this.state.selected - 1, image: images[this.state.selected - 1].link }); }
  }

  nextImage(event) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
    if (this.state.selected >= images.length - 1) {
      this.setState({ selected: 0, image: images[0].link });
    } else {
      this.setState({ selected: this.state.selected + 1, image: images[this.state.selected + 1].link });
    }
  }

  onClick(event) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
    this.setState({ selected: parseInt(event.target.getAttribute('data-id')), image: event.target.id });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  render() {
    return (
      <div className='row flex-column'>
        <div className='column-full main-styling'>
          <span>
            <i className="fa-solid fa-angle-left" onClick={this.previousImage}></i>
          </span>
          <img src={this.state.image}></img>
          <span>
            <i className="fa-solid fa-angle-right" onClick={this.nextImage}></i>
          </span>
        </div>
        <div className="column-full main-styling">
          {images.map((image, index) => {
            let classVar;
            if (index === this.state.selected) {
              classVar = 'fa-solid fa-circle';
            } else {
              classVar = 'fa-regular fa-circle';
            }
            return <i key={index} id={image.link} className={classVar} data-id={index} onClick={this.onClick}></i>;
          }
          )}
        </div>
      </div>
    );
  }
}
