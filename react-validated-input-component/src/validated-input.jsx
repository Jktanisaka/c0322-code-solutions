import React from 'react';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = { password: '', passwordText: 'A password is required.' };
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ passwordText: 'A password is required.' });
    }
    if (event.target.value.length < 8 && event.target.value.length > 0) {
      this.setState({ passwordText: 'Your password is too short.' });
    }
    if (event.target.value.length >= 8) {
      this.setState({ passwordText: null });
    }
  }

  render() {
    let fontAwesomeClass = 'fa-solid fa-xmark';
    if (!this.state.passwordText) {
      fontAwesomeClass = 'fa-solid fa-check';
    }
    return (
    <div>
      <h2>Password</h2>
      <div className='input-container'>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
          <i className={fontAwesomeClass}></i>
      </div>
      <h5>{this.state.passwordText}</h5>
    </div>
    );
  }
}
