import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { status: 'on' };

  }

  handleClick() {
    if (this.state.status === 'on') {
      this.setState({ status: 'off' });
    }
    if (this.state.status === 'off') {
      this.setState({ status: 'on' });
    }
  }

  render() {
    const isToggled = this.state.status;
    if (isToggled === 'on') {
      return <div className='outer'><div className='circle'><div className='number'>1234</div></div><div className="play"><i className="fa-solid fa-play"></i></div></div>;
    }
  }
}
