import React from 'react';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { password: '', fontAwesomeClass: 'fa-solid fa-xmark' };
    this.passwordText = 'A password is required.';
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ fontAwesomeClass: 'fa-solid fa-xmark' });
      this.passwordText = 'A password is required.';
    }
    if (event.target.value.length < 8 && event.target.value.length > 0) {
      this.setState({ fontAwesomeClass: 'fa-solid fa-xmark' });
      this.passwordText = 'Your password is too short.';
    }
    if (event.target.value.length >= 8) {
      this.setState({ fontAwesomeClass: 'fa-solid fa-check' });
      this.passwordText = '';
    }
  }

  render() {
    return (
    <div>
      <h2>Password</h2>
      <div className='input-container'>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
          <i className={this.state.fontAwesomeClass}></i>
      </div>
      <h5>{this.passwordText}</h5>
    </div>
    );
  }
}
