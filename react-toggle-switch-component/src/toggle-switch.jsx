import React from 'react';

export default class ToggleSwitch extends React.Component {
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
      return <div onClick={this.handleClick} className='on' ><div className='inside'><div className='text'>ON</div></div></div>;
    } else {
      return <div onClick={this.handleClick} className='off' ><div className="inside"><div className='text'>OFF</div></div></div>;
    }
  }
}
