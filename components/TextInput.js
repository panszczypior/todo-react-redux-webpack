import React, { Component } from 'react';
import TextDisplay from './TextDisplay';
class TextInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
    <div>
      <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>
      <TextDisplay text={this.state.inputValue}/>
    </div>
    );
  }
};

export default TextInput;
