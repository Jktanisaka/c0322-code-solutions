import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { status: 'pause', number: 0 };
  }

  reset() {
    this.setState({ number: 0 });
  }

  handleClick() {
    if (this.state.status === 'pause') {
      this.setState({ status: 'play' });
      this.intervalID = setInterval(() => {
        this.setState({ number: this.state.number + 1 });
      }, 1000);
    } else {
      clearInterval(this.intervalID);
      this.setState({ status: 'pause', number: this.state.number });
    }
  }

  render() {
    const isPlaying = this.state.status;
    if (isPlaying === 'pause') {
      return <div className='outer'><div className='circle' onClick={this.reset}><div className='number'>{this.state.number}</div></div><div className="play"><i className="fa-solid fa-play" onClick={this.handleClick}></i></div></div>;
    }
    return <div className='outer'><div className='circle'><div className='number'>{this.state.number}</div></div><div className="play"><i className="fa-solid fa-pause" onClick={this.handleClick}></i></div></div>;
  }
}
