import React, { Component } from 'react';

class TextDisplay extends Component {

  constructor(){
    super();
  }

  handleClick(event) {
    onDeleteLetter();
  }

  render() {
    const { text, onDeleteLetter } = this.props;
    return (
      <div>
        <div>Input value: {text}</div>
        <button onClick={onDeleteLetter.bind(this)}>delete one letter</button>
      </div>
    );
  }
};

TextDisplay.propTypes = {
  text: React.PropTypes.string,
  onDeleteLetter: React.PropTypes.func,
}

export default TextDisplay;
