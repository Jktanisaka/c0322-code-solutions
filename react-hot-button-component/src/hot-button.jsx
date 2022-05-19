import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };

  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const isClicked = this.state.counter;
    if (isClicked < 3) {
      return <button onClick={this.handleClick} className="default">Hot Button</button>;
    }
    if (isClicked < 6) {
      return <button onClick={this.handleClick} className="blue">Hot Button</button>;
    }
    if (isClicked < 9) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;
    }
    if (isClicked < 12) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;
    }
    if (isClicked < 15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    }
    if (isClicked < 18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    }
    if (isClicked >= 18) {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}
