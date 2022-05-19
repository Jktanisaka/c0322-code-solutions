import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor='name'>Username</label>
      <input type="text" name="name" value={this.state.username} onChange={this.handleUsernameChange}></input>
      <label htmlFor='password'>Password</label>
      <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
      <button type='submit' value='submit'>Sign Up</button>
      </form>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
