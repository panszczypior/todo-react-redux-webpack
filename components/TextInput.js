import React, { Component } from 'react';
import TextDisplay from './TextDisplay';
class TextInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleDeleteLetter = this.handleDeleteLetter.bind(this);
  }

  handleDeleteLetter() {
    this.setState({
      inputValue: this.state.inputValue.substring(0, this.state.inputValue.length-1),
    });
  }

  handleChangeInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
    <div>
      <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput} />
      <TextDisplay text={this.state.inputValue} onDeleteLetter={this.handleDeleteLetter} />
    </div>
    );
  }
};

export default TextInput;
