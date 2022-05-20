import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.popup = this.popup.bind(this);
    this.clickAway = this.clickAway.bind(this);
    this.state = { status: 'hidden' };
  }

  popup() {
    this.setState({ status: 'active' });
  }

  clickAway() {
    this.setState({ status: 'hidden' });
  }

  render() {
    if (this.state.status === 'hidden') {
      return (
    <div className='container'>
      <i className="fa-solid fa-bars" onClick={this.popup}></i>
    </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='column-75 overlay' onClick={this.clickAway}>
            <div className='column-25'>
              <ul>
                <li className='list-header'>Menu</li>
                <li className='list-body' onClick={this.clickAway}>Get Started</li>
                <li className='list-body'onClick={this.clickAway}>Sign In</li>
                <li className='list-body'onClick={this.clickAway}>About</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
